
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

  const [currentTargetDate, setCurrentTargetDate] = useState<Date | null>(null);

  const { timerText, hasAvailableStarts, statusText, nextAvailableStart, firstBookedStart, mainText } = useDynamicText(testMode, testDate);

  useEffect(() => {
    const updateTimer = () => {
      const currentDate = testMode && testDate ? testDate : new Date();
      
      // Check if we should hide the component completely after July 15th
      const hideAfterDate = new Date('2025-07-15T23:59:59Z');
      if (currentDate >= hideAfterDate) {
        return; // Component will be hidden
      }

      let targetDate: number;

      // If we don't have a current target date, or the current target has passed, set a new one
      if (!currentTargetDate || currentDate >= currentTargetDate) {
        const sevenDaysFromNow = new Date(currentDate);
        sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
        sevenDaysFromNow.setHours(21, 59, 0, 0); // Set to 21:59 UTC (23:59 CEST)
        setCurrentTargetDate(sevenDaysFromNow);
        targetDate = sevenDaysFromNow.getTime();
      } else {
        targetDate = currentTargetDate.getTime();
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
        // Timer has hit zero - this will trigger a restart on next update
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        // Reset the target date so it gets recalculated
        setCurrentTargetDate(null);
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, [testMode, testDate, currentTargetDate, nextAvailableStart]);

  // Check if we should hide the component completely after July 15th
  const currentDate = testMode && testDate ? testDate : new Date();
  const hideAfterDate = new Date('2025-07-15T23:59:59Z');
  const shouldHideCompletely = currentDate >= hideAfterDate;

  // Hide the timer component completely after July 15th
  if (shouldHideCompletely && !testMode) return null;

  return (
    <div className="sticky top-0 z-[60] bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span className="font-bold text-sm md:text-base text-center">
            {mainText}
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
