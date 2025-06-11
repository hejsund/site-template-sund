
-- First, let's check what articles we currently have in the database
-- Then add any missing articles from the static files

-- Add the remaining articles that appear to be in static files but not in database
INSERT INTO public.sb_content_sub_pages (title, excerpt, category, read_time, image_url, icon, color, content, slug) VALUES
(
  'Träning efter 40 - Din guide till hållbar fitness',
  'Upptäck hur du kan träna smart och säkert efter 40 för att behålla styrka, rörlighet och energi genom åren.',
  'Träning',
  '8 min läsning',
  '/lovable-uploads/617bd669-c316-43bc-b203-4a8d32228528.png',
  'Zap',
  'coral',
  '<div>
    <p class="lead text-green-700 font-text mb-6">
      Efter 40 förändras kroppen och träningsbehovet. Här får du konkreta tips för att träna smart och undvika skador.
    </p>
    
    <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Varför träning efter 40 är annorlunda</h2>
    <p class="mb-6">
      När vi blir äldre förändras vår kropp på flera sätt som påverkar träningen. Muskelmassan minskar, ledrörligheten försämras, 
      och återhämtningen tar längre tid. Men det betyder inte att vi ska träna mindre - tvärtom!
    </p>

    <h3 class="text-xl font-semibold text-green-700 mb-3">Fokusområden efter 40:</h3>
    <ul class="list-disc list-inside mb-6 space-y-2">
      <li><strong>Styrketräning:</strong> Motverka muskelförlust</li>
      <li><strong>Mobilitet:</strong> Behåll och förbättra rörlighet</li>
      <li><strong>Balansträning:</strong> Förebygg fallskador</li>
      <li><strong>Konditionsträning:</strong> Stärk hjärta och lungor</li>
    </ul>

    <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Praktiska träningsprogram</h2>
    <p class="mb-4">
      Ett balanserat träningsprogram för personer över 40 bör innehålla alla komponenter och anpassas efter din nuvarande fitnessnivå.
    </p>
  </div>',
  'traning-efter-40'
),
(
  'Familjeträning - Roliga aktiviteter för hela familjen',
  'Gör träning till en rolig familjeaktivitet som alla kan delta i och njuta av tillsammans.',
  'Träning',
  '6 min läsning',
  '/lovable-uploads/ce7277f6-3378-4978-9239-9c8955f81251.png',
  'Users',
  'coral',
  '<div>
    <p class="lead text-green-700 font-text mb-6">
      Familjeträning är ett fantastiskt sätt att tillbringa tid tillsammans samtidigt som ni alla håller er aktiva och friska.
    </p>
    
    <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Fördelar med familjeträning</h2>
    <ul class="list-disc list-inside mb-6 space-y-2">
      <li>Skapar goda vanor tidigt hos barnen</li>
      <li>Stärker familjebanden</li>
      <li>Gör träning roligare för alla</li>
      <li>Ökar motivationen att vara aktiv</li>
    </ul>

    <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Roliga familjeaktiviteter</h2>
    <h3 class="text-xl font-semibold text-green-700 mb-3">Utomhusaktiviteter:</h3>
    <ul class="list-disc list-inside mb-4 space-y-2">
      <li>Familjewandringar i naturen</li>
      <li>Cykelutflykter</li>
      <li>Bollspel i parken</li>
      <li>Skattjakt med fysiska utmaningar</li>
    </ul>

    <h3 class="text-xl font-semibold text-green-700 mb-3">Inomhusaktiviteter:</h3>
    <ul class="list-disc list-inside mb-6 space-y-2">
      <li>Dansstund i vardagsrummet</li>
      <li>Yogapass för familjen</li>
      <li>Hemmagjorda hinderbana</li>
      <li>Aktiva videospel</li>
    </ul>
  </div>',
  'familjetraning'
),
(
  'Näring för optimal prestation',
  'Lär dig grunderna i sportnäring och hur du äter för att maximera din träning och återhämtning.',
  'Kost',
  '9 min läsning',
  '/lovable-uploads/bca7b0a7-03fd-4d88-b59a-9a8d209e682d.png',
  'Heart',
  'green',
  '<div>
    <p class="lead text-green-700 font-text mb-6">
      Rätt näring är nyckeln till att maximera dina träningsresultat och förbättra återhämtningen.
    </p>
    
    <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Grundläggande näringsprinciper</h2>
    <p class="mb-6">
      En balanserad kost som stödjer din träning består av rätt mängd makronäringsämnen i rätt timing.
    </p>

    <h3 class="text-xl font-semibold text-green-700 mb-3">Makronäringsämnen för aktiva:</h3>
    <ul class="list-disc list-inside mb-6 space-y-2">
      <li><strong>Protein:</strong> 1.6-2.2g per kg kroppsvikt för muskelbyggnad</li>
      <li><strong>Kolhydrater:</strong> 3-7g per kg kroppsvikt för energi</li>
      <li><strong>Fett:</strong> 20-35% av totala kaloriintaget</li>
    </ul>

    <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Timing av måltider</h2>
    <h3 class="text-xl font-semibold text-green-700 mb-3">Före träning:</h3>
    <p class="mb-4">
      Ät en kolhydratrik måltid 2-3 timmar innan träning. Om du tränar på morgonen, ät något lätt som en banan.
    </p>

    <h3 class="text-xl font-semibold text-green-700 mb-3">Efter träning:</h3>
    <p class="mb-6">
      Kombinera protein och kolhydrater inom 30-60 minuter efter träning för optimal återhämtning.
    </p>
  </div>',
  'naring-for-prestation'
),
(
  'Första steget mot en hälsosammare livsstil',
  'En praktisk guide för dig som vill börja leva hälsosammare men inte vet var du ska börja.',
  'Vanor',
  '7 min läsning',
  '/lovable-uploads/bff87cd9-ad93-40ea-9efb-e759131d22d1.png',
  'Calendar',
  'purple',
  '<div>
    <p class="lead text-green-700 font-text mb-6">
      Att börja leva hälsosammare behöver inte vara komplicerat. Här får du enkla steg att följa för att komma igång.
    </p>
    
    <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Börja smått och bygg vanor</h2>
    <p class="mb-6">
      Den största misstaget många gör är att försöka förändra allt på en gång. Istället ska du fokusera på små, 
      hållbara förändringar som du kan bygga på över tid.
    </p>

    <h3 class="text-xl font-semibold text-green-700 mb-3">Vecka 1-2: Grundläggande rutiner</h3>
    <ul class="list-disc list-inside mb-4 space-y-2">
      <li>Drick ett glas vatten när du vaknar</li>
      <li>Ta en 10-minuters promenad varje dag</li>
      <li>Ät en portion grönsaker till middag</li>
    </ul>

    <h3 class="text-xl font-semibold text-green-700 mb-3">Vecka 3-4: Bygg vidare</h3>
    <ul class="list-disc list-inside mb-6 space-y-2">
      <li>Lägg till en andra portion grönsaker</li>
      <li>Förläng promenaden till 15 minuter</li>
      <li>Gå till sängs 15 minuter tidigare</li>
    </ul>

    <div class="bg-purple-50 border-l-4 border-purple-400 p-6 my-8 rounded-lg">
      <h3 class="text-xl font-bold text-purple-800 mb-3">Kom ihåg:</h3>
      <p class="text-purple-700 mb-0">
        Det tar cirka 21 dagar att bilda en ny vana. Var tålmodig med dig själv och fokusera på framsteg, inte perfektion.
      </p>
    </div>
  </div>',
  'forsta-steget-halsa'
);

