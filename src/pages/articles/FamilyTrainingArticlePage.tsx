
import React from 'react';
import { ArrowLeft, Users, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FamilyTrainingArticlePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/artiklar')}
            className="mb-4 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tillbaka till artiklar
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Familjeträning på sommaren
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gör sommaren till den perfekta tiden för familjen att röra sig tillsammans. Upptäck roliga och enkla sätt att hålla hela familjen aktiv.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Varför familjeträning?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Familjeträning handlar inte bara om fysisk aktivitet - det handlar om att skapa minnen, 
              stärka band och etablera hälsosamma vanor som varar livet ut. Sommaren erbjuder perfekta 
              förutsättningar för utomhusaktiviteter som alla kan delta i.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              När familjen tränar tillsammans skapas naturliga tillfällen för samtal, skratt och 
              gemenskap - samtidigt som alla får motion och frisk luft.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <Heart className="h-10 w-10 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stärker band</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Gemensamma aktiviteter skapar närmre relationer och ökar förtroendet mellan familjemedlemmar.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-teal-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <Star className="h-10 w-10 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Skapar vanor</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Barn som växer upp med aktiva föräldrar har större chans att fortsätta vara aktiva som vuxna.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <Users className="h-10 w-10 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Roligt för alla</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Aktiviteter kan anpassas så att alla åldrar kan delta och ha kul tillsammans.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Ideas */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Roliga sommaraktiviteter för familjen</h2>
            
            <div className="space-y-8">
              <div className="bg-yellow-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vattenaktiviteter</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Perfekt för varma sommardagar och garanterat uppskattat av barn i alla åldrar.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Simning på badplats eller i pool</li>
                    <li>• Vattenlek i trädgården</li>
                    <li>• Stand-up paddling för familjen</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Kanotpaddling på lugnt vatten</li>
                    <li>• Strandvolleyboll eller fotboll</li>
                    <li>• Byggande av sandslott</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Naturäventyr</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Utforska naturen tillsammans och upptäck nya platser i er närhet.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Familjevandringar på enkla leder</li>
                    <li>• Cykelutflykter på tryggа vägar</li>
                    <li>• Geocaching - modern skattjakt</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Bärplockning eller svampplockning</li>
                    <li>• Naturens hinderbana</li>
                    <li>• Fågelskådning eller naturstudier</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trädgårds- och hemaktiviteter</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aktiviteter som kan göras hemma eller i närområdet, perfekt för vardagsmotion.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Trädgårdsarbete tillsammans</li>
                    <li>• Utomhusyoga på gräsmattan</li>
                    <li>• Hopprep och andra klassiker</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Familjeträning med kroppsvikt</li>
                    <li>• Dans och rörelse till musik</li>
                    <li>• Hinderbanor med hushållssaker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tips for Success */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips för framgångsrik familjeträning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Planering och förberedelse:</h4>
                <ul className="text-gray-700 space-y-3">
                  <li>• Låt alla familjemedlemmar föreslå aktiviteter</li>
                  <li>• Boka in träning som vilken annan aktivitet som helst</li>
                  <li>• Ha enkla backup-aktiviteter för dåligt väder</li>
                  <li>• Anpassa intensitet efter den som har lägst kondition</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Genomförande:</h4>
                <ul className="text-gray-700 space-y-3">
                  <li>• Fokusera på kul, inte på prestation</li>
                  <li>• Ta pauser när någon behöver det</li>
                  <li>• Fira framsteg och ansträngning</li>
                  <li>• Dokumentera aktiviteterna med foton</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTrainingArticlePage;
