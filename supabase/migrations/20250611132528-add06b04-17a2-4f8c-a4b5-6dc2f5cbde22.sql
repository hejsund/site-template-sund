
-- Create a table for storing lifestyle gallery images
CREATE TABLE public.sb_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  src TEXT NOT NULL,
  alt TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT DEFAULT 'lifestyle',
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create trigger to automatically update the updated_at column
CREATE TRIGGER update_sb_images_updated_at
  BEFORE UPDATE ON public.sb_images
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert the current lifestyle gallery images into the database
INSERT INTO public.sb_images (src, alt, title, description, display_order) VALUES
('/lovable-uploads/617bd669-c316-43bc-b203-4a8d32228528.png', 'Träning som känns som lek', 'Träning som känns som lek', 'Upptäck hur enkelt det kan vara', 1),
('/lovable-uploads/5f369290-4679-4086-8f9a-0d8720545743.png', 'Hälsosam mat för hela familjen', 'Mat hela familjen älskar', 'Enkla recept med smak av sommar', 2),
('/lovable-uploads/cb1cd869-a091-4612-b282-44d8a6771b89.png', 'Balans mellan aktivitet och vila', 'Balans som faktiskt fungerar', 'Hitta din egen väg till välmående', 3),
('/lovable-uploads/c2e01a19-6725-4264-b55c-620731d63025.png', 'Sommarglädje och aktivitet', 'Sommarens glädje', 'Varje dag kan vara ett äventyr', 4),
('/lovable-uploads/bff87cd9-ad93-40ea-9efb-e759131d22d1.png', 'Familjetid och gemenskap', 'Familjetid som räknas', 'Skapa minnen tillsammans', 5),
('/lovable-uploads/da91e45b-8314-4025-a9e0-0de2406ff5c5.png', 'Naturens kraft för välmående', 'Naturens healing', 'Hitta ro i det enkla', 6),
('/lovable-uploads/bca7b0a7-03fd-4d88-b59a-9a8d209e682d.png', 'Aktiv livsstil', 'Rörelse som energi', 'Känn kraften i din kropp', 7),
('/lovable-uploads/fd45d991-ea51-4cda-a3cc-24f6c2b05728.png', 'Hälsosamma vanor', 'Vanor som varar', 'Små steg, stora förändringar', 8);

-- Enable Row Level Security (make it public for now since this is display content)
ALTER TABLE public.sb_images ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access to images" 
  ON public.sb_images 
  FOR SELECT 
  USING (is_active = true);
