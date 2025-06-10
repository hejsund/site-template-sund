
-- Enable Row Level Security on the leads table
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public insert on leads table (so other site can continue writing)
CREATE POLICY "Allow public insert on leads" 
  ON public.leads 
  FOR INSERT 
  WITH CHECK (true);

-- Allow admin read on leads table (restrict read access to admins only)
CREATE POLICY "Allow admin read on leads" 
  ON public.leads 
  FOR SELECT 
  USING (false); -- Only admins should be able to read this data

-- Prevent public updates and deletes for security
CREATE POLICY "Prevent public update on leads" 
  ON public.leads 
  FOR UPDATE 
  USING (false);

CREATE POLICY "Prevent public delete on leads" 
  ON public.leads 
  FOR DELETE 
  USING (false);
