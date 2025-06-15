
import React, { useState, useEffect } from 'react';
import { Timer, Calendar } from 'lucide-react';
import { useDynamicText } from '@/hooks/useDynamicText';

interface LaunchTimerProps {
  testMode?: boolean;
  testDate?: Date;
}

export const LaunchTimer = ({ testMode = false, testDate }: LaunchTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const { timerText, hasAvailableStarts, statusText, nextAvailableStart, firstBookedStart } = useDynamicText(testMode, testDate);

  useEffect(() => {
    const updateTimer = () => {
      const currentDate = testMode && testDate ? testDate : new Date();
      let targetDate: number;

      if (nextAvailableStart) {
        // Timer counts down to when the next available start closes for registration
        targetDate = nextAvailableStart.bookedAfter.getTime();
      } else {
        // Fallback to original date if no starts available
        targetDate = new Date('2025-06-22T21:59:00Z').getTime();
      }
      
      const now = currentDate.getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, [testMode, testDate, nextAvailableStart]);

  // Check if we should show the timer at all
  const currentDate = testMode && testDate ? testDate : new Date();
  const finalCutoffDate = new Date('2025-07-21T21:59:00Z'); // After last start closes
  const showExpiredContent = currentDate >= finalCutoffDate;

  if (showExpiredContent && !testMode) return null;

  // Dynamic main text based on availability and booking status
  const getMainText = () => {
    if (firstBookedStart && nextAvailableStart) {
      return `Första starten är stängd! Anmäl dig till ${nextAvailableStart.date}`;
    } else if (hasAvailableStarts && nextAvailableStart) {
      return `Kampanj pågår. Anmäl dig till start ${nextAvailableStart.date}!`;
    } else if (firstBookedStart) {
      return 'Alla starter är stängda. Kontakta oss för mer info.';
    } else {
      return 'Kampanj avslutad. Anmälan stängd.';
    }
  };

  return (
    <div className="sticky top-0 z-[60] bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span className="font-bold text-sm md:text-base text-center">
            {getMainText()}
          </span>
        </div>
        <div className="font-bold text-sm md:text-base">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
        <div className="text-xs md:text-sm bg-white/20 px-3 py-1 rounded-full">
          {timerText}
        </div>
      </div>
    </div>
  );
};
