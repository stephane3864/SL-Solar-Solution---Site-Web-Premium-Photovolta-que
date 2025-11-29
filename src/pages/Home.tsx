import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SolutionsGrid from '../components/SolutionsGrid';
import PremiumSection from '../components/PremiumSection';
import ApproachSection from '../components/ApproachSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SolutionsGrid />
        <PremiumSection />
        <ApproachSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}