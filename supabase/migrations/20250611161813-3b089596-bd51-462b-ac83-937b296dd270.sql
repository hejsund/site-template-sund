
-- Update the habits article with rich HTML content
UPDATE sb_content_sub_pages 
SET 
  content = '<div className="text-xl leading-relaxed mb-8">
    <p>"Charlotte, jag har börjat om så många gånger. Varför slutar jag alltid efter några veckor?"</p>
  </div>

  <p className="mb-6">
    Den frågan får jag flera gånger i veckan. Och jag förstår frustrationen.
  </p>

  <p className="mb-6">
    Du har läst böckerna. Du har köpt träningskorten. Du har kastat skräpmaten och fyllt kylskåpet med grönsaker. Du har varit så motiverad första veckan.
  </p>

  <p className="mb-6">
    Och sen... livet händer. Barnen blir sjuka. Jobbet blir stressigt. Du missar några dagar och tänker "aja, nu är allt förstört ändå."
  </p>

  <p className="text-lg font-semibold text-purple mb-8">
    Men vad om problemet inte är dig? Vad om problemet är sättet vi har lärt oss att bygga vanor på?
  </p>

  <section className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 mb-12">
    <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-3 text-purple"><path d="m6 9 6 6 6-6"/></svg>
      Varför de flesta vanor inte håller
    </h2>
    <p className="mb-4">
      Vi har fått lära oss att förändringar ska vara:
    </p>
    <ul className="space-y-3 mb-6">
      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-coral rounded-full"></span>
        <span><strong>Drastiska</strong> ("Från måndag äter jag bara sallad!")</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-orange rounded-full"></span>
        <span><strong>Snabba</strong> ("På 30 dagar kommer ditt liv att vara förvandlat!")</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-purple rounded-full"></span>
        <span><strong>Perfekta</strong> ("Miss aldrig ett pass!")</span>
      </li>
    </ul>
    <p className="text-lg font-semibold text-center text-purple bg-purple/10 p-4 rounded-lg">
      Men riktiga vanor - de som håller hela livet - de ser helt annorlunda ut.
    </p>
  </section>

  <div className="grid md:grid-cols-2 gap-8 mb-12">
    <div className="bg-gradient-to-br from-coral/10 to-coral/20 p-6 rounded-2xl border border-coral/30">
      <h3 className="text-2xl font-bold text-coral mb-4 font-display flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>
        Motivation
      </h3>
      <p className="text-green-700 mb-4">
        Motivation är som ett fyrverkeri. Den sprakar till, lyser upp himlen för en kort stund, och sen är den borta.
      </p>
      <div className="text-center text-2xl">🎆</div>
    </div>
    
    <div className="bg-gradient-to-br from-orange/10 to-orange/20 p-6 rounded-2xl border border-orange/30">
      <h3 className="text-2xl font-bold text-orange mb-4 font-display flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
        Vanor
      </h3>
      <p className="text-green-700 mb-4">
        Vanor är som en kamin. De behöver tändas en gång, men sen värmer de dig hela vintern.
      </p>
      <div className="text-center text-2xl">🔥</div>
    </div>
  </div>

  <div className="bg-green-100 p-6 rounded-xl border border-green-300 mb-12">
    <p className="text-lg font-medium text-green-800">
      Som fyrbarnsmamma kan jag lova dig: jag vaknar inte varje morgon och känner mig motiverad att träna. Vissa morgnar vill jag bara gömma mig under täcket.
    </p>
    <p className="mt-4 text-green-700">
      Men jag tränar ändå. Inte för att jag är en hjälte, utan för att det blivit en vana. Något jag bara gör, som att borsta tänderna.
    </p>
  </div>

  <section className="bg-gradient-to-r from-purple/10 to-pink/10 rounded-2xl p-8 border border-purple/20 mb-12">
    <h2 className="text-3xl font-bold text-primary mb-6 font-display">
      Så bygger du vanor som faktiskt håller
    </h2>
    
    <div className="space-y-8">
      <div className="bg-white/80 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-purple mb-3 font-display flex items-center">
          <span className="bg-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
          Börja löjligt litet
        </h3>
        <p className="mb-4">
          Den största misstag folk gör är att de börjar för stort. Börja så litet att det känns nästan löjligt. Så litet att du inte kan misslyckas.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-coral/10 p-3 rounded-lg">
            <p className="font-semibold text-coral">Träning</p>
            <p>Gör fem armhävningar varje morgon. Ja, bara fem.</p>
          </div>
          <div className="bg-orange/10 p-3 rounded-lg">
            <p className="font-semibold text-orange">Mat</p>
            <p>Ät en extra portion grönsaker till middagen. En.</p>
          </div>
          <div className="bg-purple/10 p-3 rounded-lg">
            <p className="font-semibold text-purple">Vatten</p>
            <p>Drick ett glas vatten när du vaknar. Ett glas.</p>
          </div>
        </div>
      </div>

      <div className="bg-white/80 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-coral mb-3 font-display flex items-center">
          <span className="bg-coral text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
          Koppla till något du redan gör
        </h3>
        <p className="mb-4">
          De starkaste vanorna piggybacks på saker du redan gör varje dag.
        </p>
        <div className="space-y-2 text-sm">
          <p><strong>Efter</strong> att jag hällt upp kaffe <strong>tränar jag</strong> fem minuter</p>
          <p><strong>Efter</strong> att jag kört barnen till skolan <strong>går jag</strong> en kort promenad</p>
          <p><strong>Innan</strong> jag kollar telefonen på kvällen <strong>läser jag</strong> fem sidor i en bok</p>
        </div>
      </div>

      <div className="bg-white/80 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-orange mb-3 font-display flex items-center">
          <span className="bg-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
          Fokusera på frekvens, inte intensitet
        </h3>
        <p className="mb-4">Vad tror du skapar en starkare vana:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold">A) Träna intensivt två timmar en gång i veckan</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
            <p className="font-semibold text-green-800">B) Träna 10 minuter fem dagar i veckan ✓</p>
          </div>
        </div>
        <p className="mt-4 text-center font-semibold text-orange">
          Ditt hjärna bryr sig inte om hur länge du gör något. Den bryr sig om hur ofta.
        </p>
      </div>
    </div>
  </section>

  <div className="mb-12">
    <img 
      src="/lovable-uploads/8860c780-4dbb-4b43-b12f-770483b2f79f.png" 
      alt="Lugn sjöyta som speglar himlen - reflektion över vanornas kraft"
      className="w-full h-64 object-cover rounded-3xl shadow-xl"
    />
    <p className="text-center text-sm text-green-600 mt-3 italic">
      Som denna spegelblanke sjö - vanor skapar reflektion och djup i våra liv.
    </p>
  </div>

  <section className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 border border-green-300 mb-12">
    <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-3 text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
      Sommarvanor som förändrar allt
    </h2>
    <p className="mb-6">
      Sommaren är faktiskt den perfekta tiden att bygga vanor. Längre ljusa dagar, mer energi, färre krav.
    </p>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="bg-white/80 p-4 rounded-xl">
          <h4 className="font-bold text-primary mb-2">Rörelsevanor</h4>
          <p className="text-sm mb-2"><strong>Inte:</strong> "Jag ska träna en timme varje dag i sommar."</p>
          <p className="text-sm"><strong>Utan:</strong> "Jag ska röra på mig 10 minuter varje morgon."</p>
        </div>
        
        <div className="bg-white/80 p-4 rounded-xl">
          <h4 className="font-bold text-coral mb-2">Matvanor</h4>
          <p className="text-sm mb-2"><strong>Inte:</strong> "Nu äter jag bara hälsosamt hela sommaren."</p>
          <p className="text-sm"><strong>Utan:</strong> "Jag äter något näringsrikt vid varje måltid."</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white/80 p-4 rounded-xl">
          <h4 className="font-bold text-purple mb-2">Återhämtningsvanor</h4>
          <p className="text-sm mb-2"><strong>Inte:</strong> "Nu ska jag meditera 30 minuter varje dag."</p>
          <p className="text-sm"><strong>Utan:</strong> "Jag tar fem djupa andetag efter lunch."</p>
        </div>
        
        <div className="bg-white/80 p-4 rounded-xl">
          <h4 className="font-bold text-orange mb-2">Vattenvanor</h4>
          <p className="text-sm mb-2"><strong>Inte:</strong> "Nu dricker jag tre liter vatten varje dag."</p>
          <p className="text-sm"><strong>Utan:</strong> "Jag dricker ett glas vatten vid specifika tillfällen."</p>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-coral/10 rounded-2xl p-8 border border-coral/20">
    <h2 className="text-3xl font-bold text-primary mb-6 font-display">
      Sommaren som förändrar allt
    </h2>
    <p className="text-lg mb-6">
      Föreställ dig att komma tillbaka från sommarsemestern och inse att du faktiskt längtar efter din morgonpromenad, dricker vatten utan att tänka på det, och äter grönsaker för att de smakar gott.
    </p>
    <p className="mb-8">
      Inte för att du tvingat dig. Inte för att du haft järndisciplin. Utan för att du byggt vanor som blivit del av vem du är.
    </p>
  </section>

  <footer className="text-center pt-8 border-t border-green-200 mt-12">
    <p className="font-text italic text-green-700">
      För vanor är inte något du gör. Vanor är någon du blir.<br /><br />
      Kram,<br />
      Charlotte
    </p>
  </footer>',
  theme_color = 'purple',
  lead_text = 'Sluta börja om. Lär dig att bygga vanor som faktiskt håller hela livet - utan perfektionism eller extrem disciplin.',
  email_signup_title = 'Få mer om hållbara vanor! 🌱',
  email_signup_description = 'Få praktiska tips för att bygga vanor som håller hela livet direkt i din inkorg.',
  email_signup_button_text = 'Skicka vanotips! 💪',
  cta_title = 'Redo att bygga vanor som håller? ✨',
  cta_primary_button_text = 'Ta vårt quiz',
  cta_secondary_button_text = 'Läs mer om Sommarboosten'
WHERE slug = 'hallbara-vanor';
