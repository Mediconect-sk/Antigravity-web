'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // Všetky výzvy na kontakt vedú na jediný vstup: /konzultacia
  useEffect(() => {
    const goToKonzultacia = () => router.push('/konzultacia');
    window.addEventListener('open_contact_modal', goToKonzultacia);
    return () => window.removeEventListener('open_contact_modal', goToKonzultacia);
  }, [router]);

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
