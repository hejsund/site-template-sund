
-- Ta bort alla problematiska triggers som försöker komma åt vault
DROP TRIGGER IF EXISTS airtable_backup_home_leads_safe ON public.sb_home_page_leads;
DROP TRIGGER IF EXISTS airtable_backup_quiz_leads_safe ON public.sb_quiz_leads;
DROP TRIGGER IF EXISTS airtable_backup_home_leads ON public.sb_home_page_leads;
DROP TRIGGER IF EXISTS airtable_backup_quiz_leads ON public.sb_quiz_leads;

-- Ta bort den problematiska funktionen
DROP FUNCTION IF EXISTS public.airtable_backup();
DROP FUNCTION IF EXISTS public.airtable_backup_safe();

-- Skapa en helt enkel trigger som bara loggar utan att försöka komma åt vault
CREATE OR REPLACE FUNCTION public.simple_lead_logger()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Bara logga att en ny lead har skapats
  RAISE NOTICE 'New lead created: % from %', NEW.email, TG_TABLE_NAME;
  
  -- Returnera NEW så att insert fungerar
  RETURN NEW;
END;
$$;

-- Skapa enkla triggers som bara loggar
CREATE TRIGGER log_home_leads
  AFTER INSERT ON public.sb_home_page_leads
  FOR EACH ROW EXECUTE FUNCTION public.simple_lead_logger();

CREATE TRIGGER log_quiz_leads
  AFTER INSERT ON public.sb_quiz_leads
  FOR EACH ROW EXECUTE FUNCTION public.simple_lead_logger();

-- Ge anon-rollen explicit behörighet att köra den enkla funktionen
GRANT EXECUTE ON FUNCTION public.simple_lead_logger() TO anon;
GRANT EXECUTE ON FUNCTION public.simple_lead_logger() TO authenticated;

-- Se till att anon kan insertera i tabellerna
GRANT INSERT ON public.sb_home_page_leads TO anon;
GRANT INSERT ON public.sb_quiz_leads TO anon;
