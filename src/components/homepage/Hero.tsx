
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-36">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Insurance Made Simple with <span className="text-suraksha-600">AI</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Suraksha AI understands your needs, explains your options in simple language, and guides you to the right coverage at the best price.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-suraksha-600 hover:bg-suraksha-700">
                <Link to="/ai-advisor">
                  Talk to AI Advisor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/products">
                  Browse Products
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-suraksha-600" />
                <span className="text-gray-500 dark:text-gray-400">IRDAI Approved</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-suraksha-600" />
                <span className="text-gray-500 dark:text-gray-400">100% Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-suraksha-600" />
                <span className="text-gray-500 dark:text-gray-400">24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-suraksha-50 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-suraksha-100 to-suraksha-50 opacity-80"></div>
              <div className="relative z-10 flex h-full flex-col justify-center rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-suraksha-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">Suraksha AI</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-8 w-8 shrink-0 rounded-full bg-suraksha-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-suraksha-600">AI</span>
                    </div>
                    <div className="rounded-lg bg-suraksha-50 p-3">
                      <p className="text-sm text-gray-600">How can I help protect your family today?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="rounded-lg bg-gray-100 p-3">
                      <p className="text-sm text-gray-600">I need health insurance for my family of 4</p>
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
                      <p className="text-sm text-gray-600">Great! I'll help you find the perfect health coverage. Let me ask you a few questions to understand your family's needs better...</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex">
                  <div className="relative flex-1">
                    <input
                      className="w-full rounded-md border border-gray-200 bg-white py-2 pl-3 pr-10 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-suraksha-500"
                      placeholder="Type a message..."
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
