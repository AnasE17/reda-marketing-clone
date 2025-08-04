import React from 'react';
import Head from 'next/head';
import { HeroSection } from '@/components/ui/hero-section-1';
import { Testimonials } from '@/components/ui/testimonials-columns-1';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import TrustBadges from '@/components/TrustBadges';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Attorney Marketing | Reda Marketing</title>
        <meta name="description" content="Transform your law practice with Reda Marketing's specialized attorney marketing services. Get more cases, higher case values, and dominate your local market." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <HeroSection />
      <TrustBadges />
      <Stats />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
} 