
-- Add columns to support rich article content
ALTER TABLE public.sb_content_sub_pages 
ADD COLUMN IF NOT EXISTS theme_color text DEFAULT 'green',
ADD COLUMN IF NOT EXISTS secondary_color text DEFAULT 'blue', 
ADD COLUMN IF NOT EXISTS hero_image_alt text,
ADD COLUMN IF NOT EXISTS lead_text text,
ADD COLUMN IF NOT EXISTS email_signup_title text,
ADD COLUMN IF NOT EXISTS email_signup_description text,
ADD COLUMN IF NOT EXISTS email_signup_button_text text DEFAULT 'Skicka!',
ADD COLUMN IF NOT EXISTS cta_title text,
ADD COLUMN IF NOT EXISTS cta_primary_button_text text DEFAULT 'Ta vårt quiz',
ADD COLUMN IF NOT EXISTS cta_secondary_button_text text DEFAULT 'Läs mer',
ADD COLUMN IF NOT EXISTS custom_sections jsonb,
ADD COLUMN IF NOT EXISTS has_custom_layout boolean DEFAULT false;

-- Add comment to explain the custom_sections structure
COMMENT ON COLUMN public.sb_content_sub_pages.custom_sections IS 'JSON structure for custom article sections like callouts, grids, step-by-step guides, etc.';
