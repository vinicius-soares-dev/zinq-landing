'use client';

import React from 'react';
import clsx from 'clsx';

function track(event: string, params?: Record<string, any>) {
  try {
    if (typeof window !== 'undefined') {
      // GA4
      // @ts-ignore
      if (window.gtag) window.gtag('event', event, params || {});
      // Meta Pixel
      // @ts-ignore
      if (window.fbq) window.fbq('trackCustom', event, params || {});
      // console para debug
      // eslint-disable-next-line no-console
      console.log('[track]', event, params || {});
    }
  } catch {
    /* noop */
  }
}

type Props = {
  label: string;
  className?: string;
  onClickEvent?: string;
  href?: string;
};

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://zinq.me';

export default function CTAButton({
  label,
  className,
  onClickEvent = 'sign_up_click',
  href,
}: Props) {
  const targetHref =
    href || `${appUrl}/register?source=landing_primary`;

  const handleClick = () => {
    track(onClickEvent, { source: 'landing', label });
  };

  return (
    <a
      href={targetHref}
      onClick={handleClick}
      className={clsx(
        'inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3 font-semibold text-white shadow-xl-soft transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange',
        className
      )}
      aria-label={label}
    >
      {label}
    </a>
  );
}
