
import { Hero } from '@/components/Hero';
import { ImageIntroSection } from '@/components/ImageIntroSection';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ImageIntroSection />

      {/* Problem/Pain Point Section */}
      <section className="py-16 px-4 bg-green-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-800 mb-8 text-center font-display">
            December tenderar att fyllas på med en hel del måsten
          </h2>
          <div className="space-y-6 text-green-700 font-text text-lg leading-relaxed">
            <p>
              Dagarna blir kortare, mörkret kommer tidigare och någonstans på vägen försöker vi hinna lite till.
              Listorna blir längre, kalendern fylls upp, och även om vi längtar efter ledigheten – är det mycket som ska falla på plats innan dess. Både på jobbet och hemma.
            </p>
            <p>
              Det är en tid som bär både förväntan och trötthet på samma gång. Och någonstans där, bland allt som ska ordnas, glömmer vi ofta oss själva.
            </p>
          </div>
        </div>
      </section>

      {/* Deeper Pain Point Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-800 mb-8 text-center font-display">
            Vi vill så gärna skapa den där drömjulen
          </h2>
          <div className="space-y-6 text-green-700 font-text text-lg leading-relaxed">
            <p>
              Där barnen får minnen för livet, julgodiset är hembakat och hemmet doftar rent och nystädat. Vi vill känna lugnet, glädjen, närvaron. Men ofta blir det tvärtom.
            </p>
            <p>
              För mitt i allt det fina ska det handlas, städas, planeras och avslutas. Jobb ska rundas av, klappar köpas, kalenderluckor fyllas. Och någonstans på vägen tappar vi oss själva – i försöket att få allt att kännas perfekt.
            </p>
            <p>
              Vi springer lite fortare, sover lite mindre, och trots att vi längtar efter lugn hamnar vi längst ner på vår egen lista.
            </p>
            <p className="pt-4 font-semibold">
              Kanske känner du igen dig? Känslan av att december rusar, medan du försöker hinna med livet. Den där tröttheten som smyger sig på när du egentligen bara vill andas, känna doften av granen, höra tystnaden mellan tonerna.
            </p>
            <p className="italic text-green-800 font-semibold">
              Det är just där – i det mellanrummet – den här kalendern vill möta dig.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-green-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-800 mb-8 text-center font-display">
            Den här kalendern är skapad för att du ska få vila lite varje dag
          </h2>
          <div className="space-y-6 text-green-700 font-text text-lg leading-relaxed">
            <p>
              En trygg plats där du får landa – utan krav, utan prestation. Tre till tio minuter, inget att förbereda – bara tryck på play.
            </p>
            <p className="text-center text-2xl font-bold text-primary py-6">
              ✨ Inte mer prestation, inte göra mer – utan bara vara här.
            </p>
            <p>
              Varje dag i december får du ett nytt ljudspår – en mjuk aktivering för kropp, sinne och hjärta. Jag guidar dig i stillhet och närvaro, med små påminnelser om vad som faktiskt betyder något. Och varje gång avslutas med en fråga – en varm inbjudan till reflektion.
            </p>
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-800 mb-8 text-center font-display">
            🌙 För dig som...
          </h2>
          <div className="space-y-6 text-green-700 font-text text-lg leading-relaxed">
            <p>
              ...har huvudet fullt av allt som ska ordnas inför julen. Julklappar som ska fixas, mejl som ska besvaras, mat som ska handlas och ett hem som aldrig riktigt blir helt i ordning.
            </p>
            <p>
              Du längtar efter en stund för dig själv – att bara få sitta ner, andas och känna lugnet en liten stund. Men först ska du bara. Bara handla, bara svara, bara fixa det sista.
            </p>
            <p>
              Och dagarna fortsätter, men du hinner aldrig riktigt med dig själv.
            </p>
            <p className="pt-4">
              Den här kalendern är för dig som vill få släppa taget en stund. Som längtar efter att någon säger: "Du får vila. Jag håller dig en stund."
            </p>
            <p>
              Du behöver inte planera eller förbereda något. Du behöver inte ha några förkunskaper. Du behöver bara trycka på play och låta mig hålla dig en liten stund.
            </p>
            <p className="text-center text-xl font-bold text-green-800 pt-6">
              För du förtjänar att bli hållen.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 bg-green-50/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-800 mb-8 text-center font-display">
            ✨ Din mjuka december
          </h2>
          <div className="space-y-6 text-green-700 font-text text-lg leading-relaxed">
            <p>
              Det här är ingen kalender som kräver planering, träningskläder eller nya rutiner. Inga recept att förbereda, inget du måste "hinna med".
            </p>
            <p>
              Bara ett ljudspår om dagen – max tio minuter. En stund där du får vila, hämta hem dig själv och bara ta emot.
            </p>
            <p>
              Du kan lyssna hemma i soffan, på väg till jobbet, under en promenad eller innan du somnar. Precis där du är, precis som du är.
            </p>
            <p>
              Och med tiden kommer du märka – hur det enkla faktiskt gör störst skillnad. Hur kroppen mjuknar, tankarna stillnar och du börjar känna dig mer närvarande, även när livet rullar på som vanligt.
            </p>
            <p className="italic pt-4">
              Det är det som är magin i den här kalendern. Inte görandet. Utan varandet.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
      <FooterSection />
    </div>
  );
};

export default Index;
