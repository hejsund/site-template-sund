
-- Tillfälligt inaktivera triggern som orsakar problemet
DROP TRIGGER IF EXISTS airtable_backup_home_leads ON public.sb_home_page_leads;
DROP TRIGGER IF EXISTS airtable_backup_quiz_leads ON public.sb_quiz_leads;

-- Skapa en enklare version av triggern som inte använder vault direkt
-- Istället kommer vi att använda edge functions för synkning
CREATE OR REPLACE FUNCTION public.simple_trigger_notification()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  -- Bara logga att en ny post har skapats utan att försöka komma åt vault
  RAISE NOTICE 'New lead inserted: % from table %', NEW.email, TG_TABLE_NAME;
  
  RETURN NEW;
END;
$$;

-- Skapa enkla triggers som bara loggar
CREATE TRIGGER simple_home_leads_trigger
  AFTER INSERT ON public.sb_home_page_leads
  FOR EACH ROW EXECUTE FUNCTION public.simple_trigger_notification();

CREATE TRIGGER simple_quiz_leads_trigger
  AFTER INSERT ON public.sb_quiz_leads
  FOR EACH ROW EXECUTE FUNCTION public.simple_trigger_notification();
