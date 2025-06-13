
import React from 'react';
import { Timer } from 'lucide-react';

interface HemligTimerProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  showExpiredContent: boolean;
  totalRemainingHours: number;
}

export const HemligTimer: React.FC<HemligTimerProps> = ({ 
  timeLeft, 
  showExpiredContent, 
  totalRemainingHours 
}) => {
  if (showExpiredContent) return null;

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="flex items-center gap-2">
          <Timer className="w-5 h-5" />
          <span className="font-bold text-sm md:text-base text-center">
            Erbjudandet löper ut om:
          </span>
        </div>
        <div className="font-bold text-sm md:text-base">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
        <div className="text-xs md:text-sm bg-white/20 px-3 py-1 rounded-full">
          50% RABATT – Endast {totalRemainingHours}h kvar!
        </div>
      </div>
    </div>
  );
};
