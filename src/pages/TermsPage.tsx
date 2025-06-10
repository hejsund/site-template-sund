
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, AlertCircle, Users, Shield } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tillbaka till startsidan
            </Button>
          </Link>
          
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-display">
              Användarvillkor
            </h1>
          </div>
          
          <p className="text-xl text-green-700 font-text">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display flex items-center">
              <Users className="w-6 h-6 mr-3" />
              Allmänna bestämmelser
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Välkommen till Sommarboosten! Dessa användarvillkor ("Villkor") 
                gäller för din användning av vår webbplats och våra tjänster. 
                Genom att använda vår webbplats accepterar du dessa villkor i sin helhet.
              </p>
              <p>
                Sommarboosten drivs av Sund och Stark och erbjuder hälso- och 
                träningsprogram samt relaterat innehåll.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Användning av tjänsten
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>Du får använda vår webbplats för:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personligt, icke-kommersiellt bruk</li>
                <li>Att ta del av vårt innehåll och våra program</li>
                <li>Att delta i vårt quiz och få personliga rekommendationer</li>
                <li>Att registrera dig för vårt nyhetsbrev</li>
              </ul>
              <p>Du förbinder dig att inte:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Använda tjänsten för olagliga ändamål</li>
                <li>Störa eller skada webbplatsens funktionalitet</li>
                <li>Kopiera eller distribuera vårt innehåll utan tillstånd</li>
                <li>Använda automatiserade system för att komma åt webbplatsen</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Innehåll och immaterialrätt
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Allt innehåll på webbplatsen, inklusive texter, bilder, videor, 
                logotyper och design, ägs av Sund och Stark eller våra licensgivare 
                och skyddas av upphovsrättslagen.
              </p>
              <p>
                Du får inte reproducera, distribuera, modifiera eller skapa 
                härledda verk av vårt innehåll utan skriftligt tillstånd.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display flex items-center">
              <AlertCircle className="w-6 h-6 mr-3" />
              Hälsoinformation och ansvarsfriskrivning
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p className="font-semibold text-coral">
                Viktigt: Informationen på denna webbplats är endast för 
                utbildningsändamål och ersätter inte professionell medicinsk rådgivning.
              </p>
              <p>
                Våra program och råd är allmänna rekommendationer. Innan du 
                påbörjar något träningsprogram eller gör stora förändringar i 
                din kost, bör du konsultera en läkare eller annan kvalificerad 
                vårdpersonal.
              </p>
              <p>
                Sund och Stark ansvarar inte för eventuella skador eller 
                hälsoproblem som kan uppstå till följd av användning av 
                informationen eller programmen på denna webbplats.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Begränsning av ansvar
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Sund och Stark tillhandahåller webbplatsen och tjänsterna "som de är" 
                utan garantier av något slag. Vi ansvarar inte för:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Avbrott i tjänsten eller tekniska problem</li>
                <li>Förlust av data eller information</li>
                <li>Indirekta skador eller följdskador</li>
                <li>Resultat från användning av våra program</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display flex items-center">
              <Shield className="w-6 h-6 mr-3" />
              Personuppgifter
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Din integritet är viktig för oss. Läs vår{' '}
                <Link to="/integritetspolicy" className="text-primary hover:underline font-semibold">
                  integritetspolicy
                </Link>
                {' '}för information om hur vi samlar in, använder och skyddar 
                dina personuppgifter.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Ändringar av villkoren
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Vi förbehåller oss rätten att när som helst ändra dessa villkor. 
                Ändringar träder i kraft när de publiceras på denna sida. 
                Fortsatt användning av webbplatsen efter ändringar innebär 
                att du accepterar de nya villkoren.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Kontakt
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Om du har frågor om dessa användarvillkor, kontakta oss på:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold">Sund och Stark</p>
                <p>E-post: hej@sundochstark.se</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Tillämplig lag
            </h2>
            <div className="text-green-700 font-text">
              <p>
                Dessa villkor regleras av svensk lag. Eventuella tvister ska 
                avgöras av svensk domstol.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
