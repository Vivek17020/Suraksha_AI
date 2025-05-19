
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, FileText, ArrowRight, Download } from "lucide-react";

const Resources = () => {
  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Resources & Learning
            </h1>
            <p className="text-lg text-muted-foreground">
              Educational resources, tools, and guides to help you make informed insurance decisions
            </p>
          </div>
          
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Guides</span>
              </TabsTrigger>
              <TabsTrigger value="calculators" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>Calculators</span>
              </TabsTrigger>
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Articles</span>
              </TabsTrigger>
              <TabsTrigger value="downloads" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>Downloads</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Insurance 101</CardTitle>
                    <CardDescription>
                      A beginner's guide to understanding insurance basics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Learn the essential concepts of insurance, from premiums and deductibles to claims and coverage options. This guide is perfect for first-time insurance buyers and those looking to refresh their knowledge.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center text-xs font-medium">H</div>
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium">L</div>
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-medium">M</div>
                      </div>
                      <span className="text-xs text-muted-foreground">Covers Health, Life, Motor</span>
                      <span className="text-xs text-muted-foreground ml-auto">5 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/resources/guides/insurance-101">
                        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Health Insurance Guide</CardTitle>
                    <CardDescription>
                      How to choose the right health coverage for your family
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Navigate the complex world of health insurance with our comprehensive guide. Learn about coverage types, network hospitals, pre-existing conditions, waiting periods, and how to maximize your benefits.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-rose-50 text-rose-700 border-rose-200">
                        Health
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-amber-50 text-amber-700 border-amber-200">
                        Popular
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">8 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/resources/guides/health-insurance">
                        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Life Insurance Explained</CardTitle>
                    <CardDescription>
                      Securing your family's financial future
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Understand different types of life insurance policies, how to calculate adequate coverage, and when to purchase. Learn about term plans, ULIPs, endowment plans, and riders that can enhance your protection.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700 border-emerald-200">
                        Life
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">10 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/resources/guides/life-insurance">
                        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tax Benefits of Insurance</CardTitle>
                    <CardDescription>
                      Maximize your tax savings through insurance investments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Discover how different insurance policies can help you save tax under various sections of the Income Tax Act. Learn about eligible deductions, exemptions, and how to optimize your insurance portfolio for tax efficiency.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-50 text-purple-700 border-purple-200">
                        Tax
                      </span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 border-blue-200">
                        Finances
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">7 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/resources/guides/tax-benefits">
                        Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="calculators" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Insurance Premium Calculator</CardTitle>
                    <CardDescription>
                      Estimate your premiums based on your profile and needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get a quick estimate of how much you might pay for different types of insurance policies based on your age, location, and coverage preferences.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Supported Insurance</span>
                        <span className="text-sm">Health, Life, Motor</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Accuracy</span>
                        <span className="text-sm">~90% to actual quotes</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/resources/calculators/premium">
                        Use Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Health Insurance Coverage Calculator</CardTitle>
                    <CardDescription>
                      Find out how much health coverage your family needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Calculate the ideal health insurance coverage based on your family size, age, medical history, location, and local healthcare costs.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Considers</span>
                        <span className="text-sm">City, Age, Family Size</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Updated</span>
                        <span className="text-sm">May 2023 (latest costs)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/resources/calculators/health-coverage">
                        Use Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Life Insurance Calculator</CardTitle>
                    <CardDescription>
                      Determine how much life cover you need
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Calculate your ideal life insurance coverage based on income, liabilities, dependents, financial goals, and future expenses.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Method</span>
                        <span className="text-sm">Human Life Value</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Factors</span>
                        <span className="text-sm">Income, Debts, Goals</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/resources/calculators/life-coverage">
                        Use Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Tax Savings Calculator</CardTitle>
                    <CardDescription>
                      Calculate potential tax benefits from insurance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Estimate how much tax you can save by investing in different insurance products. See your potential savings under Section 80C, 80D, and other applicable tax provisions.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Tax Sections</span>
                        <span className="text-sm">80C, 80D, 10(10D)</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Updated For</span>
                        <span className="text-sm">FY 2023-24</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-suraksha-600 hover:bg-suraksha-700">
                      <Link to="/resources/calculators/tax-savings">
                        Use Calculator <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="articles" className="mt-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Articles</CardTitle>
                    <CardDescription>
                      Stay updated with the latest in insurance trends and advice
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="divide-y">
                      <div className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
                            <div className="h-full w-full bg-gray-200"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">Why IRDAI's New Guidelines Matter for Health Insurance Buyers</h3>
                            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                              The Insurance Regulatory and Development Authority of India (IRDAI) has introduced new guidelines that significantly impact how health insurance policies are structured and claimed.
                            </p>
                            <div className="mt-2 flex items-center text-xs text-muted-foreground">
                              <span>May 15, 2023</span>
                              <span className="mx-2">•</span>
                              <span>5 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
                            <div className="h-full w-full bg-gray-200"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">5 Common Mistakes to Avoid When Buying Life Insurance</h3>
                            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                              Many people end up with inadequate or expensive life insurance due to these common pitfalls. Learn how to make smarter choices for your family's protection.
                            </p>
                            <div className="mt-2 flex items-center text-xs text-muted-foreground">
                              <span>April 28, 2023</span>
                              <span className="mx-2">•</span>
                              <span>7 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="py-4 first:pt-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
                            <div className="h-full w-full bg-gray-200"></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">How AI is Transforming the Insurance Industry in India</h3>
                            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                              Artificial intelligence is revolutionizing how insurance is bought, processed, and claimed in India, creating a more seamless experience for consumers.
                            </p>
                            <div className="mt-2 flex items-center text-xs text-muted-foreground">
                              <span>April 12, 2023</span>
                              <span className="mx-2">•</span>
                              <span>6 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/resources/articles">
                        View All Articles
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="downloads" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Downloadable Resources</CardTitle>
                  <CardDescription>
                    Free guides, checklists, and forms to help manage your insurance needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center p-4 border rounded-lg">
                    <FileText className="h-10 w-10 text-suraksha-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium">Insurance Comparison Worksheet</h3>
                      <p className="text-sm text-muted-foreground">
                        Compare different policies side-by-side
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> PDF
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg">
                    <FileText className="h-10 w-10 text-suraksha-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium">Hospital Network Directory</h3>
                      <p className="text-sm text-muted-foreground">
                        List of all cashless network hospitals
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> PDF
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg">
                    <FileText className="h-10 w-10 text-suraksha-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium">Claim Process Checklist</h3>
                      <p className="text-sm text-muted-foreground">
                        Step-by-step checklist for filing claims
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> PDF
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg">
                    <FileText className="h-10 w-10 text-suraksha-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium">Insurance Terms Glossary</h3>
                      <p className="text-sm text-muted-foreground">
                        Definitions of common insurance terms
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> PDF
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg">
                    <FileText className="h-10 w-10 text-suraksha-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium">Insurance Policy Tracker</h3>
                      <p className="text-sm text-muted-foreground">
                        Excel sheet to track all your policies
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> XLSX
                    </Button>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg">
                    <FileText className="h-10 w-10 text-suraksha-600 mr-4" />
                    <div className="flex-1">
                      <h3 className="font-medium">Tax Benefits Guide</h3>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive guide to insurance tax benefits
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Resources;
