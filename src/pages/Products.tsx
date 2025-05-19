
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { InsuranceProducts } from '@/components/homepage/InsuranceProducts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Car, Home, Shield, Briefcase, Award } from "lucide-react";

const Products = () => {
  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Insurance Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of insurance plans designed for Indian households
            </p>
          </div>
          
          <Tabs defaultValue="health" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="health" className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-rose-500" />
                <span>Health</span>
              </TabsTrigger>
              <TabsTrigger value="life" className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-500" />
                <span>Life</span>
              </TabsTrigger>
              <TabsTrigger value="motor" className="flex items-center gap-2">
                <Car className="h-4 w-4 text-blue-500" />
                <span>Motor</span>
              </TabsTrigger>
              <TabsTrigger value="home" className="flex items-center gap-2">
                <Home className="h-4 w-4 text-amber-500" />
                <span>Home</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="health" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="bg-rose-50 pb-6">
                    <Badge className="w-fit mb-2 bg-rose-200 text-rose-700 hover:bg-rose-300">Most Popular</Badge>
                    <CardTitle>SurakshaShield 360</CardTitle>
                    <CardDescription>Comprehensive health coverage for you and your family</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Coverage</span>
                        <span>₹10,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium</span>
                        <span>₹12,999/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">No Claim Bonus</span>
                        <span>Up to 50%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Waiting Period</span>
                        <span>30 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Network Hospitals</span>
                        <span>5,400+</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/ai-advisor">Get Personalized Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-rose-50 pb-6">
                    <Badge className="w-fit mb-2 bg-blue-200 text-blue-700 hover:bg-blue-300">Family Plan</Badge>
                    <CardTitle>SafetyFirst Family Plus</CardTitle>
                    <CardDescription>Affordable family floater plan with essential coverage</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Coverage</span>
                        <span>₹7,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium</span>
                        <span>₹8,499/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">No Claim Bonus</span>
                        <span>Up to 30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Waiting Period</span>
                        <span>60 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Network Hospitals</span>
                        <span>4,200+</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/ai-advisor">Get Personalized Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="life" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="bg-emerald-50 pb-6">
                    <Badge className="w-fit mb-2 bg-emerald-200 text-emerald-700 hover:bg-emerald-300">Term Plan</Badge>
                    <CardTitle>LifeGuard Premium Term</CardTitle>
                    <CardDescription>High coverage term insurance with affordable premiums</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Coverage</span>
                        <span>₹1,00,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium</span>
                        <span>₹9,999/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Term</span>
                        <span>30 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Tax Benefits</span>
                        <span>Under Section 80C</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/ai-advisor">Get Personalized Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-emerald-50 pb-6">
                    <Badge className="w-fit mb-2 bg-amber-200 text-amber-700 hover:bg-amber-300">Investment</Badge>
                    <CardTitle>WealthSecure ULIP</CardTitle>
                    <CardDescription>Life insurance with investment benefits</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Coverage</span>
                        <span>10x Annual Premium</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium</span>
                        <span>₹50,000/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Lock-in Period</span>
                        <span>5 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Fund Options</span>
                        <span>5 investment funds</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Tax Benefits</span>
                        <span>Under Section 80C & 10(10D)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/ai-advisor">Get Personalized Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="motor" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="bg-blue-50 pb-6">
                    <Badge className="w-fit mb-2 bg-blue-200 text-blue-700 hover:bg-blue-300">Comprehensive</Badge>
                    <CardTitle>RoadSecure Plus</CardTitle>
                    <CardDescription>Complete protection for your vehicle with add-on benefits</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Coverage Type</span>
                        <span>Comprehensive</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium</span>
                        <span>₹3,999/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">No Claim Bonus</span>
                        <span>Up to 50%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Roadside Assistance</span>
                        <span>Included</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Zero Depreciation</span>
                        <span>Available</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/ai-advisor">Get Personalized Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-blue-50 pb-6">
                    <Badge className="w-fit mb-2 bg-gray-200 text-gray-700 hover:bg-gray-300">Third Party</Badge>
                    <CardTitle>BasicDrive</CardTitle>
                    <CardDescription>Mandatory third-party liability coverage</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Coverage Type</span>
                        <span>Third Party Only</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium</span>
                        <span>₹1,299/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Personal Accident Cover</span>
                        <span>₹15,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Legal Liability</span>
                        <span>Unlimited for Third Party</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/ai-advisor">Get Personalized Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="home" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader className="bg-amber-50 pb-6">
                    <Badge className="w-fit mb-2 bg-amber-200 text-amber-700 hover:bg-amber-300">Comprehensive</Badge>
                    <CardTitle>HomeShield Complete</CardTitle>
                    <CardDescription>All-inclusive protection for your home and belongings</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Structure Coverage</span>
                        <span>Up to ₹50,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Contents Coverage</span>
                        <span>Up to ₹15,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium</span>
                        <span>₹4,999/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Protection Against</span>
                        <span>Fire, Natural Disasters, Theft</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/ai-advisor">Get Personalized Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="bg-amber-50 pb-6">
                    <Badge className="w-fit mb-2 bg-purple-200 text-purple-700 hover:bg-purple-300">Tenant Protection</Badge>
                    <CardTitle>RentalSecure</CardTitle>
                    <CardDescription>Insurance for tenants to protect belongings</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Contents Coverage</span>
                        <span>Up to ₹5,00,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Premium</span>
                        <span>₹1,499/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Protection Against</span>
                        <span>Theft, Fire, Water Damage</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Third Party Liability</span>
                        <span>Up to ₹1,00,000</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/ai-advisor">Get Personalized Quote</Link>
                    </Button>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
