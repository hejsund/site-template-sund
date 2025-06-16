
-- Ta bort ALLA triggers som kan orsaka problem
DROP TRIGGER IF EXISTS log_home_leads ON public.sb_home_page_leads;
DROP TRIGGER IF EXISTS log_quiz_leads ON public.sb_quiz_leads;
DROP TRIGGER IF EXISTS simple_home_leads_trigger ON public.sb_home_page_leads;
DROP TRIGGER IF EXISTS simple_quiz_leads_trigger ON public.sb_quiz_leads;
DROP TRIGGER IF EXISTS airtable_backup_home_leads_safe ON public.sb_home_page_leads;
DROP TRIGGER IF EXISTS airtable_backup_quiz_leads_safe ON public.sb_quiz_leads;

-- Ta bort alla problematiska funktioner
DROP FUNCTION IF EXISTS public.simple_lead_logger();
DROP FUNCTION IF EXISTS public.simple_trigger_notification();
DROP FUNCTION IF EXISTS public.get_airtable_api_key();

-- Se till att anon har alla nödvändiga behörigheter för tabellerna
GRANT INSERT ON public.sb_home_page_leads TO anon;
GRANT INSERT ON public.sb_quiz_leads TO anon;
GRANT SELECT ON public.sb_home_page_leads TO anon;
GRANT SELECT ON public.sb_quiz_leads TO anon;

-- Se till att authenticated också har behörigheter
GRANT INSERT ON public.sb_home_page_leads TO authenticated;
GRANT INSERT ON public.sb_quiz_leads TO authenticated;
GRANT SELECT ON public.sb_home_page_leads TO authenticated;
GRANT SELECT ON public.sb_quiz_leads TO authenticated;

-- Ta bort alla publikationer som kan orsaka problem
DROP PUBLICATION IF EXISTS supabase_realtime;

-- Skapa en helt minimal publikation om det behövs
CREATE PUBLICATION supabase_realtime;

-- Lägg INTE till tabellerna i publikationen än - vi testar utan triggers först
