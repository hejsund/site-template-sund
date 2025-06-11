
-- Update the habits article with the new vibrant design and rich HTML content
UPDATE sb_content_sub_pages 
SET 
  content = '<div className="space-y-8 md:space-y-12">
    <div className="text-xl md:text-2xl leading-relaxed mb-8 bg-gradient-to-r from-purple-50 to-coral-50 p-6 md:p-8 rounded-2xl border border-purple-200">
      <p className="text-purple-800 font-medium">"Charlotte, jag har börjat om så många gånger. Varför slutar jag alltid efter några veckor?"</p>
    </div>

    <p className="text-base md:text-lg mb-6 text-green-700">
      Den frågan får jag flera gånger i veckan. Och jag förstår frustrationen.
    </p>

    <p className="text-base md:text-lg mb-6 text-green-700">
      Du har läst böckerna. Du har köpt träningskorten. Du har kastat skräpmaten och fyllt kylskåpet med grönsaker. Du har varit så motiverad första veckan.
    </p>

    <p className="text-base md:text-lg mb-6 text-green-700">
      Och sen... livet händer. Barnen blir sjuka. Jobbet blir stressigt. Du missar några dagar och tänker "aja, nu är allt förstört ändå."
    </p>

    <p className="text-lg md:text-xl font-semibold text-purple mb-8 bg-gradient-to-r from-purple-100 to-coral-100 p-4 rounded-xl">
      Men vad om problemet inte är dig? Vad om problemet är sättet vi har lärt oss att bygga vanor på?
    </p>

    <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 md:p-8 shadow-lg border border-purple-200 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-purple mb-6 font-display flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-3 text-purple"><path d="m6 9 6 6 6-6"/></svg>
        Varför de flesta vanor inte håller
      </h2>
      <p className="mb-4 text-base md:text-lg text-purple-800">
        Vi har fått lära oss att förändringar ska vara:
      </p>
      <ul className="space-y-3 mb-6 text-base md:text-lg">
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-coral rounded-full flex-shrink-0"></span>
          <span className="text-purple-700"><strong>Drastiska</strong> ("Från måndag äter jag bara sallad!")</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-orange rounded-full flex-shrink-0"></span>
          <span className="text-purple-700"><strong>Snabba</strong> ("På 30 dagar kommer ditt liv att vara förvandlat!")</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="w-3 h-3 bg-purple rounded-full flex-shrink-0"></span>
          <span className="text-purple-700"><strong>Perfekta</strong> ("Miss aldrig ett pass!")</span>
        </li>
      </ul>
      <div className="text-lg md:text-xl font-semibold text-center text-white bg-gradient-to-r from-purple to-coral p-4 md:p-6 rounded-lg">
        Men riktiga vanor - de som håller hela livet - de ser helt annorlunda ut.
      </div>
    </section>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
      <div className="bg-gradient-to-br from-coral-50 to-coral-100 p-6 md:p-8 rounded-2xl border border-coral/30 shadow-md">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-coral to-orange rounded-full mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-coral mb-4 font-display">
            Motivation
          </h3>
          <p className="text-coral-800 mb-4 text-base md:text-lg">
            Motivation är som ett fyrverkeri. Den sprakar till, lyser upp himlen för en kort stund, och sen är den borta.
          </p>
          <div className="text-center text-2xl md:text-3xl">🎆</div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 md:p-8 rounded-2xl border border-orange/30 shadow-md">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange to-coral rounded-full mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-orange mb-4 font-display">
            Vanor
          </h3>
          <p className="text-orange-800 mb-4 text-base md:text-lg">
            Vanor är som en kamin. De behöver tändas en gång, men sen värmer de dig hela vintern.
          </p>
          <div className="text-center text-2xl md:text-3xl">🔥</div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 md:p-8 rounded-xl border border-green-300 border-l-4 border-l-green-600 mb-12">
      <p className="text-lg md:text-xl font-medium text-green-800 mb-4">
        Som fyrbarnsmamma kan jag lova dig: jag vaknar inte varje morgon och känner mig motiverad att träna. Vissa morgnar vill jag bara gömma mig under täcket.
      </p>
      <p className="text-green-700 text-base md:text-lg">
        Men jag tränar ändå. Inte för att jag är en hjälte, utan för att det blivit en vana. Något jag bara gör, som att borsta tänderna.
      </p>
    </div>

    <section className="bg-gradient-to-br from-purple-100 to-coral-100 rounded-2xl p-6 md:p-8 border border-purple/30 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-purple mb-6 font-display">
        Så bygger du vanor som faktiskt håller
      </h2>
      
      <div className="space-y-6 md:space-y-8">
        <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
          <h3 className="text-lg md:text-xl font-bold text-purple mb-3 font-display flex items-center">
            <span className="bg-gradient-to-r from-purple to-coral text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
            Börja löjligt litet
          </h3>
          <p className="mb-4 text-base md:text-lg">
            Den största misstag folk gör är att de börjar för stort. Börja så litet att det känns nästan löjligt. Så litet att du inte kan misslyckas.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base">
            <div className="bg-gradient-to-br from-coral-50 to-coral-100 p-3 md:p-4 rounded-lg border border-coral/20">
              <p className="font-semibold text-coral mb-2">Träning</p>
              <p>Gör fem armhävningar varje morgon. Ja, bara fem.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 md:p-4 rounded-lg border border-orange/20">
              <p className="font-semibold text-orange mb-2">Mat</p>
              <p>Ät en extra portion grönsaker till middagen. En.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 md:p-4 rounded-lg border border-purple/20">
              <p className="font-semibold text-purple mb-2">Vatten</p>
              <p>Drick ett glas vatten när du vaknar. Ett glas.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
          <h3 className="text-lg md:text-xl font-bold text-coral mb-3 font-display flex items-center">
            <span className="bg-gradient-to-r from-coral to-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
            Koppla till något du redan gör
          </h3>
          <p className="mb-4 text-base md:text-lg">
            De starkaste vanorna piggybacks på saker du redan gör varje dag.
          </p>
          <div className="space-y-2 text-sm md:text-base">
            <p><strong>Efter</strong> att jag hällt upp kaffe <strong>tränar jag</strong> fem minuter</p>
            <p><strong>Efter</strong> att jag kört barnen till skolan <strong>går jag</strong> en kort promenad</p>
            <p><strong>Innan</strong> jag kollar telefonen på kvällen <strong>läser jag</strong> fem sidor i en bok</p>
          </div>
        </div>

        <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
          <h3 className="text-lg md:text-xl font-bold text-orange mb-3 font-display flex items-center">
            <span className="bg-gradient-to-r from-orange to-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
            Fokusera på frekvens, inte intensitet
          </h3>
          <p className="mb-4 text-base md:text-lg">Vad tror du skapar en starkare vana:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold text-sm md:text-base">A) Träna intensivt två timmar en gång i veckan</p>
            </div>
            <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-2 border-green-400">
              <p className="font-semibold text-green-800 text-sm md:text-base">B) Träna 10 minuter fem dagar i veckan ✓</p>
            </div>
          </div>
          <p className="mt-4 text-center font-semibold text-orange text-base md:text-lg">
            Ditt hjärna bryr sig inte om hur länge du gör något. Den bryr sig om hur ofta.
          </p>
        </div>
      </div>
    </section>

    <div className="mb-12">
      <img 
        src="/lovable-uploads/8860c780-4dbb-4b43-b12f-770483b2f79f.png" 
        alt="Lugn sjöyta som speglar himlen - reflektion över vanornas kraft och balans i livet"
        className="w-full h-48 md:h-64 object-cover rounded-2xl md:rounded-3xl shadow-xl"
      />
      <p className="text-center text-sm text-green-600 mt-3 italic">
        Som denna spegelblanke sjö - vanor skapar reflektion och djup i våra liv.
      </p>
    </div>

    <section className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-8 border border-green-200 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 font-display flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-3 text-green-600 flex-shrink-0"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
        Sommarvanor som förändrar allt
      </h2>
      <p className="mb-6 text-base md:text-lg text-green-700">
        Sommaren är faktiskt den perfekta tiden att bygga vanor. Längre ljusa dagar, mer energi, färre krav.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white/80 p-4 md:p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-green-800 mb-2 text-base md:text-lg">Rörelsevanor</h3>
            <p className="text-sm md:text-base mb-2"><strong>Inte:</strong> "Jag ska träna en timme varje dag i sommar."</p>
            <p className="text-sm md:text-base"><strong>Utan:</strong> "Jag ska röra på mig 10 minuter varje morgon."</p>
          </div>
          
          <div className="bg-white/80 p-4 md:p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-coral mb-2 text-base md:text-lg">Matvanor</h3>
            <p className="text-sm md:text-base mb-2"><strong>Inte:</strong> "Nu äter jag bara hälsosamt hela sommaren."</p>
            <p className="text-sm md:text-base"><strong>Utan:</strong> "Jag äter något näringsrikt vid varje måltid."</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white/80 p-4 md:p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-purple mb-2 text-base md:text-lg">Återhämtningsvanor</h3>
            <p className="text-sm md:text-base mb-2"><strong>Inte:</strong> "Nu ska jag meditera 30 minuter varje dag."</p>
            <p className="text-sm md:text-base"><strong>Utan:</strong> "Jag tar fem djupa andetag efter lunch."</p>
          </div>
          
          <div className="bg-white/80 p-4 md:p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-orange mb-2 text-base md:text-lg">Vattenvanor</h3>
            <p className="text-sm md:text-base mb-2"><strong>Inte:</strong> "Nu dricker jag tre liter vatten varje dag."</p>
            <p className="text-sm md:text-base"><strong>Utan:</strong> "Jag dricker ett glas vatten vid specifika tillfällen."</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-br from-coral-50 to-coral-100 rounded-2xl p-6 md:p-8 border border-coral/30 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-coral mb-6 font-display">
        Sommaren som förändrar allt
      </h2>
      <p className="text-lg md:text-xl mb-6 text-coral-800">
        Föreställ dig att komma tillbaka från sommarsemestern och inse att du faktiskt längtar efter din morgonpromenad, dricker vatten utan att tänka på det, och äter grönsaker för att de smakar gott.
      </p>
      <p className="mb-8 text-base md:text-lg text-coral-700">
        Inte för att du tvingat dig. Inte för att du haft järndisciplin. Utan för att du byggt vanor som blivit del av vem du är.
      </p>
      
      <div className="text-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="/quiz" className="bg-gradient-to-r from-coral to-orange hover:from-coral/90 hover:to-orange/90 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg transition-all duration-200 w-full md:w-auto text-center">
            Bygg dina vanor i sommar
          </a>
          <a href="/om-sommarboosten" className="border-2 border-coral text-coral hover:bg-coral hover:text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-200 w-full md:w-auto text-center">
            Läs mer om Sommarboosten
          </a>
        </div>
      </div>
    </section>

    <footer className="text-center pt-6 md:pt-8 border-t border-green-200">
      <p className="font-text italic text-green-700 text-base md:text-lg">
        För vanor är inte något du gör. Vanor är någon du blir.<br /><br />
        Kram,<br />
        Charlotte
      </p>
    </footer>
  </div>',
  theme_color = 'purple',
  lead_text = 'Sluta börja om. Lär dig att bygga vanor som faktiskt håller hela livet - utan perfektionism eller extrem disciplin.',
  email_signup_title = 'Få mer om hållbara vanor! 🌱',
  email_signup_description = 'Få praktiska tips för att bygga vanor som håller hela livet direkt i din inkorg.',
  email_signup_button_text = 'Skicka vanotips! 💪',
  cta_title = 'Redo att bygga vanor som håller? ✨',
  cta_primary_button_text = 'Ta vårt quiz',
  cta_secondary_button_text = 'Läs mer om Sommarboosten'
WHERE slug = 'hallbara-vanor';
