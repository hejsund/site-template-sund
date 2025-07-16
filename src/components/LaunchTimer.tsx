
import React, { useState, useEffect } from 'react';
import { Timer, Calendar } from 'lucide-react';
import { useDynamicText } from '@/hooks/useDynamicText';

interface LaunchTimerProps {
  testMode?: boolean;
  testDate?: Date;
}

// Predefined Sunday deadlines at 23:59 CEST (21:59 UTC)
const SUNDAY_DEADLINES = [
  new Date('2025-06-29T21:59:00Z'), // June 29th, 2025 at 23:59 CEST
  new Date('2025-07-06T21:59:00Z'), // July 6th, 2025 at 23:59 CEST
  new Date('2025-07-13T21:59:00Z'), // July 13th, 2025 at 23:59 CEST
  new Date('2025-07-20T21:59:00Z'), // July 20th, 2025 at 23:59 CEST
  new Date('2025-07-27T21:59:00Z'), // July 27th, 2025 at 23:59 CEST - NEW DEADLINE
];

export const LaunchTimer = ({ testMode = false, testDate }: LaunchTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [currentDeadlineIndex, setCurrentDeadlineIndex] = useState<number | null>(null);

  const { timerText, hasAvailableStarts, statusText, nextAvailableStart, firstBookedStart, mainText } = useDynamicText(testMode, testDate);

  useEffect(() => {
    const updateTimer = () => {
      const currentDate = testMode && testDate ? testDate : new Date();
      
      // Check if we should hide the component completely after July 18th (extended from July 15th)
      const hideAfterDate = new Date('2025-07-18T23:59:59Z');
      if (currentDate >= hideAfterDate) {
        return; // Component will be hidden
      }

      // Find the next upcoming Sunday deadline
      const nextDeadlineIndex = SUNDAY_DEADLINES.findIndex(deadline => currentDate < deadline);
      
      if (nextDeadlineIndex === -1) {
        // All deadlines have passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        setCurrentDeadlineIndex(null);
        return;
      }

      // Update current deadline index if it has changed
      if (currentDeadlineIndex !== nextDeadlineIndex) {
        setCurrentDeadlineIndex(nextDeadlineIndex);
      }

      const targetDate = SUNDAY_DEADLINES[nextDeadlineIndex];
      const now = currentDate.getTime();
      const difference = targetDate.getTime() - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Current deadline has passed, this will trigger finding the next deadline on next update
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
  }, [testMode, testDate, currentDeadlineIndex]);

  // Check if we should hide the component completely after July 18th (extended from July 15th)
  const currentDate = testMode && testDate ? testDate : new Date();
  const hideAfterDate = new Date('2025-07-18T23:59:59Z');
  const shouldHideCompletely = currentDate >= hideAfterDate;

  // Hide the timer component completely after July 18th
  if (shouldHideCompletely && !testMode) return null;

  return (
    <div className="sticky top-0 z-[45] bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 shadow-lg">
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
