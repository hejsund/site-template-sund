
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
    
    // Find next available start (registration still open AND start date is in the future)
    const nextAvailableStart = startDates.find(start => 
      currentDate < start.bookedAfter && currentDate < start.fullDate
    );
    
    // Find first start that's already booked (registration closed OR start date has passed)
    const firstBookedStart = startDates.find(start => 
      currentDate >= start.bookedAfter || currentDate >= start.fullDate
    );
    
    // Calculate days until next start
    const nextStartDate = nextAvailableStart ? nextAvailableStart.fullDate : startDates[startDates.length - 1].fullDate;
    const daysUntilStart = Math.ceil((nextStartDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Generate dynamic texts
    const getTimerText = () => {
      if (nextAvailableStart) {
        return 'Anmälan stänger snart';
      }
      return 'Anmälan har stängt för alla starter';
    };
    
    const getUrgencyText = () => {
      if (daysUntilStart <= 7 && nextAvailableStart) {
        return `⚡ Starten börjar om ${daysUntilStart} dagar - säkra din plats nu!`;
      } else if (nextAvailableStart) {
        return `🌟 Nästa start den ${nextAvailableStart.date} - anmäl dig nu`;
      } else if (firstBookedStart) {
        return `🔥 Alla starter är fullbokade - kontakta oss för mer info`;
      }
      return '✨ Anmälan pågår - säkra din plats';
    };
    
    const getCtaText = () => {
      return 'Se nästa start';
    };
    
    const getStatusText = () => {
      if (!nextAvailableStart) {
        return 'Alla starter fullbokade';
      } else if (daysUntilStart <= 3) {
        return 'Sista chansen!';
      } else if (daysUntilStart <= 7) {
        return 'Börjar snart';
      } else {
        return 'Anmälan öppen';
      }
    };

    const getMainText = () => {
      if (firstBookedStart && nextAvailableStart) {
        return 'Anmäl dig till nästa start';
      } else if (nextAvailableStart) {
        return 'Anmäl dig till nästa start';
      } else if (firstBookedStart) {
        return 'Alla starter är stängda. Kontakta oss för mer info.';
      } else {
        return 'Kampanj avslutad. Anmälan stängd.';
      }
    };

    return {
      timerText: getTimerText(),
      urgencyText: getUrgencyText(),
      ctaText: getCtaText(),
      statusText: getStatusText(),
      mainText: getMainText(),
      nextAvailableStart,
      firstBookedStart,
      daysUntilStart,
      hasAvailableStarts: !!nextAvailableStart
    };
  }, [testMode, testDate]);
};
