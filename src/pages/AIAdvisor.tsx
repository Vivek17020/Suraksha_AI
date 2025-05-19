
import React, { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { AdvisorForm } from '@/components/advisor/AdvisorForm';
import { AdvisorResults } from '@/components/advisor/AdvisorResults';
import { toast } from '@/hooks/use-toast';
import VoiceAssistant from '@/components/advisor/VoiceAssistant';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, FileText } from 'lucide-react';

// Define the types for our insurance advisor data
export interface UserProfile {
  name: string;
  age: string;
  location: string;
  income: string;
  family_size: string;
  health_history: string;
  existing_insurance: string;
  preferred_coverage_type: string;
  concerns: string;
}

export interface RiskProfile {
  level: 'Low' | 'Medium' | 'High';
  reason: string;
}

export interface RecommendedPlan {
  name: string;
  fitScore: string;
  benefits: string;
  limitations: string;
  whyThis: string;
}

export interface TrustData {
  claimRatio: string;
  userRating: string;
  aiConfidence: string;
}

export interface AdvisorResponse {
  riskProfile: RiskProfile;
  recommendedPlans: RecommendedPlan[];
  planExplanation: string;
  trustSummary: {
    [key: string]: TrustData;
  };
  postPurchaseTips: string[];
}

const AIAdvisorPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [advisorResponse, setAdvisorResponse] = useState<AdvisorResponse | null>(null);
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleSubmit = async (profileData: UserProfile) => {
    setIsLoading(true);

    try {
      // In a real implementation, this would call your API that interfaces with an AI model
      // For demo purposes, we'll simulate a response after a short delay
      setTimeout(() => {
        // This is mock data that simulates what the AI would return
        const mockResponse: AdvisorResponse = {
          riskProfile: {
            level: "Medium",
            reason: `Based on your age (${profileData.age}), family size (${profileData.family_size}), and ${profileData.health_history === 'None' ? 'no major health issues' : 'existing health conditions'}, you have a moderate risk profile that would benefit from comprehensive coverage.`
          },
          recommendedPlans: [
            {
              name: "SurakshaShield 360",
              fitScore: "94%",
              benefits: `Covers pre/post-hospitalization, no co-pay, ₹${parseInt(profileData.income) > 50000 ? '15L' : '10L'} coverage`,
              limitations: "Annual health checkup limited to two family members",
              whyThis: `Perfect match for your ${profileData.family_size}-member family with comprehensive protection and additional benefits`
            },
            {
              name: "SafetyFirst Family Plus",
              fitScore: "89%",
              benefits: `Affordable family floater plan, ₹${parseInt(profileData.income) > 50000 ? '10L' : '7L'} coverage, 5000+ network hospitals`,
              limitations: "Waiting period of 2 years for pre-existing conditions",
              whyThis: `Ideal for ${profileData.location}-based families looking for value with essential protection`
            },
            {
              name: "HealthAssure Complete",
              fitScore: "86%",
              benefits: "Lowest premium, cashless claims, ambulance coverage, ₹5L coverage",
              limitations: "Limited OPD coverage, co-payment on certain treatments",
              whyThis: "Budget-friendly option with all essential benefits for first-time insurance buyers"
            }
          ],
          planExplanation: `Based on your monthly income of ₹${profileData.income}, family size of ${profileData.family_size}, and your concern about "${profileData.concerns}", we recommend plans that balance coverage and affordability. ${profileData.health_history !== 'None' ? 'We\'ve factored in your health history to ensure adequate coverage.' : 'Your clean health history qualifies you for premium rates.'}`,
          trustSummary: {
            "SurakshaShield": {
              claimRatio: "98%",
              userRating: "4.7/5",
              aiConfidence: "Very High"
            },
            "SafetyFirst": {
              claimRatio: "94%",
              userRating: "4.4/5",
              aiConfidence: "High"
            },
            "HealthAssure": {
              claimRatio: "91%",
              userRating: "4.2/5",
              aiConfidence: "Medium-High"
            }
          },
          postPurchaseTips: [
            `Schedule annual health checkups for all ${profileData.family_size} family members through the insurer's wellness program`,
            "Save your policy document and emergency hospital list in our secure digital locker",
            `Set up automated premium payment reminders based on your preferred payment cycle`,
            "Download the mobile app for instant claim filing and tracking"
          ]
        };
        
        setAdvisorResponse(mockResponse);
        toast({
          title: "Analysis Complete",
          description: "Your personalized insurance recommendations are ready!",
        });
        setIsLoading(false);
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Unable to process your request. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Smart Insurance Advisor
            </h1>
            <p className="text-lg text-muted-foreground">
              Get personalized insurance recommendations based on your needs and profile
            </p>
          </div>
          
          {!advisorResponse ? (
            <Tabs defaultValue="form">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="form" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Form Input</span>
                </TabsTrigger>
                <TabsTrigger value="voice" className="flex items-center gap-2">
                  <Mic className="h-4 w-4" />
                  <span>Voice Assistant</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="form" className="mt-6">
                <AdvisorForm onSubmit={handleSubmit} isLoading={isLoading} />
              </TabsContent>
              <TabsContent value="voice" className="mt-6">
                <VoiceAssistant 
                  onSubmit={handleSubmit} 
                  isListening={isListening} 
                  setIsListening={setIsListening} 
                />
              </TabsContent>
            </Tabs>
          ) : (
            <AdvisorResults 
              response={advisorResponse} 
              onReset={() => setAdvisorResponse(null)} 
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default AIAdvisorPage;
