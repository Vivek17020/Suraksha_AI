
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AIAdvisor = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-suraksha-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your AI Insurance Advisor</h2>
            <p className="text-lg text-suraksha-50 md:text-xl">
              Most Indians delay buying insurance because it's confusing and overwhelming. Our AI advisor changes that by speaking your language, understanding your needs, and explaining things clearly.
            </p>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-suraksha-200">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">No Insurance Jargon</h3>
                  <p className="text-suraksha-100">Clear explanations in everyday language about what you're covered for.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-suraksha-200">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Personalized Guidance</h3>
                  <p className="text-suraksha-100">Recommendations customized to your family situation and budget.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-suraksha-200">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24/7 Availability</h3>
                  <p className="text-suraksha-100">Ask questions and get help any time, day or night.</p>
                </div>
              </div>
            </div>
            <Button asChild className="mt-6 bg-white text-suraksha-700 hover:bg-suraksha-50">
              <Link to="/ai-advisor">
                Talk to AI Advisor <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg max-w-md">
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-suraksha-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-suraksha-600">AI</span>
                    </div>
                    <div className="rounded-lg bg-suraksha-50 p-3">
                      <p className="text-sm text-gray-600">Namaste! I'm your AI insurance advisor. How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="rounded-lg bg-gray-100 p-3">
                      <p className="text-sm text-gray-600">I'm confused about health insurance. My family needs coverage but there are so many options.</p>
                    </div>
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">U</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-suraksha-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-suraksha-600">AI</span>
                    </div>
                    <div className="rounded-lg bg-suraksha-50 p-3">
                      <p className="text-sm text-gray-600">I understand. Health insurance can be overwhelming. Let me help simplify this for you.</p>
                      <p className="mt-2 text-sm text-gray-600">First, let me ask: How many family members need coverage, and what are their ages?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="rounded-lg bg-gray-100 p-3">
                      <p className="text-sm text-gray-600">Me (35), my wife (32), and two kids (7 and 3).</p>
                    </div>
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">U</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-suraksha-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-suraksha-600">AI</span>
                    </div>
                    <div className="rounded-lg bg-suraksha-50 p-3 space-y-2">
                      <p className="text-sm text-gray-600">Thanks! For a family of 4 with young children, I'd recommend a Family Floater policy with at least ₹10-15 lakhs coverage.</p>
                      <p className="text-sm text-gray-600">This type of policy shares the coverage amount among all family members, which is cost-effective for younger families.</p>
                      <p className="text-sm text-gray-600">Would you like me to explain what a Family Floater policy covers and doesn't cover?</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex">
                  <div className="relative flex-1">
                    <input
                      className="w-full rounded-md border border-gray-200 bg-white py-2 pl-3 pr-10 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-suraksha-500"
                      placeholder="Yes, please explain..."
                    />
                    <Button size="sm" className="absolute inset-y-0 right-0 my-auto mr-0.5 h-7 w-7 rounded-md bg-suraksha-600 p-0 hover:bg-suraksha-700">
                      <ArrowRight className="h-3 w-3 text-white" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
