
import { useMemo } from 'react';

interface StartDate {
  date: string;
  week: string;
  fullDate: Date;
  bookedAfter: Date;
  stripeLink: string;
}

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

export const useDynamicText = (testMode: boolean = false, testDate?: Date) => {
  return useMemo(() => {
    const currentDate = testMode && testDate ? testDate : new Date();
    
    // Find next available start
    const nextAvailableStart = startDates.find(start => 
      currentDate < start.bookedAfter
    );
    
    // Find first start that's already booked
    const firstBookedStart = startDates.find(start => 
      currentDate >= start.bookedAfter
    );
    
    // Calculate days until next start
    const nextStartDate = nextAvailableStart ? nextAvailableStart.fullDate : startDates[0].fullDate;
    const daysUntilStart = Math.ceil((nextStartDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Generate dynamic texts
    const getTimerText = () => {
      if (nextAvailableStart) {
        return `Första start stänger ${nextAvailableStart.date.split(' ')[0]} ${nextAvailableStart.date.split(' ')[1]} 23:59`;
      }
      return 'Anmälan har stängt för alla starter';
    };
    
    const getUrgencyText = () => {
      if (daysUntilStart <= 7 && nextAvailableStart) {
        return `⚡ Första starten börjar om ${daysUntilStart} dagar - säkra din plats nu!`;
      } else if (nextAvailableStart) {
        return `🌟 Första starten den ${nextAvailableStart.date} - anmäl dig nu`;
      } else if (firstBookedStart) {
        return `🔥 Första starten är fullbokad - anmäl dig till nästa start`;
      }
      return '✨ Anmälan pågår - säkra din plats';
    };
    
    const getCtaText = () => {
      if (firstBookedStart && nextAvailableStart) {
        return 'Anmäl dig till nästa start';
      } else if (nextAvailableStart) {
        return 'Anmäl dig till första starten';
      }
      return 'Se alla starter';
    };
    
    const getStatusText = () => {
      if (daysUntilStart <= 3 && nextAvailableStart) {
        return 'Sista chansen!';
      } else if (daysUntilStart <= 7 && nextAvailableStart) {
        return 'Börjar snart';
      } else if (nextAvailableStart) {
        return 'Anmälan öppen';
      }
      return 'Kontakta oss';
    };

    return {
      timerText: getTimerText(),
      urgencyText: getUrgencyText(),
      ctaText: getCtaText(),
      statusText: getStatusText(),
      nextAvailableStart,
      firstBookedStart,
      daysUntilStart,
      hasAvailableStarts: !!nextAvailableStart
    };
  }, [testMode, testDate]);
};
