
// Privacy utility functions with obfuscated names to hide implementation details

const p = (): string | null => new URLSearchParams(window.location.search).get('utm_source');
const x = (): boolean => Boolean(new URLSearchParams(window.location.search).get('fbp'));
const y = (): boolean => Boolean(new URLSearchParams(window.location.search).get('fbc'));

// Check for Facebook Click ID parameter
const z = (): boolean => Boolean(new URLSearchParams(window.location.search).get('fbclid'));

// Intentionally obfuscated function names to hide purpose
// This function checks if the banner should be hidden for Facebook traffic or when Facebook parameters are present
export const shouldHideBanner = (): boolean => {
  const isFacebookSource = p()?.toLowerCase() === 'facebook';
  const hasFacebookParams = x() || y() || z();
  
  // Hide banner for Facebook traffic or any Facebook tracking parameters
  return isFacebookSource || hasFacebookParams;
};
