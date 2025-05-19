
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Car, Home, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InsuranceProducts = () => {
  const products = [
    {
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family.",
      link: "/products/health",
      color: "bg-rose-50"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-500">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="8" r="2" />
      </svg>,
      title: "Life Insurance",
      description: "Financial security for your loved ones when they need it most.",
      link: "/products/life",
      color: "bg-emerald-50"
    },
    {
      icon: <Car className="h-6 w-6 text-blue-500" />,
      title: "Motor Insurance",
      description: "Protect your vehicle against damage and accidents.",
      link: "/products/motor",
      color: "bg-blue-50"
    },
    {
      icon: <Home className="h-6 w-6 text-amber-500" />,
      title: "Home Insurance",
      description: "Shield your home and belongings from unexpected events.",
      link: "/products/home",
      color: "bg-amber-50"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Insurance Products</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our range of insurance products designed for Indian families and their unique needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`p-4 ${product.color}`}>
                <div className="flex justify-between items-center">
                  {product.icon}
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                    <span className="sr-only">More</span>
                  </Button>
                </div>
                <CardTitle className="mt-3">{product.title}</CardTitle>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-gray-500">Starting at</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">₹499</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                  <Link to={product.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
