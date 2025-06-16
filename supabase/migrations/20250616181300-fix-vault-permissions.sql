
-- Ge fler behörigheter för vault-åtkomst
GRANT USAGE ON SCHEMA vault TO anon;
GRANT SELECT ON vault.decrypted_secrets TO anon;

-- Skapa en SECURITY DEFINER funktion för att komma åt vault säkert
CREATE OR REPLACE FUNCTION public.get_airtable_api_key()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  _api_key text;
BEGIN
  SELECT decrypted_secret INTO _api_key 
  FROM vault.decrypted_secrets 
  WHERE name = 'SB_AIRTABLE_LOVABLE_2';
  
  RETURN _api_key;
EXCEPTION
  WHEN OTHERS THEN
    -- Om vi inte kan komma åt vault, returnera null
    RETURN NULL;
END;
$$;

-- Ge anon behörighet att köra denna funktion
GRANT EXECUTE ON FUNCTION public.get_airtable_api_key() TO anon;
