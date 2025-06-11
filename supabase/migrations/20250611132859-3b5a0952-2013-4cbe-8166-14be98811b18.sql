
-- Add a tag column to track where images are used
ALTER TABLE public.sb_images 
ADD COLUMN tags TEXT[] DEFAULT '{}';

-- Update existing lifestyle gallery images with their tag
UPDATE public.sb_images 
SET tags = ARRAY['LifestyleGallery.tsx']
WHERE category = 'lifestyle';

-- Insert images used in other components with their respective tags
INSERT INTO public.sb_images (src, alt, title, description, category, display_order, tags) VALUES

-- Hero.tsx images
('/lovable-uploads/b421d335-bc7b-4b5b-8e07-edd16ebbb404.png', 'Charlotte Steinwig - Sommarboosten', 'Charlotte Steinwig', 'Grundare av Sommarboosten', 'hero', 1, ARRAY['Hero.tsx']),

-- CharlotteIntro.tsx images  
('/lovable-uploads/db3c75e8-d40b-4560-88c4-76cbd1a82f05.png', 'Charlotte Steinwig profil', 'Charlotte Steinwig', 'Hälsoexpert och grundare', 'profile', 1, ARRAY['CharlotteIntro.tsx']),

-- FinalCTA.tsx images
('/lovable-uploads/7eeaadd6-cfbf-4f28-8d1c-4c9222ab292a.png', 'Sommarboosten community', 'Sommarboosten gemenskap', 'Glädjefylld träning tillsammans', 'community', 1, ARRAY['FinalCTA.tsx']),

-- Quiz.tsx images (if any specific ones are used)
('/lovable-uploads/ce7277f6-3378-4978-9239-9c8955f81251.png', 'Quiz bakgrund', 'Hitta din väg', 'Personlig hälsoresa', 'quiz', 1, ARRAY['Quiz.tsx']),

-- SommarboostenArticle.tsx images
('/lovable-uploads/dd9c854e-5f3a-4e94-b87a-5db173a99705.png', 'Sommarboosten artikel', 'Upptäck Sommarboosten', 'Din resa till välmående', 'article', 1, ARRAY['SommarboostenArticle.tsx']),

-- Testimonials.tsx images (if any specific ones are used)
('/lovable-uploads/fa62a6e9-56ca-4997-8b40-17604a32e215.png', 'Nöjda deltagare', 'Framgångshistorier', 'Verkliga resultat från deltagare', 'testimonials', 1, ARRAY['Testimonials.tsx']),

-- Navigation.tsx or other component images that might be used
('/lovable-uploads/0a9897c0-1dce-4db3-b5ee-b2a62d6f836b.png', 'Sommarboosten logo', 'Sommarboosten', 'Logotyp för Sommarboosten', 'branding', 1, ARRAY['Navigation.tsx']),

-- Article page images
('/lovable-uploads/059d2e15-d355-4a51-a399-e40bddb1fb40.png', 'Träningsartikel', 'Effektiv träning', 'Träning för alla nivåer', 'article_image', 1, ARRAY['TrainingArticlePage.tsx']),
('/lovable-uploads/040754bd-84eb-44e7-977f-3b1a600d8402.png', 'Kostartikel', 'Hälsosam kost', 'Näringsrik mat för familjen', 'article_image', 2, ARRAY['NutritionArticlePage.tsx']),
('/lovable-uploads/2de3bc93-d7a5-4596-ad08-909252fa06c9.png', 'Vanorartikel', 'Hållbara vanor', 'Bygg bestående förändringar', 'article_image', 3, ARRAY['HabitsArticlePage.tsx']),
('/lovable-uploads/393c1d8b-c123-455f-ae12-0005270f9bb2.png', 'Mental hälsa artikel', 'Välmående och balans', 'Mental hälsa i vardagen', 'article_image', 4, ARRAY['MentalHealthArticlePage.tsx']),
('/lovable-uploads/0920abf0-6baa-45af-b26d-95485ad33852.png', 'Stresshantering artikel', 'Hantera stress', 'Verktyg för stresshantering', 'article_image', 5, ARRAY['StressManagementArticlePage.tsx']);

-- Create an index on tags for better query performance
CREATE INDEX idx_sb_images_tags ON public.sb_images USING GIN (tags);

-- Update the RLS policy to still allow public read access
DROP POLICY IF EXISTS "Allow public read access to images" ON public.sb_images;
CREATE POLICY "Allow public read access to images" 
  ON public.sb_images 
  FOR SELECT 
  USING (is_active = true);
