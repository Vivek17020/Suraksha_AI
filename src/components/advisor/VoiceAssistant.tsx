
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { UserProfile } from '@/pages/AIAdvisor';
import { toast } from '@/hooks/use-toast';

// Add TypeScript interface definitions for the Web Speech API
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: Event) => void;
}

interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

interface VoiceAssistantProps {
  onSubmit: (data: UserProfile) => void;
  isListening: boolean;
  setIsListening: (isListening: boolean) => void;
}

const VoiceAssistant = ({ onSubmit, isListening, setIsListening }: VoiceAssistantProps) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);

  // Initialize speech recognition and synthesis
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if browser supports speech recognition
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognitionAPI) {
        const recognition = new SpeechRecognitionAPI();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-IN'; // Set to Indian English

        recognition.onresult = (event) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              currentTranscript += event.results[i][0].transcript;
            }
          }
          
          if (currentTranscript) {
            setTranscript(prev => prev + ' ' + currentTranscript);
          }
        };

        recognition.onerror = (event) => {
          console.error('Speech recognition error', event);
          setIsListening(false);
          toast({
            title: "Voice Recognition Error",
            description: "There was a problem with the speech recognition service. Please try again or use the form.",
            variant: "destructive"
          });
        };

        recognitionRef.current = recognition;
      }

      // Check if browser supports speech synthesis
      if ('speechSynthesis' in window) {
        synthesisRef.current = window.speechSynthesis;
      }
    }

    return () => {
      stopListening();
      stopSpeaking();
    };
  }, []);

  // Start or stop listening when isListening state changes
  useEffect(() => {
    if (isListening) {
      startListening();
    } else {
      stopListening();
    }
  }, [isListening]);

  // Process transcript when it changes
  useEffect(() => {
    if (transcript) {
      processTranscript(transcript);
    }
  }, [transcript]);

  const startListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        speak("I'm listening. Please share details like your age, location, family size, and insurance concerns.");
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    } else {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition. Please use the form instead.",
        variant: "destructive"
      });
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.error('Error stopping speech recognition:', error);
      }
    }
  };

  const speak = (text: string) => {
    if (synthesisRef.current) {
      stopSpeaking(); // Stop any current speech
      
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-IN';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      synthesisRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthesisRef.current) {
      synthesisRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const toggleSpeaking = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speak("Welcome to Suraksha AI's voice assistant. I can help you find the best insurance plans for your needs. Please tell me about your insurance requirements.");
    }
  };

  // Extract information from the transcript
  const processTranscript = (text: string) => {
    // For demonstration, we'll extract some basic information
    // In a real implementation, you would use NLP or a more sophisticated parser
    
    const ageMatch = text.match(/(\d+)\s*(?:years|year|yrs)\s*old/i) || 
                     text.match(/age\s*(?:is|:)?\s*(\d+)/i);
    const locationMatch = text.match(/(?:from|in|at)\s+([A-Za-z\s]+)(?:,|\.|$)/i) || 
                         text.match(/location\s*(?:is|:)?\s*([A-Za-z\s]+)(?:,|\.|$)/i);
    const incomeMatch = text.match(/(?:earn|income|salary|making)\s*(?:of|is)?\s*(?:Rs\.?|₹)?\s*(\d+(?:,\d+)*)/i);
    const familyMatch = text.match(/family\s*(?:of|with|has)?\s*(\d+)/i) || 
                       text.match(/(\d+)\s*(?:member|members|people)\s*(?:in|family)/i);
    const healthMatch = text.match(/health\s*(?:issues?|problems?|history|conditions?)?:?\s*([^.]+)(?:\.|$)/i);
    const insuranceMatch = text.match(/(?:have|got|existing)\s*insurance:?\s*([^.]+)(?:\.|$)/i);
    const concernsMatch = text.match(/(?:worried|concerned|anxious|fears?|concerns?)(?:\s+about)?:?\s*([^.]+)(?:\.|$)/i);
    
    // If we have enough information, we can create a partial profile
    if (ageMatch || locationMatch || familyMatch || concernsMatch) {
      const partialProfile: Partial<UserProfile> = {
        name: "Voice User",
        age: ageMatch ? ageMatch[1] : "",
        location: locationMatch ? locationMatch[1].trim() : "",
        income: incomeMatch ? incomeMatch[1].replace(/,/g, "") : "",
        family_size: familyMatch ? familyMatch[1] : "",
        health_history: healthMatch ? healthMatch[1].trim() : "None mentioned",
        existing_insurance: insuranceMatch ? insuranceMatch[1].trim() : "None",
        preferred_coverage_type: "Comprehensive",
        concerns: concernsMatch ? concernsMatch[1].trim() : "General coverage needs"
      };
      
      // Log extracted information for debugging
      console.log("Extracted profile:", partialProfile);
      
      // Check if we have enough information to proceed
      const requiredFields = ['age', 'location', 'family_size'];
      const filledRequiredFields = requiredFields.filter(field => 
        partialProfile[field as keyof typeof partialProfile] && 
        partialProfile[field as keyof typeof partialProfile] !== ""
      );
      
      if (filledRequiredFields.length >= 2) { // If we have at least 2 required fields
        // Fill in defaults for missing fields
        const completeProfile: UserProfile = {
          name: partialProfile.name || "Voice User",
          age: partialProfile.age || "35",
          location: partialProfile.location || "Mumbai",
          income: partialProfile.income || "50000",
          family_size: partialProfile.family_size || "4",
          health_history: partialProfile.health_history || "None mentioned",
          existing_insurance: partialProfile.existing_insurance || "None",
          preferred_coverage_type: partialProfile.preferred_coverage_type || "Comprehensive",
          concerns: partialProfile.concerns || "General coverage needs"
        };
        
        speak("Thank you for the information. I'll analyze this and suggest the best insurance options for you.");
        setIsListening(false);
        
        // Submit the profile to get recommendations
        onSubmit(completeProfile);
      }
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold text-center">Voice Assistant</h2>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            {isListening 
              ? "I'm listening... Tell me about your age, location, family size, and insurance needs." 
              : "Press the microphone button and tell me about your insurance needs."}
          </p>
          
          {transcript && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md text-sm max-h-32 overflow-y-auto">
              <p className="text-left">{transcript}</p>
            </div>
          )}
        </div>
        
        <div className="flex space-x-4">
          <Button
            onClick={toggleListening}
            className={`rounded-full w-16 h-16 flex items-center justify-center ${
              isListening ? 'bg-rose-500 hover:bg-rose-600' : 'bg-suraksha-600 hover:bg-suraksha-700'
            }`}
          >
            {isListening ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </Button>
          
          <Button
            onClick={toggleSpeaking}
            className={`rounded-full w-16 h-16 flex items-center justify-center ${
              isSpeaking ? 'bg-amber-500 hover:bg-amber-600' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            variant="outline"
          >
            {isSpeaking ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </Button>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>Try saying: "I'm 35 years old from Bangalore with a family of 4, concerned about healthcare costs"</p>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
