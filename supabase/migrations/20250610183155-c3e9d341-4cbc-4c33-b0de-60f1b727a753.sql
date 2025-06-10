
-- Create table for home page email leads
CREATE TABLE public.sb_home_page_leads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  year integer NOT NULL DEFAULT EXTRACT(year FROM now()),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  ip_address inet,
  user_agent text,
  source text DEFAULT 'home_page'
);

-- Create table for quiz email leads
CREATE TABLE public.sb_quiz_leads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  age text,
  gender text,
  quiz_score integer,
  quiz_answers jsonb,
  recommendation_type text,
  year integer NOT NULL DEFAULT EXTRACT(year FROM now()),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  ip_address inet,
  user_agent text,
  source text DEFAULT 'quiz'
);

-- Add triggers to update the updated_at column automatically
CREATE TRIGGER update_sb_home_page_leads_updated_at
  BEFORE UPDATE ON public.sb_home_page_leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_sb_quiz_leads_updated_at
  BEFORE UPDATE ON public.sb_quiz_leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Enable Row Level Security (optional - set to public access for now)
ALTER TABLE public.sb_home_page_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sb_quiz_leads ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no authentication required)
CREATE POLICY "Public can insert home page leads" 
  ON public.sb_home_page_leads 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Public can insert quiz leads" 
  ON public.sb_quiz_leads 
  FOR INSERT 
  WITH CHECK (true);
