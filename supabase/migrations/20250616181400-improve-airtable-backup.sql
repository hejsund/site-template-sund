
-- Förbättra airtable backup funktionen för att använda security definer
CREATE OR REPLACE FUNCTION public.airtable_backup_safe()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  _url text := 'https://api.airtable.com/v0/appV23udxU8dqgM5V/tblO1QW2WKJZAwmBX';
  _api_key text;
BEGIN
  -- Använd den säkra funktionen för att hämta API-nyckeln
  SELECT public.get_airtable_api_key() INTO _api_key;
  
  -- Om vi inte kan få API-nyckeln, fortsätt ändå med att spara posten
  IF _api_key IS NULL THEN
    RAISE NOTICE 'Could not retrieve Airtable API key, skipping sync for %', NEW.email;
    RETURN NEW;
  END IF;
  
  -- Skicka bara om posten inte redan är synkad
  IF NEW.synced_at IS NULL THEN
    BEGIN
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
    EXCEPTION
      WHEN OTHERS THEN
        -- Om Airtable sync misslyckas, fortsätt ändå med att spara posten
        RAISE NOTICE 'Airtable sync failed for %, but continuing: %', NEW.email, SQLERRM;
    END;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Ersätt de enkla triggerna med den förbättrade versionen
DROP TRIGGER IF EXISTS simple_home_leads_trigger ON public.sb_home_page_leads;
DROP TRIGGER IF EXISTS simple_quiz_leads_trigger ON public.sb_quiz_leads;

CREATE TRIGGER airtable_backup_home_leads_safe
  AFTER INSERT OR UPDATE ON public.sb_home_page_leads
  FOR EACH ROW EXECUTE FUNCTION public.airtable_backup_safe();

CREATE TRIGGER airtable_backup_quiz_leads_safe
  AFTER INSERT OR UPDATE ON public.sb_quiz_leads
  FOR EACH ROW EXECUTE FUNCTION public.airtable_backup_safe();