-- Update existing articles to ensure we have all content we had in static files
UPDATE public.sb_content_sub_pages 
SET content = '<div>
  <p class="lead text-green-700 font-text mb-6">
    Träning behöver inte vara komplicerat eller tidskrävande. Med rätt approach kan du hålla dig i form även med en hektisk vardag.
  </p>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Grundprinciper för effektiv träning</h2>
  <p class="mb-6">
    Framgångsrik träning handlar mer om konsistens än intensitet. Här är de viktigaste principerna att följa:
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">1. Progressiv överbelastning</h3>
  <p class="mb-4">
    Öka gradvis belastningen - vikt, repetitioner, eller intensitet - för att fortsätta utvecklas.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">2. Variation i träningen</h3>
  <p class="mb-4">
    Kombinera styrketräning, kondition och rörlighetsträning för bästa resultat.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">3. Adekvat vila</h3>
  <p class="mb-6">
    Muskler växer under vila, inte under träning. Se till att få tillräckligt med sömn och återhämtning.
  </p>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Träningsprogram för nybörjare</h2>
  <p class="mb-4">
    Ett enkelt program som du kan följa 3 gånger per vecka:
  </p>

  <div class="bg-coral-50 border-l-4 border-coral-400 p-6 my-8 rounded-lg">
    <h3 class="text-xl font-bold text-coral-800 mb-3">Veckoprogram:</h3>
    <ul class="list-disc list-inside text-coral-700 space-y-2">
      <li><strong>Måndag:</strong> Helkroppspass med fokus på stora muskelgrupper</li>
      <li><strong>Onsdag:</strong> Konditionsträning + kärnstyrka</li>
      <li><strong>Fredag:</strong> Funktionell träning + stretching</li>
    </ul>
  </div>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Träning hemma vs gym</h2>
  <p class="mb-4">
    Båda alternativen har sina fördelar. Hemmaträning erbjuder flexibilitet och bekvämlighet, 
    medan gym ger tillgång till mer utrustning och social motivation.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Effektiva hemmaövningar:</h3>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Kroppsgewichtövningar (armhävningar, squats, lunges)</li>
    <li>HIIT-pass med egen kroppsvikt</li>
    <li>Yoga och stretching</li>
    <li>Kärnstyrketräning</li>
  </ul>

  <p class="mb-4">
    Det viktigaste är att hitta en form av träning som du tycker om och kan hålla på med långsiktigt.
  </p>
