
-- Create the sb_content_sub_pages table for storing articles
CREATE TABLE public.sb_content_sub_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  category TEXT NOT NULL,
  read_time TEXT NOT NULL,
  image_url TEXT NOT NULL,
  icon TEXT NOT NULL,
  color TEXT NOT NULL,
  content TEXT,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_sb_content_sub_pages_updated_at
  BEFORE UPDATE ON public.sb_content_sub_pages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample articles to test the functionality
INSERT INTO public.sb_content_sub_pages (title, excerpt, category, read_time, image_url, icon, color, content, slug) VALUES
(
  'Effektiv träning för din sommarsemester',
  'Upptäck hur du kan hålla dig i form även under semestern med enkla och roliga träningsrutiner.',
  'Träning',
  '5 min läsning',
  '/lovable-uploads/67cd34f1-1979-42e6-b2da-6f8f6f298078.png',
  'Zap',
  'coral',
  'Detaljerat innehåll om sommarträning...',
  'sommartraning'
),
(
  'Hälsosam kost under semestern',
  'Tips för att äta näringsrikt och njuta av maten även när du är på semester.',
  'Kost',
  '7 min läsning',
  '/lovable-uploads/bca7b0a7-03fd-4d88-b59a-9a8d209e682d.png',
  'Heart',
  'green',
  'Detaljerat innehåll om semesterkost...',
  'semesterkost'
),
(
  'Bygg hållbara vanor på 30 dagar',
  'En steg-för-steg guide för att skapa bestående förändringar i ditt liv.',
  'Vanor',
  '6 min läsning',
  '/lovable-uploads/bff87cd9-ad93-40ea-9efb-e759131d22d1.png',
  'Calendar',
  'purple',
  'Detaljerat innehåll om vanor...',
  'hallbara-vanor'
),
(
  'Mental hälsa och välmående',
  'Praktiska verktyg för att ta hand om din mentala hälsa varje dag.',
  'Mental hälsa',
  '8 min läsning',
  '/lovable-uploads/c5f0a385-0490-44d7-abc2-0aede77986a4.png',
  'Brain',
  'indigo',
  'Detaljerat innehåll om mental hälsa...',
  'mental-halsa-valmående'
),
(
  'Stresshantering för moderna människor',
  'Lär dig effektiva tekniker för att hantera stress i vardagen.',
  'Mental hälsa',
  '10 min läsning',
  '/lovable-uploads/da91e45b-8314-4025-a9e0-0de2406ff5c5.png',
  'Brain',
  'indigo',
  'Detaljerat innehåll om stresshantering...',
  'stresshantering'
);
