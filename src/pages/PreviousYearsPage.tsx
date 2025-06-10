import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Star } from 'lucide-react';
import { FooterSection } from '@/components/FooterSection';

const PreviousYearsPage = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const getYearInfo = (year: number) => {
    return {
      rating: 4.8 + (Math.random() * 0.2),
      highlights: [
        `${year === currentYear ? 'Pågående' : 'Genomförd'} sommarboosten`,
        'Nya roliga recept varje vecka',
        'Fokus på hållbara vanor',
        'Personlig coaching och stöd'
      ]
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-8 font-display">
            Tidigare års Sommarboosten
          </h1>
          <p className="text-xl text-green-700 max-w-3xl mx-auto font-text leading-relaxed">
            Se hur programmet har utvecklats genom åren. 
            Varje år blir Sommarboosten bättre baserat på deltagarnas feedback!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {years.map((year) => {
            const info = getYearInfo(year);
            const isCurrent = year === currentYear;
            
            return (
              <Card key={year} className={`p-8 hover:shadow-xl transition-shadow ${isCurrent ? 'ring-2 ring-primary' : ''}`}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3 font-display">
                    Sommarboosten {year}
                  </h2>
                  {isCurrent && (
                    <span className="bg-coral text-white px-3 py-1 rounded-full text-sm font-medium">
                      Aktuell
                    </span>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-green-700 font-text">{info.rating.toFixed(1)}/5.0 betyg</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {info.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
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

        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display">
              Vad säger våra deltagare?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">95%</div>
                <p className="text-green-700 font-text">Slutförde hela programmet</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">4.9</div>
                <p className="text-green-700 font-text">Genomsnittligt betyg</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">89%</div>
                <p className="text-green-700 font-text">Skulle rekommendera till en vän</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PreviousYearsPage;
