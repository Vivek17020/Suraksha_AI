
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdvisorResponse, RecommendedPlan } from '@/pages/AIAdvisor';
import { ArrowRight, Check, Shield, Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdvisorResultsProps {
  response: AdvisorResponse;
  onReset: () => void;
}

export const AdvisorResults = ({ response, onReset }: AdvisorResultsProps) => {
  const [selectedPlan, setSelectedPlan] = useState<RecommendedPlan | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Insurance Recommendations</h2>
        <Button variant="outline" onClick={onReset}>
          Start Over
        </Button>
      </div>

      <Card>
        <CardHeader className="bg-muted">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-suraksha-600" />
            <CardTitle>Risk Assessment</CardTitle>
          </div>
          <CardDescription>
            Based on your profile information
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-medium ${
                response.riskProfile.level === 'Low' 
                  ? 'bg-green-500' 
                  : response.riskProfile.level === 'Medium' 
                  ? 'bg-amber-500' 
                  : 'bg-rose-500'
              }`}
            >
              {response.riskProfile.level}
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">
                {response.riskProfile.level} Risk Profile
              </h3>
              <p className="text-muted-foreground">{response.riskProfile.reason}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        {response.recommendedPlans.map((plan, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer transition-all ${
              selectedPlan?.name === plan.name 
                ? 'ring-2 ring-suraksha-600 ring-offset-2' 
                : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between">
                {plan.name}
                <span className="text-sm font-normal px-2 py-1 rounded-full bg-suraksha-50 text-suraksha-700">
                  {plan.fitScore} Match
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-3 space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Benefits</h4>
                <p className="text-sm text-muted-foreground">{plan.benefits}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Limitations</h4>
                <p className="text-sm text-muted-foreground">{plan.limitations}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Why recommended</p>
                <p className="text-sm">{plan.whyThis}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedPlan && (
        <Card>
          <CardHeader className="bg-muted">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              <CardTitle>Selected Plan: {selectedPlan.name}</CardTitle>
            </div>
            <CardDescription>
              Detailed information about this plan
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="trust">
              <TabsList className="mb-4">
                <TabsTrigger value="trust">Trust Factors</TabsTrigger>
                <TabsTrigger value="details">Plan Details</TabsTrigger>
                <TabsTrigger value="after">After Purchase</TabsTrigger>
              </TabsList>
              <TabsContent value="trust">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Why You Can Trust {selectedPlan.name.split(' ')[0]}</h3>
                  
                  {response.trustSummary[selectedPlan.name.split(' ')[0]] && (
                    <div className="grid grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">Claim Settlement Ratio</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-2xl font-bold text-suraksha-600">
                            {response.trustSummary[selectedPlan.name.split(' ')[0]].claimRatio}
                          </p>
                          <p className="text-sm text-muted-foreground">Industry avg: 89%</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">User Rating</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-2xl font-bold text-suraksha-600">
                            {response.trustSummary[selectedPlan.name.split(' ')[0]].userRating}
                          </p>
                          <p className="text-sm text-muted-foreground">Based on 10,000+ reviews</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">AI Confidence</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-2xl font-bold text-suraksha-600">
                            {response.trustSummary[selectedPlan.name.split(' ')[0]].aiConfidence}
                          </p>
                          <p className="text-sm text-muted-foreground">Based on your profile match</p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="details">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Plan Explanation</h3>
                  <p>{response.planExplanation}</p>
                  
                  <h3 className="text-lg font-medium mt-6">Coverage Highlights</h3>
                  <ul className="space-y-2">
                    {selectedPlan.benefits.split(', ').map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="after">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">After Purchasing {selectedPlan.name}</h3>
                  <p className="text-muted-foreground">Here's what we recommend after you get your policy:</p>
                  
                  <ul className="space-y-3">
                    {response.postPurchaseTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 border rounded-lg">
                        <div className="mt-0.5">
                          <Info className="h-5 w-5 text-suraksha-600" />
                        </div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setSelectedPlan(null)}>
              Compare Other Plans
            </Button>
            <Button className="bg-suraksha-600 hover:bg-suraksha-700">
              Get {selectedPlan.name} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-rose-500" />
            Why This Matters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Insurance is more than just a financial product—it's peace of mind for your family's future. 
            Your personalized recommendations are based on analyzing thousands of plans and matching them 
            to your specific situation and needs.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link to="/resources">Learn More About Insurance</Link>
          </Button>
          <Button asChild className="bg-suraksha-600 hover:bg-suraksha-700">
            <Link to="/products">Browse All Products</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
