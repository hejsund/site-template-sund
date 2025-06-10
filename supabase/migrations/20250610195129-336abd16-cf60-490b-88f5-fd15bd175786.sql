
-- Enable the pg_cron extension for scheduling tasks
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Enable the pg_net extension for making HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a cron job that runs every hour to sync data to Airtable
SELECT cron.schedule(
  'airtable-sync-hourly',
  '0 * * * *', -- Run at the start of every hour
  $$
  SELECT
    net.http_post(
        url:='https://ttidnpncifqtetnhcdhq.supabase.co/functions/v1/sync-to-airtable',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0aWRucG5jaWZxdGV0bmhjZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDk1OTksImV4cCI6MjA2NDA4NTU5OX0.G4K878G5nU__YxCobhIhivH5JQimGTLOzFvm12BQ7_g"}'::jsonb,
        body:='{"scheduled": true}'::jsonb
    ) as request_id;
  $$
);
