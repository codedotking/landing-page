'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Features from '@/components/Features';
import Investing from '@/components/Investing';
import Security from '@/components/Security';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Features />
        <Investing />
        <Security />
        <Stats />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
