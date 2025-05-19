
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-suraksha-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Secure Your Family's Future?</h2>
            <p className="max-w-[600px] text-suraksha-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Start a conversation with our AI advisor today and discover the right insurance coverage for your needs.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="bg-white text-suraksha-700 hover:bg-suraksha-50">
              <Link to="/ai-advisor">
                Talk to AI Advisor <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-suraksha-700">
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
