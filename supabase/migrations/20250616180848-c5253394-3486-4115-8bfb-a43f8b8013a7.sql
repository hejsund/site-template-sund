
-- Ge anon-rollen läsbehörighet till vault.decrypted_secrets
GRANT USAGE ON SCHEMA vault TO anon;
GRANT SELECT ON vault.decrypted_secrets TO anon;

-- Alternativt, om vi vill vara mer restriktiva, kan vi skapa en SECURITY DEFINER funktion
-- som kör med högre behörigheter, men för nu ger vi direkt åtkomst till anon
