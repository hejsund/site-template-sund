
const HabitsContent = () => {
  return (
    <div>
      <p className="lead text-green-700 font-text mb-6">
        Att bygga hållbara vanor är nyckeln till långsiktig förändring. Forskning visar att det tar 
        i genomsnitt 66 dagar att etablera en ny vana - men med rätt strategi kan du komma igång på 30 dagar.
      </p>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Vetenskapen bakom vanor</h2>
      <p className="mb-4">
        Vanor fungerar som mentala genvägar som gör att vi kan utföra handlingar automatiskt utan 
        att tänka. Detta frigör mental energi för andra uppgifter, men det betyder också att både 
        bra och dåliga vanor kan bli djupt rotade.
      </p>

      <h3 className="text-xl font-semibold text-green-700 mb-3">Vanans anatomi - The Habit Loop</h3>
      <p className="mb-4">
        Enligt forskning består varje vana av tre delar:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2" role="list">
        <li><strong>Trigger (utlösare):</strong> Det som startar vanan</li>
        <li><strong>Rutin:</strong> Själva handlingen</li>
        <li><strong>Belöning:</strong> Den positiva känsla du får av vanan</li>
      </ul>

      <aside className="bg-purple-50 border-l-4 border-purple-400 p-6 my-8 rounded-lg" role="complementary" aria-labelledby="habit-example">
        <h3 id="habit-example" className="text-xl font-bold text-purple-800 mb-3">Exempel på en positiv vana:</h3>
        <div className="text-purple-700 mb-2">
          <p><strong>Trigger:</strong> Kaffekoppen på morgonen</p>
          <p><strong>Rutin:</strong> 10 minuters meditation</p>
          <p><strong>Belöning:</strong> Känsla av lugn och fokus</p>
        </div>
      </aside>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">30-dagarsplanen för nya vanor</h2>
      
      <section aria-labelledby="week-1">
        <h3 id="week-1" className="text-xl font-semibold text-green-700 mb-3">Vecka 1: Starta småskaligt</h3>
        <p className="mb-4">
          Den första veckan handlar om att etablera rutinen, inte om perfektion:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2" role="list">
          <li><strong>Välj EN specifik vana:</strong> "Jag ska träna" är för vagt. "Jag ska gå 10 minuter efter lunch" är specifikt</li>
          <li><strong>Börja minimalt:</strong> 2 minuter meditation istället för 20</li>
          <li><strong>Koppla till befintlig rutin:</strong> "Efter att jag borstat tänderna kommer jag att..."</li>
          <li><strong>Fira små vinster:</strong> Ge dig själv beröm varje dag du lyckas</li>
        </ul>
      </section>

      <section aria-labelledby="week-2">
        <h3 id="week-2" className="text-xl font-semibold text-green-700 mb-3">Vecka 2: Bygg momentum</h3>
        <p className="mb-4">
          Nu börjar vanan kännas mer naturlig:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2" role="list">
          <li>Öka gradvis (10-minuterspromenad blir 12 minuter)</li>
          <li>Spåra din framgång visuellt (kalender eller app)</li>
          <li>Identifiera och planera för hinder</li>
          <li>Hitta en accountability-partner</li>
        </ul>
      </section>

      <section aria-labelledby="week-3">
        <h3 id="week-3" className="text-xl font-semibold text-green-700 mb-3">Vecka 3: Hantera motstånd</h3>
        <p className="mb-4">
          Vecka 3 är ofta den svåraste - motivationen avtar men vanan är inte automatisk än:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2" role="list">
          <li>Kom ihåg ditt "varför" - skriv ner det</li>
          <li>Anpassa vanan om den känns för svår</li>
          <li>Använd "if-then"-planering: "Om jag känner mig lat, då kommer jag ändå göra 2 minuter"</li>
          <li>Belöna dig för att hålla fast vid rutinen</li>
        </ul>
      </section>

      <section aria-labelledby="week-4">
        <h3 id="week-4" className="text-xl font-semibold text-green-700 mb-3">Vecka 4: Förstärk och utveckla</h3>
        <p className="mb-6">
          Nu börjar vanan kännas mer automatisk:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2" role="list">
          <li>Reflektera över vad som fungerat bäst</li>
          <li>Planera för långsiktig utveckling</li>
          <li>Tänk på hur du kan bygga på denna vana</li>
          <li>Förbered dig för att lägga till en ny vana nästa månad</li>
        </ul>
      </section>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Vanliga fallgropar och hur du undviker dem</h2>
      
      <section aria-labelledby="pitfall-1">
        <h3 id="pitfall-1" className="text-xl font-semibold text-green-700 mb-3">Fallgrop 1: För stor förändring på en gång</h3>
        <p className="mb-4">
          <strong>Lösning:</strong> Börja så litet att det känns löjligt enkelt. Det är bättre att meditera 
          1 minut varje dag än 30 minuter en gång i veckan.
        </p>
      </section>

      <section aria-labelledby="pitfall-2">
        <h3 id="pitfall-2" className="text-xl font-semibold text-green-700 mb-3">Fallgrop 2: Inga tydliga triggers</h3>
        <p className="mb-4">
          <strong>Lösning:</strong> Koppla nya vanor till befintliga rutiner. "Efter att jag druckit mitt 
          morgonkaffe kommer jag att..." är bättre än "någon gång på morgonen kommer jag att..."
        </p>
      </section>

      <section aria-labelledby="pitfall-3">
        <h3 id="pitfall-3" className="text-xl font-semibold text-green-700 mb-3">Fallgrop 3: Allt-eller-inget-tänk</h3>
        <p className="mb-4">
          <strong>Lösning:</strong> En missad dag förstör inte hela processen. Fokusera på att komma tillbaka 
          så fort som möjligt snarare än att ge upp helt.
        </p>
      </section>

      <section aria-labelledby="pitfall-4">
        <h3 id="pitfall-4" className="text-xl font-semibold text-green-700 mb-3">Fallgrop 4: Ingen miljödesign</h3>
        <p className="mb-6">
          <strong>Lösning:</strong> Gör det enkelt att göra rätt och svårt att göra fel. Lägg träningskläder 
          framme, håll hälsosam mat synlig, ta bort distraktioner.
        </p>
      </section>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Praktiska strategier för vanbildning</h2>
      
      <section aria-labelledby="habit-stacking">
        <h3 id="habit-stacking" className="text-xl font-semibold text-green-700 mb-3">Habit Stacking</h3>
        <p className="mb-4">
          Bygg nya vanor ovanpå befintliga rutiner:
        </p>
        <div className="bg-green-50 border p-4 rounded-lg mb-4" role="note">
          <p className="text-green-700 mb-2"><strong>Formel:</strong> "Efter [BEFINTLIG VANA], kommer jag att [NY VANA]"</p>
          <p className="text-green-700 text-sm">Exempel: "Efter att jag satt mig i bilen kommer jag att ta tre djupa andetag"</p>
        </div>
      </section>

      <section aria-labelledby="environment-design">
        <h3 id="environment-design" className="text-xl font-semibold text-green-700 mb-3">Environment Design</h3>
        <p className="mb-4">
          Din miljö påverkar dina val mer än du tror:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2" role="list">
          <li><strong>För träning:</strong> Lägg träningskläder bredvid sängen</li>
          <li><strong>För läsning:</strong> Lägg en bok på kudden</li>
          <li><strong>För hälsosam mat:</strong> Förvara frukt synligt</li>
          <li><strong>För mindre skärmtid:</strong> Ladda telefonen i ett annat rum</li>
        </ul>
      </section>

      <section aria-labelledby="two-minute-rule">
        <h3 id="two-minute-rule" className="text-xl font-semibold text-green-700 mb-3">The Two-Minute Rule</h3>
        <p className="mb-6">
          Om vanan tar mindre än två minuter att genomföra, gör den omedelbart. 
          För större vanor, skala ner till en två-minuters version för att börja.
        </p>
      </section>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Exempel på 30-dagarsvanor för familjer</h2>
      
      <section aria-labelledby="health-habits">
        <h3 id="health-habits" className="text-xl font-semibold text-green-700 mb-3">Hälsa och träning</h3>
        <ul className="list-disc list-inside mb-4 space-y-2" role="list">
          <li>10-minuters familjepromenad efter middag</li>
          <li>2 minuters stretching på morgonen</li>
          <li>En frukt till varje mellanmål</li>
          <li>Trappor istället för hiss när det är möjligt</li>
        </ul>
      </section>

      <section aria-labelledby="mental-health-habits">
        <h3 id="mental-health-habits" className="text-xl font-semibold text-green-700 mb-3">Mental hälsa och välbefinnande</h3>
        <ul className="list-disc list-inside mb-4 space-y-2" role="list">
          <li>3 saker du är tacksam för varje kväll</li>
          <li>5 minuters tystnad/meditation på morgonen</li>
          <li>Ingen telefon första timmen efter uppvaknande</li>
          <li>En familjemedlem får dela dagens höjdpunkt vid middagen</li>
        </ul>
      </section>

      <section aria-labelledby="productivity-habits">
        <h3 id="productivity-habits" className="text-xl font-semibold text-green-700 mb-3">Produktivitet och organisation</h3>
        <ul className="list-disc list-inside mb-6 space-y-2" role="list">
          <li>10 minuters städning innan sänggåendet</li>
          <li>Förbered kläder kvällen innan</li>
          <li>Läs 10 sidor i en bok varje dag</li>
          <li>Skriv ner 3 prioriteter för nästa dag</li>
        </ul>
      </section>

      <aside className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8 rounded-lg" role="complementary" aria-labelledby="family-tips">
        <h3 id="family-tips" className="text-xl font-bold text-orange-800 mb-3">Tips för familjer:</h3>
        <p className="text-orange-700 mb-0">
          Involvera hela familjen i vanbildningen. Barn lär sig bäst genom exempel, och gemensamma 
          vanor stärker familjebanden samtidigt som de skapar struktur.
        </p>
      </aside>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Att bryta dåliga vanor</h2>
      <p className="mb-4">
        Att bryta en dålig vana är ofta svårare än att bygga en ny. Här är strategier som fungerar:
      </p>

      <section aria-labelledby="identify-trigger">
        <h3 id="identify-trigger" className="text-xl font-semibold text-green-700 mb-3">Identifiera triggern</h3>
        <p className="mb-4">
          Vad är det som startar den dåliga vanan? Stress, tråkighet, en viss miljö eller tid på dagen?
        </p>
      </section>

      <section aria-labelledby="replace-routine">
        <h3 id="replace-routine" className="text-xl font-semibold text-green-700 mb-3">Byt ut rutinen</h3>
        <p className="mb-4">
          Behåll samma trigger och belöning, men byt rutinen. Om du äter godis när du är stressad 
          (för att få tröst), prova att gå en kort promenad istället.
        </p>
      </section>

      <section aria-labelledby="change-environment">
        <h3 id="change-environment" className="text-xl font-semibold text-green-700 mb-3">Förändra miljön</h3>
        <p className="mb-6">
          Gör det svårare att utföra den dåliga vanan. Ta bort fresternder från hemmet, 
          ändra dina rutter för att undvika triggers.
        </p>
      </section>

      <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">Långsiktig framgång</h2>
      <p className="mb-4">
        Efter 30 dagar har du byggt grunden för en ny vana. För att göra den permanent:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2" role="list">
        <li>Fortsätt spåra din framgång i ytterligare 30 dagar</li>
        <li>Utveckla vanan gradvis över tid</li>
        <li>Bygg identitet runt vanan: "Jag är en person som tränar"</li>
        <li>Ha tålamod - permanent förändring tar tid</li>
        <li>Fira milstolpar längs vägen</li>
      </ul>

      <p className="mb-4">
        Kom ihåg: Du bygger inte bara en vana, du bygger en bättre version av dig själv. 
        Var tålmodig med processen och stolt över varje litet steg framåt.
      </p>

      <p className="mb-4 text-lg font-semibold text-green-800">
        Din resa börjar med en enda dag. Vilken vana vill du börja bygga idag?
      </p>
    </div>
  );
};

export default HabitsContent;
