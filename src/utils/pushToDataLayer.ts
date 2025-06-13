
// DataLayer utility for GTM tracking
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function pushToDataLayer(eventName: string, data: Record<string, any> = {}) {
  if (!eventName) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...data,
  });
  console.log("Data Layer Push:", { event: eventName, ...data });
}

// SHA-256 hashing function for email addresses
export async function sha256(email: string): Promise<string> {
  const data = new TextEncoder().encode(email.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Email submission tracking with hashing
export const handleEmailSubmit = async (email: string) => {
  const emailHash = await sha256(email);
  pushToDataLayer("submitEmail", { email_hash: emailHash });
};
