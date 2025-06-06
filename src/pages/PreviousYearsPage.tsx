
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Star } from 'lucide-react';

const PreviousYearsPage = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const getYearStats = (year: number) => {
    // Mock data - in real app this would come from backend
    const baseParticipants = 1000;
    const yearsSince2020 = year - 2020;
    return {
      participants: baseParticipants + (yearsSince2020 * 200),
      rating: 4.8 + (Math.random() * 0.2),
      highlights: [
        `${year === currentYear ? 'Pågående' : 'Genomförd'} sommarboosten`,
        `Över ${baseParticipants + (yearsSince2020 * 200)} deltagare`,
        'Genomsnittlig viktminskning 3-5 kg',
        '95% slutförde hela programmet'
      ]
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-display">
            Tidigare års Sommarboosten
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto font-text">
            Se hur tusentals personer har förändrat sina liv genom åren. 
            Varje år blir programmet bättre baserat på deltagarnas feedback!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {years.map((year) => {
            const stats = getYearStats(year);
            const isCurrent = year === currentYear;
            
            return (
              <Card key={year} className={`p-6 hover:shadow-xl transition-shadow ${isCurrent ? 'ring-2 ring-primary' : ''}`}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-2 font-display">
                    Sommarboosten {year}
                  </h2>
                  {isCurrent && (
                    <span className="bg-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                      Aktuell
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-green-700 font-text">{stats.participants} deltagare</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-green-700 font-text">{stats.rating.toFixed(1)}/5.0 betyg</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {stats.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-green-700 font-text">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/program/${year}`}>
                  <Button className={`w-full ${isCurrent ? 'cta-primary' : 'bg-green-600 hover:bg-green-700 text-white'}`}>
                    {isCurrent ? 'Se aktuellt program' : `Läs mer om ${year}`}
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Vad säger våra deltagare?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-green-700 font-text">Slutförde hela programmet</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                <p className="text-green-700 font-text">Genomsnittligt betyg</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">89%</div>
                <p className="text-green-700 font-text">Skulle rekommendera till en vän</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousYearsPage;
