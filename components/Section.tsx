'use client';

import clsx from 'clsx';
import React from 'react';

type Props = {
  id?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, ariaLabel, className, children }: Props) {
  return (
    <section id={id} aria-label={ariaLabel}>
      <div className={clsx('container mx-auto max-w-6xl px-6 py-16', className)}>
        {children}
      </div>
    </section>
  );
}
