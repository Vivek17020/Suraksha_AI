
import React from 'react';
import { 
  Brain, 
  FileText, 
  FileCheck, 
  MessageSquareText, 
  Clock, 
  Heart 
} from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-suraksha-600" />,
      title: "AI-Powered Advisor",
      description: "Talk to our AI in everyday language. No jargon, just straight answers about what you need and why."
    },
    {
      icon: <FileText className="h-10 w-10 text-suraksha-600" />,
      title: "Policy Simplifier",
      description: "We explain insurance policies in plain language so you know exactly what you're paying for."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-suraksha-600" />,
      title: "Smart Recommendations",
      description: "Get personalized insurance recommendations based on your life stage, budget, and protection needs."
    },
    {
      icon: <MessageSquareText className="h-10 w-10 text-suraksha-600" />,
      title: "24/7 Assistance",
      description: "Our AI assistant is available round the clock to answer questions and guide you through claims."
    },
    {
      icon: <Clock className="h-10 w-10 text-suraksha-600" />,
      title: "Quick Claims",
      description: "Submit and track claims with minimal paperwork. Get updates in real-time about your claim status."
    },
    {
      icon: <Heart className="h-10 w-10 text-suraksha-600" />,
      title: "Family Protection",
      description: "Coverage that grows with your family. Add members, adjust benefits, and manage everything in one place."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Suraksha AI?</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We've reimagined insurance with AI at the core, making it more accessible, understandable, and valuable for every Indian family.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 transition-all hover:shadow-md">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-suraksha-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
