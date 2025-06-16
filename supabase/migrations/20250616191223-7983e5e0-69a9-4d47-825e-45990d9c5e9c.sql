
-- Create new home page leads table without encryption
CREATE TABLE public.sb_leads_home_page_new (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT DEFAULT 'home_page',
  user_agent TEXT,
  ip_address INET,
  year INTEGER NOT NULL DEFAULT EXTRACT(year FROM now()),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  synced_at TIMESTAMP WITH TIME ZONE
);

-- Create new quiz leads table without encryption
CREATE TABLE public.sb_leads_quiz_new (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  age TEXT,
  gender TEXT,
  quiz_score INTEGER,
  quiz_answers JSONB,
  recommendation_type TEXT,
  source TEXT DEFAULT 'quiz',
  user_agent TEXT,
  ip_address INET,
  year INTEGER NOT NULL DEFAULT EXTRACT(year FROM now()),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  synced_at TIMESTAMP WITH TIME ZONE
);

-- Add updated_at trigger for home page leads
CREATE TRIGGER update_sb_leads_home_page_new_updated_at
    BEFORE UPDATE ON public.sb_leads_home_page_new
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Add updated_at trigger for quiz leads
CREATE TRIGGER update_sb_leads_quiz_new_updated_at
    BEFORE UPDATE ON public.sb_leads_quiz_new
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_sb_leads_home_page_new_email ON public.sb_leads_home_page_new(email);
CREATE INDEX idx_sb_leads_home_page_new_created_at ON public.sb_leads_home_page_new(created_at);
CREATE INDEX idx_sb_leads_home_page_new_synced_at ON public.sb_leads_home_page_new(synced_at);

CREATE INDEX idx_sb_leads_quiz_new_email ON public.sb_leads_quiz_new(email);
CREATE INDEX idx_sb_leads_quiz_new_created_at ON public.sb_leads_quiz_new(created_at);
CREATE INDEX idx_sb_leads_quiz_new_synced_at ON public.sb_leads_quiz_new(synced_at);

-- Copy existing data from old tables to new tables
INSERT INTO public.sb_leads_home_page_new (email, source, user_agent, year, created_at, updated_at, synced_at)
SELECT email, source, user_agent, year, created_at, updated_at, synced_at
FROM public.sb_home_page_leads;

INSERT INTO public.sb_leads_quiz_new (email, age, gender, quiz_score, quiz_answers, recommendation_type, source, user_agent, year, created_at, updated_at, synced_at)
SELECT email, age, gender, quiz_score, quiz_answers, recommendation_type, source, user_agent, year, created_at, updated_at, synced_at
FROM public.sb_quiz_leads;
