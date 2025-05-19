
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "IT Professional, Bangalore",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
      quote: "I've always avoided insurance because the terms confused me. Suraksha AI explained everything in simple language and helped me pick the right health coverage for my family."
    },
    {
      name: "Priya Sharma",
      role: "Teacher, Delhi",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "As a single mother, I needed insurance but didn't know where to start. The AI advisor asked me meaningful questions and recommended affordable options that fit my budget."
    },
    {
      name: "Aditya Patel",
      role: "Small Business Owner, Ahmedabad",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Filing a claim used to be my biggest worry with insurance. When I needed to file a claim with Suraksha, their AI guided me step by step, and I got my settlement quickly."
    },
    {
      name: "Meera Reddy",
      role: "Doctor, Chennai",
      image: "https://randomuser.me/api/portraits/women/89.jpg",
      quote: "Even as a healthcare professional, insurance policies were confusing to me. Suraksha AI helped me understand my coverage options clearly and find the best fit for my family."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Real stories from Indians who found the right insurance with our AI-powered platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-yellow-400 fill-yellow-400"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
