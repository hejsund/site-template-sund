
const StressManagementContent = () => {
  return (
    <div>
      <p className="lead text-green-700 font-text mb-6">
        I dagens snabba värld känner många av oss stress dagligen. Men stress behöver inte vara något negativt - 
        det handlar om att lära sig hantera den på ett hälsosamt sätt.
      </p>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Vad är stress egentligen?</h2>
      <p className="mb-6">
        Stress är kroppens naturliga reaktion på utmaningar och förändringar. När vi upplever stress frigörs 
        hormoner som kortisol och adrenalin, vilket förbereder kroppen för "kämpa eller fly"-reaktionen. 
        I små doser kan stress faktiskt vara bra för oss - det hjälper oss att prestera bättre och vara mer fokuserade.
      </p>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8 rounded-lg">
        <h3 className="text-xl font-bold text-orange-800 mb-3">Viktigt att komma ihåg:</h3>
        <p className="text-orange-700 mb-0">
          Kronisk stress kan däremot påverka både fysisk och mental hälsa negativt. Därför är det viktigt 
          att lära sig hantera stress innan den blir överväldigande.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Praktiska stresshanteringstekniker</h2>
      
      <h3 className="text-xl font-semibold text-green-700 mb-3">1. Andningsteknik (4-7-8 metoden)</h3>
      <p className="mb-4">
        Denna enkla andningsteknik kan hjälpa dig att snabbt minska stress:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Andas in genom näsan i 4 sekunder</li>
        <li>Håll andan i 7 sekunder</li>
        <li>Andas ut genom munnen i 8 sekunder</li>
        <li>Upprepa 3-4 gånger</li>
      </ul>

      <h3 className="text-xl font-semibold text-green-700 mb-3">2. Progressiv muskelavslappning</h3>
      <p className="mb-4">
        Denna teknik hjälper dig att bli medveten om spänningar i kroppen och släppa dem:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Börja med tårna - spänn musklerna i 5 sekunder, släpp sedan</li>
        <li>Jobba dig uppåt genom kroppen - vader, lår, mage, armar, axlar</li>
        <li>Känn skillnaden mellan spänning och avslappning</li>
        <li>Avsluta med ansiktsmusklerna</li>
      </ul>

      <h3 className="text-xl font-semibold text-green-700 mb-3">3. Mindfulness och meditation</h3>
      <p className="mb-6">
        Bara 5-10 minuter daglig meditation kan göra stor skillnad. Börja enkelt med att fokusera på 
        din andning eller använd en guidad meditation-app.
      </p>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Livsstilsförändringar för stresshantering</h2>
      
      <h3 className="text-xl font-semibold text-green-700 mb-3">Regelbunden fysisk aktivitet</h3>
      <p className="mb-4">
        Motion är en av de bästa metoderna för stresshantering. Det behöver inte vara intensiv träning - 
        även en 20-minuters promenad kan göra underverk.
      </p>

      <h3 className="text-xl font-semibold text-green-700 mb-3">Prioritera sömn</h3>
      <p className="mb-4">
        God sömn är avgörande för stresshantering. Försök att få 7-9 timmars sömn per natt och 
        skapa en avslappnande kvällsrutin.
      </p>

      <h3 className="text-xl font-semibold text-green-700 mb-3">Näring för stresshantering</h3>
      <p className="mb-6">
        Vissa näringsämnen kan hjälpa kroppen att hantera stress bättre:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Magnesium:</strong> Finns i nötter, frön och gröna bladgrönsaker</li>
        <li><strong>Omega-3:</strong> Fet fisk, valnötter och linfrön</li>
        <li><strong>Vitamin C:</strong> Citrusfrukter, bär och grönsaker</li>
        <li><strong>B-vitaminer:</strong> Fullkorn, ägg och baljväxter</li>
      </ul>

      <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-lg">
        <h3 className="text-xl font-bold text-green-800 mb-3">Praktisk tips för familjer:</h3>
        <p className="text-green-700 mb-2">
          Gör stresshantering till en familjeangelägenhet! Lär barnen enkla andningstekniker 
          och gör avslappningsövningar tillsammans.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">När ska du söka professionell hjälp?</h2>
      <p className="mb-4">
        Om stressen påverkar din dagliga funktion, sömn eller relationer under en längre period, 
        tveka inte att kontakta en professionell. Det finns många effektiva behandlingar tillgängliga.
      </p>

      <p className="mb-4">
        <strong>Varningssignaler att vara uppmärksam på:</strong>
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Konstant utmattning trots vila</li>
        <li>Svårigheter att koncentrera sig</li>
        <li>Förändrade sovmönster</li>
        <li>Irritabilitet eller ångest</li>
        <li>Fysiska symptom som huvudvärk eller magproblem</li>
      </ul>

      <p className="mb-4">
        Kom ihåg: att be om hjälp är ett tecken på styrka, inte svaghet. Du förtjänar att må bra 
        och leva ett balanserat liv.
      </p>
    </div>
  );
};

export default StressManagementContent;
