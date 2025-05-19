
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Hero } from '@/components/homepage/Hero';
import { Features } from '@/components/homepage/Features';
import { InsuranceProducts } from '@/components/homepage/InsuranceProducts';
import { AIAdvisor } from '@/components/homepage/AIAdvisor';
import { Testimonials } from '@/components/homepage/Testimonials';
import { FAQs } from '@/components/homepage/FAQs';
import { CTASection } from '@/components/homepage/CTASection';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <InsuranceProducts />
      <AIAdvisor />
      <Testimonials />
      <FAQs />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
