export function trackEvent(name: string, params: Record<string, any> = {}) {
  // GTM/GA
  if (typeof window !== 'undefined') {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: name,
      ...params
    });

    // GA4 (se instalado direto)
    if ((window as any).gtag) {
      (window as any).gtag('event', name, params);
    }

    // Meta Pixel (eventos básicos)
    if ((window as any).fbq) {
      if (name === 'sign_up_click') {
        (window as any).fbq('track', 'Lead', params);
      }
      if (name === 'sign_up_start') {
        (window as any).fbq('track', 'InitiateCheckout', params);
      }
    }
  }
}
