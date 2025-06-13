
-- Create table for Meta event logging
CREATE TABLE sb_meta_event_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL CHECK (event_type IN ('page_view', 'lead')),
  email_hash text,
  event_data jsonb,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'error')),
  timestamp timestamptz DEFAULT now()
);

-- Create index for efficient querying of pending events
CREATE INDEX idx_meta_event_log_status_timestamp ON sb_meta_event_log (status, timestamp);

-- Enable RLS
ALTER TABLE sb_meta_event_log ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert events (public logging)
CREATE POLICY "Allow event logging" 
  ON sb_meta_event_log 
  FOR INSERT 
  WITH CHECK (true);

-- Allow system to read and update events (for processing)
CREATE POLICY "Allow event processing" 
  ON sb_meta_event_log 
  FOR ALL 
  USING (true);
