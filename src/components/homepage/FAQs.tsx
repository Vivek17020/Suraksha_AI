
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQs = () => {
  const faqs = [
    {
      question: "How does AI make insurance better?",
      answer: "Our AI understands your unique situation and explains insurance in simple language. It helps you navigate complex policies, recommends the right coverage based on your needs, and makes the entire process quick and easy - whether buying a policy or filing a claim."
    },
    {
      question: "Is my personal data safe with the AI?",
      answer: "Absolutely. Your data is encrypted and secured with the latest technology. We never share your personal information with third parties without your consent, and our AI is designed to prioritize your privacy at every step."
    },
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our AI recommends insurance based on your specific needs, family situation, and budget. It's trained on thousands of insurance policies and regulations, and is constantly updated with the latest products and pricing. However, you always have the final say in which policy you choose."
    },
    {
      question: "Can I still talk to a human agent if I need to?",
      answer: "Yes, absolutely. While our AI can handle most queries, we have human insurance experts available to assist with complex situations or if you simply prefer to speak with a person. You can request human assistance anytime during your conversation with our AI."
    },
    {
      question: "How quickly can I get insured?",
      answer: "For many standard policies, you can complete the entire process within minutes - from getting recommendations to purchasing coverage. Our AI streamlines the application process, and we've digitized documentation to minimize waiting times."
    },
    {
      question: "What makes Suraksha AI different from other insurance websites?",
      answer: "Traditional insurance websites overwhelm you with options or push specific products. Suraksha AI understands your unique situation first, then guides you to the right coverage based on your needs. We explain complex terms clearly and stay with you throughout your journey - not just at purchase but whenever you need help."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Common questions about our AI-powered insurance platform.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
