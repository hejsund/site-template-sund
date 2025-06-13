
-- Enable RLS on sb_home_page_leads table (if not already enabled)
ALTER TABLE public.sb_home_page_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (since this is a public lead form)
CREATE POLICY "Allow public lead insertion" 
  ON public.sb_home_page_leads 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to allow reading leads (for admin purposes)
CREATE POLICY "Allow reading leads" 
  ON public.sb_home_page_leads 
  FOR SELECT 
  USING (true);
