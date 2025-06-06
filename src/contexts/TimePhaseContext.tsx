
import React, { createContext, useContext, ReactNode } from 'react';

export type TimePhase = 
  | 'collect-email' 
  | 'registration-open' 
  | 'registration-closed' 
  | 'collect-interest' 
  | 'opening-soon' 
  | 'watch-out';

interface TimePhaseData {
  phase: TimePhase;
  year: number;
  title: string;
  description: string;
  ctaText: string;
  seasonText: string;
  isActive: boolean;
}

interface TimePhaseContextType {
  currentPhase: TimePhaseData;
  getPhaseForDate: (date: Date) => TimePhaseData;
}

const TimePhaseContext = createContext<TimePhaseContextType | undefined>(undefined);

export const useTimePhase = () => {
  const context = useContext(TimePhaseContext);
  if (!context) {
    throw new Error('useTimePhase must be used within a TimePhaseProvider');
  }
  return context;
};

export const TimePhaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getPhaseForDate = (date: Date): TimePhaseData => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 0-based to 1-based
    
    // Define season based on month
    const getSeason = (month: number) => {
      if (month >= 3 && month <= 5) return 'våren'; // Spring
      if (month >= 6 && month <= 8) return 'sommaren'; // Summer
      if (month >= 9 && month <= 11) return 'hösten'; // Fall
      return 'vintern'; // Winter
    };

    const season = getSeason(month);
    
    if (month === 7) {
      return {
        phase: 'registration-open',
        year,
        title: `Sommarboosten ${year}`,
        description: 'Anmälan pågår nu!',
        ctaText: 'Anmäl dig nu',
        seasonText: season,
        isActive: true
      };
    }
    
    if (month === 8) {
      return {
        phase: 'registration-closed',
        year,
        title: `Sommarboosten ${year}`,
        description: 'Anmälan är stängd - programmet pågår',
        ctaText: 'Se nästa års program',
        seasonText: season,
        isActive: false
      };
    }
    
    if (month >= 9) {
      return {
        phase: 'collect-interest',
        year: year + 1,
        title: `Sommarboosten ${year + 1}`,
        description: `Anmäl ditt intresse för ${year + 1}`,
        ctaText: 'Anmäl intresse',
        seasonText: season,
        isActive: false
      };
    }
    
    if (month >= 5 && month < 7) {
      if (month === 5) {
        return {
          phase: 'watch-out',
          year,
          title: `Sommarboosten ${year}`,
          description: 'Håll utkik - anmälan öppnar snart!',
          ctaText: 'Påminn mig',
          seasonText: season,
          isActive: false
        };
      } else {
        return {
          phase: 'opening-soon',
          year,
          title: `Sommarboosten ${year}`,
          description: 'Anmälan öppnar snart!',
          ctaText: 'Påminn mig',
          seasonText: season,
          isActive: false
        };
      }
    }
    
    return {
      phase: 'collect-email',
      year,
      title: `Sommarboosten ${year}`,
      description: `Gör denna ${season} till din bästa någonsin!`,
      ctaText: 'Säkra din plats',
      seasonText: season,
      isActive: false
    };
  };

  const currentPhase = getPhaseForDate(new Date());

  return (
    <TimePhaseContext.Provider value={{ currentPhase, getPhaseForDate }}>
      {children}
    </TimePhaseContext.Provider>
  );
};