</div>'
WHERE slug = 'sommartraning';

-- Also update the nutrition article 
UPDATE public.sb_content_sub_pages 
SET content = '<div>
  <p class="lead text-green-700 font-text mb-6">
    Att äta hälsosamt på semestern kan vara en utmaning, men med rätt strategi kan du njuta av maten samtidigt som du håller dig på rätt spår.
  </p>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Planering är nyckeln</h2>
  <p class="mb-6">
    En lyckad semesterkost börjar med planering. Fundera över var du ska äta, vad som finns tillgängligt och hur du kan balansera njutning med hälsa.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Smarta packningsstrategier:</h3>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Nötter och frön för sunda mellanmål</li>
    <li>Proteinpulver för enkel komplettering</li>
    <li>Färska eller torkade frukter</li>
    <li>Vollkornprodukter som håller länge</li>
  </ul>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">80/20-regeln på semestern</h2>
  <p class="mb-4">
    Sträva efter att äta näringsrikt 80% av tiden och tillåt dig själv att njuta 20% av tiden. 
    Detta ger dig flexibilitet att prova lokala specialiteter utan att känna skuld.
  </p>

  <div class="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-lg">
    <h3 class="text-xl font-bold text-green-800 mb-3">Praktiska tips för restaurangbesök:</h3>
    <ul class="list-disc list-inside text-green-700 space-y-2">
      <li>Börja med en sallad eller grönsaksbaserad förrätt</li>
      <li>Välj grillad, bakad eller ångkokt protein</li>
      <li>Be om dressing och såser vid sidan av</li>
      <li>Dela stora portioner med reseföljarna</li>
    </ul>
  </div>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Hydreringsstrategi</h2>
  <p class="mb-4">
    Att hålla sig hydrerad är extra viktigt på semestern, särskilt i varmare klimat eller vid ökad aktivitet.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Hydreringstips:</h3>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Drick vatten före varje måltid</li>
    <li>Begränsa alkohol och kompensera med extra vatten</li>
    <li>Ät vattenrika frukter som vattenmelon och apelsin</li>
    <li>Ha alltid en vattenflaska till hands</li>
  </ul>

  <p class="mb-4">
    Kom ihåg att semester handlar om avkoppling och njutning. Fokusera på att göra medvetna val snarare än att vara perfekt.
  </p>
</div>'
WHERE slug = 'semesterkost';
