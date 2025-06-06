
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plane, ArrowLeft, MapPin, Hotel, Tent } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const VacationTrainingArticlePage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50">
      {/* Header */}
      <header className="py-8 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Plane className="w-6 h-6 text-teal-600" />
            <span className="text-teal-600 font-semibold">Semester</span>
            <span className="text-green-600 text-sm">11 min läsning</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
            Semesterträning som funkar
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed">
            Upptäck hur du håller igång träningen på semester utan stress. Enkla tips för hotellrum, camping och strand. Flexibel träning för hela familjen.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-3 sm:px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/05193ae1-7600-4f69-b248-989af17f14bc.png" 
              alt="Avslappnad träning på semester"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="px-3 sm:px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-green-700 font-text">
                "Men Charlotte, jag ska väl inte träna på semestern? Det är ju min lediga tid!"
              </p>
              
              <p>
                Det är förmodligen den vanligaste invändningen jag får. Och jag förstår den helt.
              </p>
              
              <p>
                Men här är saken: Efter fem år av att hjälpa familjer har jag lärt mig skillnaden mellan "träning" och "rörelse som får dig att må bra."
              </p>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-6 my-8 rounded-lg">
                <h3 className="text-xl font-bold text-teal-800 mb-3">Semesterträning handlar om att:</h3>
                <p className="text-teal-700 mb-0">
                  Komma hem och känna dig energisk istället för utmattad. Det handlar inte om att hålla upp intensiteten från hemma - det handlar om att må bra.
                </p>
              </div>

              <h2>Vad som händer när du slutar röra dig helt</h2>
              
              <p>
                Vi romanticerar ofta bilden av att "bara koppla av" på semestern. Men som fyrbarnsmamma vet jag vad som händer när kroppen går från regelbunden aktivitet till totalt stillasittande:
              </p>

              <h3>Vecka 1: "Äntligen vila!"</h3>
              <p>Du njuter av att inte behöva tänka på träning. Kroppen känns avslappnad.</p>

              <h3>Vecka 2: "Varför är jag så trött?"</h3>
              <p>Trots att du "vilar" känner du dig faktiskt mer trött. Rygg och nacke börjar värka.</p>

              <h3>Vecka 3: "Jag mår sämre än innan semestern"</h3>
              <p>Energin är borta. Du sover sämre. Humöret påverkas.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-white border border-teal-200 p-6 rounded-xl shadow-sm">
                  <Hotel className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="font-bold text-teal-800 mb-3">Hotellsemester</h3>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>Morgonpass på hotelrummet (10-15 min)</li>
                    <li>Kvällspass på balkongen</li>
                    <li>Poolaktiviteter som lek</li>
                  </ul>
                </div>

                <div className="bg-white border border-teal-200 p-6 rounded-xl shadow-sm">
                  <Tent className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="font-bold text-teal-800 mb-3">Camping/husbil</h3>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>Naturens gym - utomhusträning</li>
                    <li>Vardagsträning (sätta upp tält)</li>
                    <li>Promenader för att utforska</li>
                  </ul>
                </div>

                <div className="bg-white border border-teal-200 p-6 rounded-xl shadow-sm">
                  <MapPin className="w-8 h-8 text-teal-600 mb-4" />
                  <h3 className="font-bold text-teal-800 mb-3">Strandsemester</h3>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>Sandträning (perfekt för lederna)</li>
                    <li>Vattenaktiviteter</li>
                    <li>Yoga på sanden</li>
                  </ul>
                </div>
              </div>

              <h2>Filosofin bakom Sommarboosten-semesterträning</h2>
              
              <p>
                När vi utvecklade semesterkonceptet utgick vi från en enkel fråga: <strong>Vad är det minsta du kan göra för att komma hem och känna dig stark, energisk och glad?</strong>
              </p>

              <p>Svaret blev förvånansvärt enkelt:</p>

              <ul>
                <li><strong>15-20 minuter rörelse per dag</strong> - Tillräckligt för att hålla kroppen igång</li>
                <li><strong>Fokus på glädje och energi</strong> - Varje pass ska ge dig mer energi än det tar</li>
                <li><strong>Noll utrustning</strong> - Allt ska funka med bara din kropp</li>
                <li><strong>Familjevänligt</strong> - Barnen ska kunna vara med</li>
              </ul>

              <h2>Familjeträning på semester</h2>
              
              <p>
                Som mamma till fyra barn vet jag att det svåraste med semesterträning inte är träningen i sig - det är att få ihop det med familjelivet.
              </p>
              
              <p>
                Men här är hemligheten: <strong>Gör barnen till medspelare istället för hinder.</strong>
              </p>

              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl my-8">
                <h3 className="text-teal-800 mb-4">Aktiviteter som funkar för alla:</h3>
                <ul className="text-green-700 space-y-2">
                  <li><strong>Skattjakten som träning:</strong> Alla går/springer mellan stationerna</li>
                  <li><strong>Dansfesten på kvällen:</strong> 20 minuter dans på hotelrummet</li>
                  <li><strong>Utforskargången:</strong> Barn väljer riktning för promenaden</li>
                  <li><strong>Lekträning på stranden:</strong> Bygg sandslott, spela beachvolley</li>
                </ul>
              </div>

              <h2>Att komma hem stronger</h2>
              
              <p>Det magiska med rätt typ av semesterträning är vad som händer när du kommer hem:</p>

              <ul>
                <li>Du har inte tappat konditionen</li>
                <li>Du känner dig energisk istället för att behöva "komma igång" igen</li>
                <li>Du har skapat nya vanor</li>
                <li>Du har visat barnen att hälsa följer med överallt</li>
              </ul>

              <p className="font-semibold text-teal-600">
                För första gången kom vi hem starkare än vi åkte! - säger tusentals familjer som använt våra semesterplaner.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-teal-200 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-teal-800 text-center">
              Få våra bästa semestertips! ✈️🌟
            </h3>
            <p className="text-sm sm:text-base mb-6 text-green-700 font-text text-center">
              Praktiska tips för att hålla dig aktiv på semester utan stress.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-teal-300 bg-white text-green-800"
                required
              />
              <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold">
                Skicka tips! 📧
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 text-green-800 font-display">
            Är du redo för din första semester där du kommer hem starkare? 💪
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-xl font-semibold">
                Läs mer om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacationTrainingArticlePage;
