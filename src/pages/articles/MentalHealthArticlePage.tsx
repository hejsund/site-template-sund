
import React, { useEffect } from 'react';
import { ArrowLeft, Heart, Brain, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const MentalHealthArticlePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Sommarens mentala hälsa
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sommaren är den perfekta tiden att fokusera på din mentala hälsa. Lär dig hur du kan använda årstiden för att bygga starkare mentala vanor och må bättre.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Varför sommaren är perfekt för mental hälsa</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sommaren erbjuder unika möjligheter för mental återhämtning och välbefinnande. Med längre dagar, 
              varmare väder och naturens fulla blom kan vi använda årstiden strategiskt för att stärka vår 
              mentala hälsa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Forskning visar att exponering för naturligt ljus, utomhusaktiviteter och grönska har kraftfulla 
              positiva effekter på vår mentala hälsa och välbefinnande.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-md bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Sun className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Naturligt ljus</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Solljus ökar produktionen av serotonin, vilket förbättrar humöret och skapar en känsla av 
                  lugn och fokus. Försök att få minst 15-30 minuter direkt solljus varje dag.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-teal-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Utomhusaktiviteter</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Aktiviteter i naturen minskar stresshormoner och ökar endorfiner. Promenader, trädgårdsarbete 
                  eller bara att sitta utomhus kan ha betydande positiva effekter.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Strategies Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Strategier för sommarens mentala hälsa</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Skapa en morgonrutin utomhus</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Börja dagen med 10-15 minuter utomhus. Detta kan vara så enkelt som att dricka kaffe på 
                  balkongen eller en kort promenad runt kvarteret.
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Sätter en positiv ton för dagen</li>
                  <li>• Reglerar din dygnsrytm</li>
                  <li>• Ger naturlig energi utan koffein</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Praktisera mindfulness i naturen</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kombinera meditation med naturens lugnande effekter. Hitta en lugn plats utomhus och 
                  fokusera på dina sinnen.
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Lyssna på naturens ljud</li>
                  <li>• Känn vinden mot huden</li>
                  <li>• Observera omgivningen utan att döma</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Sociala aktiviteter utomhus</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kombinera social interaktion med utomhusvistelse för dubbla mentala hälsofördelar.
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Picknick med vänner</li>
                  <li>• Utomhusträning i grupp</li>
                  <li>• Grillkvällar och trädgårdsfester</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practical Tips */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Praktiska tips för vardagen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Dagliga vanor:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 20 minuter utomhus varje dag</li>
                  <li>• Djupandning i frisk luft</li>
                  <li>• Gratitetsreflektion i naturen</li>
                  <li>• Digital detox utomhus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Veckovisa aktiviteter:</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Längre naturpromenader</li>
                  <li>• Trädgårdsarbete eller plantering</li>
                  <li>• Utomhusyoga eller stretching</li>
                  <li>• Läsning i parken</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthArticlePage;
