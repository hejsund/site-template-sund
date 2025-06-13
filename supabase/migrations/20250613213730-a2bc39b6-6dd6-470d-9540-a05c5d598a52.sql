
-- First, let's see what policies currently exist on sb_quiz_leads
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'sb_quiz_leads';

-- Drop the existing restrictive policy that's causing the RLS violation
DROP POLICY IF EXISTS "Allow admin read on sb_quiz_leads" ON public.sb_quiz_leads;

-- Create policy to allow reading quiz leads (for admin/sync purposes) if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'sb_quiz_leads' 
        AND policyname = 'Allow reading quiz leads'
    ) THEN
        CREATE POLICY "Allow reading quiz leads" 
        ON public.sb_quiz_leads 
        FOR SELECT 
        USING (true);
    END IF;
END $$;
