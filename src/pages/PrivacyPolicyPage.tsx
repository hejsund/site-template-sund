
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Lock, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-display">
              Integritetspolicy
            </h1>
          </div>
          
          <p className="text-xl text-green-700 font-text">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display flex items-center">
              <Eye className="w-6 h-6 mr-3" />
              Vilken information samlar vi in?
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Vi samlar in information som du frivilligt tillhandahåller när du:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Registrerar dig för vårt nyhetsbrev</li>
                <li>Deltar i vårt hälsoquiz</li>
                <li>Kontaktar oss via e-post</li>
                <li>Använder vår webbplats (teknisk information)</li>
              </ul>
              <p>
                Den information vi samlar in kan inkludera ditt namn, e-postadress, 
                ålder, kön och svar på vårt hälsoquiz.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display flex items-center">
              <Lock className="w-6 h-6 mr-3" />
              Hur använder vi din information?
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>Vi använder din information för att:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Skicka dig vårt nyhetsbrev och relevanta hälsotips</li>
                <li>Ge dig personliga rekommendationer baserat på dina quizsvar</li>
                <li>Förbättra våra tjänster och webbplatsens funktionalitet</li>
                <li>Svara på dina frågor och förfrågningar</li>
                <li>Följa upp våra program och deras effektivitet</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Dataskydd och säkerhet
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Vi tar din integritet på allvar och vidtar lämpliga tekniska och 
                organisatoriska åtgärder för att skydda din personliga information 
                mot obehörig åtkomst, förlust eller missbruk.
              </p>
              <p>
                Din information lagras säkert och delas aldrig med tredje part utan 
                ditt uttryckliga samtycke, förutom när det krävs enligt lag.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Dina rättigheter
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>Enligt GDPR har du rätt att:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Få information om vilken data vi har om dig</li>
                <li>Rätta felaktig information</li>
                <li>Radera din information</li>
                <li>Begränsa behandlingen av din data</li>
                <li>Överföra din data till en annan tjänsteleverantör</li>
                <li>Invända mot behandlingen av din data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Cookies
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Vår webbplats använder cookies för att förbättra din användarupplevelse 
                och för att samla in statistik om hur webbplatsen används. Genom att 
                fortsätta använda vår webbplats samtycker du till vår användning av cookies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 font-display flex items-center">
              <Mail className="w-6 h-6 mr-3" />
              Kontakt
            </h2>
            <div className="text-green-700 font-text space-y-4">
              <p>
                Om du har frågor om vår integritetspolicy eller vill utöva dina 
                rättigheter, kontakta oss på:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold">Company Name</p>
                <p>E-post: hej@yoursite.se</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-primary mb-4 font-display">
              Ändringar av policyn
            </h2>
            <div className="text-green-700 font-text">
              <p>
                Vi kan komma att uppdatera denna integritetspolicy från tid till annan. 
                Eventuella ändringar kommer att publiceras på denna sida med ett 
                uppdaterat datum.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
