
-- Create a function that will trigger the Airtable sync
CREATE OR REPLACE FUNCTION public.trigger_airtable_sync()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Use pg_notify to send a notification that will trigger our edge function
  PERFORM pg_notify('airtable_sync_trigger', json_build_object(
    'table', TG_TABLE_NAME,
    'operation', TG_OP,
    'record_id', NEW.id,
    'email', NEW.email
  )::text);
  
  RETURN NEW;
END;
$$;

-- Create triggers for both tables
CREATE OR REPLACE TRIGGER sb_quiz_leads_sync_trigger
  AFTER INSERT ON public.sb_quiz_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_airtable_sync();

CREATE OR REPLACE TRIGGER sb_home_page_leads_sync_trigger
  AFTER INSERT ON public.sb_home_page_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.trigger_airtable_sync();

-- Enable realtime for the notification channel (optional, for monitoring)
-- This allows us to listen to the notifications in real-time if needed
