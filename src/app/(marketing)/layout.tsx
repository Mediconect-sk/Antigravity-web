'use client';

import React, { useState, useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import dynamic from 'next/dynamic';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
    ssr: false,
});

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setModalOpen(true);
    window.addEventListener('open_contact_modal', handleOpenModal);
    return () => window.removeEventListener('open_contact_modal', handleOpenModal);
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="flex-grow">
        {children}
      </main>
      <SiteFooter />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
