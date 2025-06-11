
-- Update the articles in the database with the actual rich content
UPDATE public.sb_content_sub_pages 
SET content = '<div>
  <p class="lead text-green-700 font-text mb-6">
    I dagens snabba värld känner många av oss stress dagligen. Men stress behöver inte vara något negativt - 
    det handlar om att lära sig hantera den på ett hälsosamt sätt.
  </p>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Vad är stress egentligen?</h2>
  <p class="mb-6">
    Stress är kroppens naturliga reaktion på utmaningar och förändringar. När vi upplever stress frigörs 
    hormoner som kortisol och adrenalin, vilket förbereder kroppen för "kämpa eller fly"-reaktionen. 
    I små doser kan stress faktiskt vara bra för oss - det hjälper oss att prestera bättre och vara mer fokuserade.
  </p>

  <div class="bg-orange-50 border-l-4 border-orange-400 p-6 my-8 rounded-lg">
    <h3 class="text-xl font-bold text-orange-800 mb-3">Viktigt att komma ihåg:</h3>
    <p class="text-orange-700 mb-0">
      Kronisk stress kan däremot påverka både fysisk och mental hälsa negativt. Därför är det viktigt 
      att lära sig hantera stress innan den blir överväldigande.
    </p>
  </div>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Praktiska stresshanteringstekniker</h2>
  
  <h3 class="text-xl font-semibold text-green-700 mb-3">1. Andningsteknik (4-7-8 metoden)</h3>
  <p class="mb-4">
    Denna enkla andningsteknik kan hjälpa dig att snabbt minska stress:
  </p>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Andas in genom näsan i 4 sekunder</li>
    <li>Håll andan i 7 sekunder</li>
    <li>Andas ut genom munnen i 8 sekunder</li>
    <li>Upprepa 3-4 gånger</li>
  </ul>

  <h3 class="text-xl font-semibold text-green-700 mb-3">2. Progressiv muskelavslappning</h3>
  <p class="mb-4">
    Denna teknik hjälper dig att bli medveten om spänningar i kroppen och släppa dem:
  </p>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Börja med tårna - spänn musklerna i 5 sekunder, släpp sedan</li>
    <li>Jobba dig uppåt genom kroppen - vader, lår, mage, armar, axlar</li>
    <li>Känn skillnaden mellan spänning och avslappning</li>
    <li>Avsluta med ansiktsmusklerna</li>
  </ul>

  <h3 class="text-xl font-semibold text-green-700 mb-3">3. Mindfulness och meditation</h3>
  <p class="mb-6">
    Bara 5-10 minuter daglig meditation kan göra stor skillnad. Börja enkelt med att fokusera på 
    din andning eller använd en guidad meditation-app.
  </p>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Livsstilsförändringar för stresshantering</h2>
  
  <h3 class="text-xl font-semibold text-green-700 mb-3">Regelbunden fysisk aktivitet</h3>
  <p class="mb-4">
    Motion är en av de bästa metoderna för stresshantering. Det behöver inte vara intensiv träning - 
    även en 20-minuters promenad kan göra underverk.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Prioritera sömn</h3>
  <p class="mb-4">
    God sömn är avgörande för stresshantering. Försök att få 7-9 timmars sömn per natt och 
    skapa en avslappnande kvällsrutin.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Näring för stresshantering</h3>
  <p class="mb-6">
    Vissa näringsämnen kan hjälpa kroppen att hantera stress bättre:
  </p>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li><strong>Magnesium:</strong> Finns i nötter, frön och gröna bladgrönsaker</li>
    <li><strong>Omega-3:</strong> Fet fisk, valnötter och linfrön</li>
    <li><strong>Vitamin C:</strong> Citrusfrukter, bär och grönsaker</li>
    <li><strong>B-vitaminer:</strong> Fullkorn, ägg och baljväxter</li>
  </ul>

  <div class="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-lg">
    <h3 class="text-xl font-bold text-green-800 mb-3">Praktisk tips för familjer:</h3>
    <p class="text-green-700 mb-2">
      Gör stresshantering till en familjeangelägenhet! Lär barnen enkla andningstekniker 
      och gör avslappningsövningar tillsammans.
    </p>
  </div>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">När ska du söka professionell hjälp?</h2>
  <p class="mb-4">
    Om stressen påverkar din dagliga funktion, sömn eller relationer under en längre period, 
    tveka inte att kontakta en professionell. Det finns många effektiva behandlingar tillgängliga.
  </p>

  <p class="mb-4">
    <strong>Varningssignaler att vara uppmärksam på:</strong>
  </p>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Konstant utmattning trots vila</li>
    <li>Svårigheter att koncentrera sig</li>
    <li>Förändrade sovmönster</li>
    <li>Irritabilitet eller ångest</li>
    <li>Fysiska symptom som huvudvärk eller magproblem</li>
  </ul>

  <p class="mb-4">
    Kom ihåg: att be om hjälp är ett tecken på styrka, inte svaghet. Du förtjänar att må bra 
    och leva ett balanserat liv.
  </p>
