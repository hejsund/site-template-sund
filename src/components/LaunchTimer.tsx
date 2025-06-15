
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

  const { timerText, hasAvailableStarts } = useDynamicText(testMode, testDate);

  useEffect(() => {
    // Set target date to June 22, 2025 at 23:59 Swedish time (CEST)
    // Convert to UTC by subtracting 2 hours (CEST is UTC+2 in summer)
    const targetDate = new Date('2025-06-22T21:59:00Z').getTime(); // 23:59 CEST = 21:59 UTC
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Check if current date is after June 22, 2025 23:59 Swedish time
  const currentDate = new Date();
  const cutoffDate = new Date('2025-06-22T21:59:00Z'); // 23:59 CEST = 21:59 UTC
  const showExpiredContent = currentDate >= cutoffDate;

  if (showExpiredContent && !testMode) return null;

  return (
    <div className="sticky top-0 z-[60] bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          <span className="font-bold text-sm md:text-base text-center">
            Kampanj pågår. Anmälan har öppnat!
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
