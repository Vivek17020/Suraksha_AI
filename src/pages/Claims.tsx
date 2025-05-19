
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, FileText, CheckCircle2, Clock, HelpCircle, Upload } from "lucide-react";
import { Link } from 'react-router-dom';

const Claims = () => {
  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Claims Center
            </h1>
            <p className="text-lg text-muted-foreground">
              Track, file, and manage your insurance claims easily
            </p>
          </div>
          
          <Tabs defaultValue="file-claim" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
              <TabsTrigger value="file-claim">File a Claim</TabsTrigger>
              <TabsTrigger value="track-claim">Track Claims</TabsTrigger>
              <TabsTrigger value="help">Help & Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="file-claim" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Start a New Claim</CardTitle>
                  <CardDescription>
                    Choose the type of insurance claim you want to file
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="overflow-hidden cursor-pointer hover:border-suraksha-500 transition-colors">
                      <CardHeader className="bg-rose-50 pb-6">
                        <CardTitle className="flex items-center gap-2">
                          Health Claim
                        </CardTitle>
                        <CardDescription>For medical treatments, hospitalization, etc.</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Cashless or reimbursement options</li>
                          <li>Average settlement time: 3-7 days</li>
                          <li>24/7 claim assistance available</li>
                        </ul>
                        <Button className="mt-4 bg-suraksha-600 hover:bg-suraksha-700 w-full">
                          Start Health Claim <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden cursor-pointer hover:border-suraksha-500 transition-colors">
                      <CardHeader className="bg-blue-50 pb-6">
                        <CardTitle className="flex items-center gap-2">
                          Motor Claim
                        </CardTitle>
                        <CardDescription>For vehicle damage, accidents, theft, etc.</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Cashless repairs at network garages</li>
                          <li>Spot inspection within 24 hours</li>
                          <li>Towing assistance available</li>
                        </ul>
                        <Button className="mt-4 bg-suraksha-600 hover:bg-suraksha-700 w-full">
                          Start Motor Claim <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="overflow-hidden cursor-pointer hover:border-suraksha-500 transition-colors">
                      <CardHeader className="bg-emerald-50 pb-6">
                        <CardTitle className="flex items-center gap-2">
                          Life Insurance Claim
                        </CardTitle>
                        <CardDescription>For death benefit, maturity, etc.</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Simplified documentation process</li>
                          <li>Dedicated claim representative</li>
                          <li>Fast-track processing available</li>
                        </ul>
                        <Button className="mt-4 bg-suraksha-600 hover:bg-suraksha-700 w-full">
                          Start Life Claim <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="overflow-hidden cursor-pointer hover:border-suraksha-500 transition-colors">
                      <CardHeader className="bg-amber-50 pb-6">
                        <CardTitle className="flex items-center gap-2">
                          Home Insurance Claim
                        </CardTitle>
                        <CardDescription>For property damage, theft, etc.</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="list-disc list-inside space-y-2 text-sm">
                          <li>Emergency assistance available</li>
                          <li>Home inspection within 48 hours</li>
                          <li>Temporary accommodation support</li>
                        </ul>
                        <Button className="mt-4 bg-suraksha-600 hover:bg-suraksha-700 w-full">
                          Start Home Claim <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="track-claim" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Recent Claims</CardTitle>
                  <CardDescription>
                    Track the status of your submitted claims
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 p-4 border rounded-lg">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Claim #HD20232405</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Health Insurance - Hospitalization</p>
                        <p className="text-sm text-muted-foreground">Filed on: 15 May 2023</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="font-medium text-green-600">Approved</span>
                        </div>
                        <p className="text-sm">Amount: ₹1,25,000</p>
                      </div>
                      <Button variant="outline">View Details</Button>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 p-4 border rounded-lg">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">Claim #MT20231809</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Motor Insurance - Accident Repair</p>
                        <p className="text-sm text-muted-foreground">Filed on: 28 Apr 2023</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-amber-500" />
                          <span className="font-medium text-amber-600">In Progress</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Processing</span>
                            <span>60%</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                      </div>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="help" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Claim Resources & Support</CardTitle>
                  <CardDescription>
                    Get help with your claims process
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-suraksha-500" />
                          Claim FAQs
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            <Link to="#" className="text-suraksha-600 hover:underline">
                              How long does claim processing take?
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-suraksha-600 hover:underline">
                              What documents are required for a health claim?
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-suraksha-600 hover:underline">
                              How to use the cashless facility?
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-suraksha-600 hover:underline">
                              What to do if my claim is rejected?
                            </Link>
                          </li>
                        </ul>
                        <Button variant="link" className="p-0 h-auto mt-4 text-suraksha-600">
                          View all FAQs
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Upload className="h-5 w-5 text-suraksha-500" />
                          Document Formats
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li>
                            <Link to="#" className="text-suraksha-600 hover:underline">
                              Health Claim Form
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-suraksha-600 hover:underline">
                              Motor Claim Form
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-suraksha-600 hover:underline">
                              Life Insurance Claim Form
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="text-suraksha-600 hover:underline">
                              Discharge Summary Format
                            </Link>
                          </li>
                        </ul>
                        <Button variant="link" className="p-0 h-auto mt-4 text-suraksha-600">
                          Download all forms
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Need Assistance?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                          <div className="h-12 w-12 rounded-full bg-suraksha-100 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-suraksha-600">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                          </div>
                          <h3 className="font-medium">Call Us</h3>
                          <p className="text-sm text-muted-foreground mt-1">24/7 Helpline</p>
                          <p className="font-medium text-suraksha-600 mt-2">1800-123-4567</p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                          <div className="h-12 w-12 rounded-full bg-suraksha-100 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-suraksha-600">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                          </div>
                          <h3 className="font-medium">Email Us</h3>
                          <p className="text-sm text-muted-foreground mt-1">24 hr response time</p>
                          <p className="font-medium text-suraksha-600 mt-2">claims@surakshaai.com</p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                          <div className="h-12 w-12 rounded-full bg-suraksha-100 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-suraksha-600">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                          </div>
                          <h3 className="font-medium">Chat Support</h3>
                          <p className="text-sm text-muted-foreground mt-1">Live assistance</p>
                          <Button className="mt-2 bg-suraksha-600 hover:bg-suraksha-700">Start Chat</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Claims;
