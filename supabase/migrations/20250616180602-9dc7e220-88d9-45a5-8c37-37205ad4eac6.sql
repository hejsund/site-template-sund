
-- Först, lägg till en synced_at kolumn i båda tabellerna för att spåra synkningsstatus
ALTER TABLE public.sb_home_page_leads 
ADD COLUMN IF NOT EXISTS synced_at timestamp with time zone;

ALTER TABLE public.sb_quiz_leads 
ADD COLUMN IF NOT EXISTS synced_at timestamp with time zone;

-- Aktivera pg_net extension (om den inte redan finns)
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Skapa en funktion som POST:ar till Airtable via Database Webhook
CREATE OR REPLACE FUNCTION public.airtable_backup()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  _url text := 'https://api.airtable.com/v0/appV23udxU8dqgM5V/tblO1QW2WKJZAwmBX';
  _api_key text;
BEGIN
  -- Hämta API-nyckeln från secrets
  SELECT decrypted_secret INTO _api_key 
  FROM vault.decrypted_secrets 
  WHERE name = 'SB_AIRTABLE_LOVABLE_2';
  
  -- Skicka bara om posten inte redan är synkad
  IF NEW.synced_at IS NULL THEN
    PERFORM net.http_post(
      url := _url,
      headers := jsonb_build_object(
        'Authorization', 'Bearer ' || _api_key,
        'Content-Type', 'application/json'
      ),
      body := jsonb_build_object(
        'records', jsonb_build_array(
          jsonb_build_object(
            'fields', jsonb_build_object(
              'Email', NEW.email,
              'Source', COALESCE(NEW.source, 'unknown'),
              'Date', 'Database Webhook - ' || to_char(NEW.created_at, 'YYYY-MM-DD HH24:MI:SS')
            )
          )
        )
      )
    );
    
    -- Markera som synkad så backupen inte loopar
    NEW.synced_at := now();
  END IF;
  
  RETURN NEW;
END;
$$;

-- Skapa triggers på båda tabellerna
CREATE TRIGGER airtable_backup_home_leads
  AFTER INSERT OR UPDATE ON public.sb_home_page_leads
  FOR EACH ROW EXECUTE FUNCTION public.airtable_backup();

CREATE TRIGGER airtable_backup_quiz_leads
  AFTER INSERT OR UPDATE ON public.sb_quiz_leads
  FOR EACH ROW EXECUTE FUNCTION public.airtable_backup();

-- Skapa en separat funktion för nattlig synkning
CREATE OR REPLACE FUNCTION public.sync_airtable_nightly()
RETURNS void
LANGUAGE plpgsql
AS $$
DECLARE
  _api_key text;
  _url text := 'https://api.airtable.com/v0/appV23udxU8dqgM5V/tblO1QW2WKJZAwmBX';
  _home_records jsonb;
  _quiz_records jsonb;
BEGIN
  -- Hämta API-nyckeln
  SELECT decrypted_secret INTO _api_key 
  FROM vault.decrypted_secrets 
  WHERE name = 'SB_AIRTABLE_LOVABLE_2';
  
  -- Hämta osykade home page leads
  SELECT jsonb_agg(
    jsonb_build_object(
      'fields', jsonb_build_object(
        'Email', email,
        'Source', COALESCE(source, 'home_page'),
        'Date', 'Nightly Sync - ' || to_char(created_at, 'YYYY-MM-DD HH24:MI:SS')
      )
    )
  ) INTO _home_records
  FROM public.sb_home_page_leads 
  WHERE synced_at IS NULL;
  
  -- Skicka home page leads om det finns några
  IF _home_records IS NOT NULL THEN
    PERFORM net.http_post(
      url := _url,
      headers := jsonb_build_object(
        'Authorization', 'Bearer ' || _api_key,
        'Content-Type', 'application/json'
      ),
      body := jsonb_build_object('records', _home_records)
    );
    
    -- Markera som synkade
    UPDATE public.sb_home_page_leads 
    SET synced_at = now() 
    WHERE synced_at IS NULL;
  END IF;
  
  -- Hämta osykade quiz leads
  SELECT jsonb_agg(
    jsonb_build_object(
      'fields', jsonb_build_object(
        'Email', email,
        'Source', COALESCE(source, 'quiz'),
        'Date', 'Nightly Sync - ' || to_char(created_at, 'YYYY-MM-DD HH24:MI:SS')
      )
    )
  ) INTO _quiz_records
  FROM public.sb_quiz_leads 
  WHERE synced_at IS NULL;
  
  -- Skicka quiz leads om det finns några
  IF _quiz_records IS NOT NULL THEN
    PERFORM net.http_post(
      url := _url,
      headers := jsonb_build_object(
        'Authorization', 'Bearer ' || _api_key,
        'Content-Type', 'application/json'
      ),
      body := jsonb_build_object('records', _quiz_records)
    );
    
    -- Markera som synkade
    UPDATE public.sb_quiz_leads 
    SET synced_at = now() 
    WHERE synced_at IS NULL;
  END IF;
END;
$$;

-- Skapa en nattlig cron job som kallar funktionen
SELECT cron.schedule(
  'sync_airtable_nightly_backup',
  '0 2 * * *',
  'SELECT public.sync_airtable_nightly();'
);
