
import { Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StartDate {
  date: string;
  week: string;
  fullDate: Date;
  bookedAfter: Date;
  stripeLink: string;
}

interface QuizStartDatesProps {
  onDateCardCTA: (stripeLink: string) => void;
}

export const QuizStartDates = ({ onDateCardCTA }: QuizStartDatesProps) => {
  // TODO: In future pre-launch phases, this component should be displayed instead of direct purchase links
  // Currently showing for launch phase with direct purchase functionality
  
  // START DATES CONFIGURATION WITH AUTOMATIC BOOKING STATUS AND STRIPE LINKS
  const startDates: StartDate[] = [
    {
      date: '30 juni',
      week: 'v.27',
      fullDate: new Date('2025-06-30'),
      bookedAfter: new Date('2025-06-23'),
      stripeLink: 'https://buy.stripe.com/4gM8wQe4ngdMaF4bTjasg0b'
    },
    {
      date: '7 juli',
      week: 'v.28',
      fullDate: new Date('2025-07-07'),
      bookedAfter: new Date('2025-06-30'),
      stripeLink: 'https://buy.stripe.com/fZu5kEbWf7HgeVk6yZasg0f'
    },
    {
      date: '14 juli',
      week: 'v.29',
      fullDate: new Date('2025-07-14'),
      bookedAfter: new Date('2025-07-07'),
      stripeLink: 'https://buy.stripe.com/cNi8wQ3pJ8LkcNcf5vasg0g'
    },
    {
      date: '21 juli',
      week: 'v.30',
      fullDate: new Date('2025-07-21'),
      bookedAfter: new Date('2025-07-14'),
      stripeLink: 'https://buy.stripe.com/8x27sMf8r6DcbJ82iJasg0h'
    }
  ];

  // Use current date for booking status (no test mode in quiz)
  const currentDate = new Date();
  
  const getBookingStatus = (startDate: StartDate) => {
    return currentDate >= startDate.bookedAfter ? 'fully-booked' : 'available';
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl max-w-4xl mx-auto mb-6 sm:mb-8 border border-white/50">
      <div className="text-center mb-6">
        <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
        <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2 font-display">
          Välj din startdag - Perfekt matchning! 🎯
        </h3>
        <p className="text-sm text-green-700 opacity-80 font-text">
          Baserat på dina svar passar du perfekt för Sommarboosten
        </p>
      </div>
      
      {/* Four individual start date boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {startDates.map((startDate, index) => {
          const bookingStatus = getBookingStatus(startDate);
          const isFullyBooked = bookingStatus === 'fully-booked';
          
          return (
            <div 
              key={index}
              className={`relative rounded-xl p-4 border-2 transition-all duration-200 ${
                isFullyBooked 
                  ? 'bg-gray-100 border-gray-300 opacity-75' 
                  : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-300 hover:shadow-lg'
              }`}
            >
              {/* Fully booked badge */}
              {isFullyBooked && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  FULLT
                </div>
              )}
              
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-green-800 mb-1 font-display">
                  {startDate.date}
                </div>
                <div className="text-sm text-green-600 mb-3 font-text">
                  ({startDate.week})
                </div>
                
                {isFullyBooked ? (
                  <div className="text-xs text-gray-600 font-text mb-3">
                    Denna start är full
                  </div>
                ) : (
                  <div className="text-xs text-green-700 font-semibold font-text mb-3">
                    Platser kvar!
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  onClick={() => onDateCardCTA(startDate.stripeLink)}
                  disabled={isFullyBooked}
                  className={`w-full text-xs h-8 ${
                    isFullyBooked 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isFullyBooked ? 'Fullt' : 'Välj denna start'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="text-sm font-semibold text-blue-800 mb-2">📧 Viktigt att veta:</h4>
        <p className="text-xs text-blue-700 mb-2">
          En unik köplänk med din 30% rabattkod skickas till din e-post inom kort.
        </p>
        <p className="text-xs text-blue-700">
          Har du inte fått din rabattkod? Mejla oss på{' '}
          <a href="mailto:hej@sundochstark.se" className="font-semibold underline">
            hej@sundochstark.se
          </a>
        </p>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs sm:text-sm text-green-600 font-text opacity-80">
          🌟 Alla starter inkluderar samma fantastiska innehåll · Välj det datum som passar dig bäst
        </p>
      </div>
    </div>
  );
};
