
-- Remove the existing hourly cron job
SELECT cron.unschedule('airtable-sync-hourly');

-- Create a new cron job that runs every 5 minutes
SELECT cron.schedule(
  'airtable-sync-5min',
  '*/5 * * * *', -- Run every 5 minutes
  $$
  SELECT
    net.http_post(
        url:='https://ttidnpncifqtetnhcdhq.supabase.co/functions/v1/sync-to-airtable',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aWRucG5jaWZxdGV0bmhjZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDk1OTksImV4cCI6MjA2NDA4NTU5OX0.G4K878G5nU__YxCobhIhivH5JQimGTLOzFvm12BQ7_g"}'::jsonb,
        body:='{"scheduled": true, "source": "cron_5min"}'::jsonb
    ) as request_id;
  $$
);
