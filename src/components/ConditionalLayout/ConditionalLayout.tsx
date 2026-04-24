'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header/Header';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import FloatingActionButton from '@/components/FloatingActionButton/FloatingActionButton';
import Footer from '@/components/Footer/Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <FloatingActionButton />
    </>
  );
}