</div>'
WHERE slug = 'stresshantering';

UPDATE public.sb_content_sub_pages 
SET content = '<div>
  <p class="lead text-green-700 font-text mb-6">
    Mental hälsa är lika viktig som fysisk hälsa. Det handlar om vårt känslomässiga, psykologiska 
    och sociala välbefinnande - och det påverkar hur vi tänker, känner och agerar i vardagen.
  </p>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Vad betyder mental hälsa?</h2>
  <p class="mb-6">
    Mental hälsa är inte bara frånvaron av psykisk ohälsa. Det är ett tillstånd av välbefinnande 
    där du kan hantera livets vanliga påfrestningar, arbeta produktivt och bidra till din gemenskap. 
    Det är förmågan att njuta av livet och hantera både utmaningar och framgångar.
  </p>

  <div class="bg-indigo-50 border-l-4 border-indigo-400 p-6 my-8 rounded-lg">
    <h3 class="text-xl font-bold text-indigo-800 mb-3">Visste du att:</h3>
    <p class="text-indigo-700 mb-0">
      Enligt WHO är mental hälsa "ett tillstånd av välbefinnande där individen kan förverkliga 
      sina möjligheter, hantera normala livspåfrestningar, arbeta produktivt och fruktbart, 
      samt bidra till sin gemenskap."
    </p>
  </div>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Faktorer som påverkar mental hälsa</h2>
  
  <h3 class="text-xl font-semibold text-green-700 mb-3">Biologiska faktorer</h3>
  <ul class="list-disc list-inside mb-4 space-y-2">
    <li>Genetisk predisposition</li>
    <li>Hjärnkemi och hormonella förändringar</li>
    <li>Fysiska sjukdomar och mediciner</li>
  </ul>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Psykologiska faktorer</h3>
  <ul class="list-disc list-inside mb-4 space-y-2">
    <li>Personlighetsdrag och copingstrategier</li>
    <li>Tidigare traumatiska upplevelser</li>
    <li>Självbild och självkänsla</li>
  </ul>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Sociala faktorer</h3>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Relationer och socialt stöd</li>
    <li>Arbetssituation och ekonomisk trygghet</li>
    <li>Samhällsstruktur och kulturella normer</li>
  </ul>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Dagliga verktyg för mental hälsa</h2>
  
  <h3 class="text-xl font-semibold text-green-700 mb-3">1. Skapa struktur och rutiner</h3>
  <p class="mb-4">
    Regelbundna rutiner ger trygghet och förutsägbarhet, vilket minskar stress och ångest. 
    Skapa morgon- och kvällsrutiner som fungerar för dig.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">2. Öva tacksamhet</h3>
  <p class="mb-4">
    Forskning visar att daglig tacksamhetspraktik kan förbättra mental hälsa betydligt. 
    Skriv ner tre saker du är tacksam för varje dag.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">3. Begränsa sociala medier</h3>
  <p class="mb-4">
    Ständig exponering för andras "perfekta" liv kan påverka självkänslan negativt. 
    Sätt gränser för hur mycket tid du spenderar på sociala medier.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">4. Prioritera sömn</h3>
  <p class="mb-6">
    God sömn är grundläggande för mental hälsa. Sträva efter 7-9 timmars kvalitetssömn per natt.
  </p>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Kost och mental hälsa</h2>
  <p class="mb-4">
    Det vi äter påverkar inte bara vår fysiska hälsa utan även vårt humör och mentala välbefinnande. 
    Här är några näringsämnen som är särskilt viktiga:
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Omega-3 fettsyror</h3>
  <p class="mb-4">
    Finns i fet fisk, nötter och frön. Viktigt för hjärnfunktion och kan minska depression.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Komplex kolhydrater</h3>
  <p class="mb-4">
    Fullkorn, bönor och grönsaker hjälper till att stabilisera blodsocker och humör.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Probiotika</h3>
  <p class="mb-6">
    Tarmbakterier påverkar hjärnan genom "tarm-hjärn-axeln". Fermenterade livsmedel som yoghurt, 
    kefir och kimchi kan stödja mental hälsa.
  </p>

  <div class="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-lg">
    <h3 class="text-xl font-bold text-green-800 mb-3">Tips för familjer:</h3>
    <p class="text-green-700 mb-2">
      Gör mental hälsa till ett öppet samtalsämne hemma. Lär barnen att prata om känslor 
      och skapa en miljö där det är okej att inte må bra ibland.
    </p>
  </div>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Fysisk aktivitet för mental hälsa</h2>
  <p class="mb-4">
    Motion är en av de mest effektiva metoderna för att förbättra mental hälsa. Det frigör endorfiner, 
    minskar stresshormoner och förbättrar självkänslan.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Rekommenderade aktiviteter:</h3>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li><strong>Promenader i naturen:</strong> Kombinerar motion med naturens lugnande effekt</li>
    <li><strong>Yoga:</strong> Kombinerar fysisk rörelse med andning och mindfulness</li>
    <li><strong>Dans:</strong> Roligt sätt att röra sig och uttrycka känslor</li>
    <li><strong>Styrketräning:</strong> Bygger inte bara muskelstyrka utan även mental resiliens</li>
  </ul>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">Sociala relationer och mental hälsa</h2>
  <p class="mb-4">
    Människor är sociala varelser. Starka, stödjande relationer är en av de viktigaste faktorerna 
    för god mental hälsa.
  </p>

  <h3 class="text-xl font-semibold text-green-700 mb-3">Så bygger du starka relationer:</h3>
  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Lyssna aktivt när andra pratar</li>
    <li>Visa empati och förståelse</li>
    <li>Var närvarande i dina interaktioner</li>
    <li>Dela dina egna känslor och upplevelser</li>
    <li>Underhåll relationer genom regelbunden kontakt</li>
  </ul>

  <h2 class="text-2xl font-bold text-green-800 mb-4 font-display">När ska du söka professionell hjälp?</h2>
  <p class="mb-4">
    Det är viktigt att känna igen när du behöver professionell hjälp. Tecken att vara uppmärksam på:
  </p>

  <ul class="list-disc list-inside mb-6 space-y-2">
    <li>Bestående känslor av hopplöshet eller desperation</li>
    <li>Förlust av intresse för aktiviteter du tidigare tyckte om</li>
    <li>Betydande förändringar i aptit eller sömn</li>
    <li>Svårigheter att fungera i vardagen</li>
    <li>Tankar på att skada dig själv eller andra</li>
  </ul>

  <p class="mb-4">
    Kom ihåg: att söka hjälp är ett tecken på styrka och självinsikt. Det finns många effektiva 
    behandlingar tillgängliga, och du förtjänar att må bra.
  </p>

  <p class="mb-4">
    <strong>Akut hjälp:</strong> Om du har självmordstankar, ring 112 eller Självmordslinjen: 90101.
  </p>
</div>'
WHERE slug = 'mental-halsa-valmående';
