// Launch phases for Julkalender 2025
// Före 12/11: Endast email signup
// 12/11 - 26/11: Köpknapp + email signup
// 27/11+: Stängt

export type LaunchPhase = 'pre-launch' | 'open' | 'last-24h' | 'closed';

export interface LaunchState {
  phase: LaunchPhase;
  showEmailSignup: boolean;
  showBuyButton: boolean;
  showCountdown: boolean;
  heroHeading: string;
  heroSubheading: string;
  ctaText: string;
}

// Test mode - använd localStorage för att override datum i dev-miljö
export const getTestDate = (): Date | null => {
  if (import.meta.env.DEV) {
    const testDateStr = localStorage.getItem('test_launch_date');
    if (testDateStr) {
      return new Date(testDateStr);
    }
  }
  return null;
};

export const getCurrentDate = (): Date => {
  const testDate = getTestDate();
  return testDate || new Date();
};

export const getLaunchPhase = (): LaunchPhase => {
  const now = getCurrentDate();

  // 12 november 2024 00:00
  const launchDate = new Date('2024-11-12T00:00:00');

  // 26 november 2024 00:00 (sista dygnet börjar)
  const last24hDate = new Date('2024-11-26T00:00:00');

  // 27 november 2024 00:00 (stänger)
  const closeDate = new Date('2024-11-27T00:00:00');

  if (now < launchDate) {
    return 'pre-launch';
  } else if (now >= launchDate && now < last24hDate) {
    return 'open';
  } else if (now >= last24hDate && now < closeDate) {
    return 'last-24h';
  } else {
    return 'closed';
  }
};

export const getLaunchState = (): LaunchState => {
  const phase = getLaunchPhase();

  const states: Record<LaunchPhase, LaunchState> = {
    'pre-launch': {
      phase: 'pre-launch',
      showEmailSignup: true,
      showBuyButton: false,
      showCountdown: false,
      heroHeading: 'Julkalender 2025',
      heroSubheading: '🌿 24 aktiveringar för en mjuk december',
      ctaText: 'Anmäl intresse ✨'
    },
    'open': {
      phase: 'open',
      showEmailSignup: true,
      showBuyButton: true,
      showCountdown: false,
      heroHeading: 'Julkalender 2025',
      heroSubheading: '🌿 24 aktiveringar för en mjuk december',
      ctaText: 'Anmäl intresse ✨'
    },
    'last-24h': {
      phase: 'last-24h',
      showEmailSignup: false,
      showBuyButton: true,
      showCountdown: true,
      heroHeading: 'Sista chansen! ⏰',
      heroSubheading: 'Vi stänger anmälan om:',
      ctaText: 'Köp kalendern nu – 249 kr'
    },
    'closed': {
      phase: 'closed',
      showEmailSignup: false,
      showBuyButton: false,
      showCountdown: false,
      heroHeading: 'Anmälan är stängd',
      heroSubheading: 'Vi ses igen nästa år! 🌙',
      ctaText: ''
    }
  };

  return states[phase];
};

// Countdown timer för sista dygnet
export const getTimeUntilClose = (): { hours: number; minutes: number; seconds: number } | null => {
  const now = getCurrentDate();
  const closeDate = new Date('2024-11-27T00:00:00');

  const diff = closeDate.getTime() - now.getTime();

  if (diff <= 0) {
    return null;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};
