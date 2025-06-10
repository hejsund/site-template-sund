
-- Add Row Level Security policies for sb_home_page_leads table
CREATE POLICY "Allow public insert on sb_home_page_leads" 
  ON public.sb_home_page_leads 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow admin read on sb_home_page_leads" 
  ON public.sb_home_page_leads 
  FOR SELECT 
  USING (false); -- Only admins should be able to read this data

-- Add Row Level Security policies for sb_quiz_leads table  
CREATE POLICY "Allow public insert on sb_quiz_leads" 
  ON public.sb_quiz_leads 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow admin read on sb_quiz_leads" 
  ON public.sb_quiz_leads 
  FOR SELECT 
  USING (false); -- Only admins should be able to read this data
