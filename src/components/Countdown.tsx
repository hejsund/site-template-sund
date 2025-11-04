import { useState, useEffect } from 'react';
import { getTimeUntilClose } from '@/utils/launchPhases';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilClose());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilClose());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="flex justify-center gap-4 my-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 min-w-[80px] text-center shadow-lg">
        <div className="text-3xl md:text-4xl font-black text-green-800">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-green-600 font-medium mt-1">
          timmar
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-3xl md:text-4xl font-black text-green-800">:</span>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 min-w-[80px] text-center shadow-lg">
        <div className="text-3xl md:text-4xl font-black text-green-800">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-green-600 font-medium mt-1">
          minuter
        </div>
      </div>

      <div className="flex items-center">
        <span className="text-3xl md:text-4xl font-black text-green-800">:</span>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 min-w-[80px] text-center shadow-lg">
        <div className="text-3xl md:text-4xl font-black text-green-800">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-green-600 font-medium mt-1">
          sekunder
        </div>
      </div>
    </div>
  );
};
