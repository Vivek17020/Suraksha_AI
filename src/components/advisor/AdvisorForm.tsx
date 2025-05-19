
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserProfile } from '@/pages/AIAdvisor';

// Form schema validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Please enter a valid age.',
  }),
  location: z.string().min(2, { message: 'Please enter a valid location.' }),
  income: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Please enter a valid income amount.',
  }),
  family_size: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Please enter a valid family size.',
  }),
  health_history: z.string(),
  existing_insurance: z.string(),
  preferred_coverage_type: z.string(),
  concerns: z.string(),
});

interface AdvisorFormProps {
  onSubmit: (data: UserProfile) => void;
  isLoading: boolean;
}

export const AdvisorForm = ({ onSubmit, isLoading }: AdvisorFormProps) => {
  const form = useForm<UserProfile>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: '',
      location: '',
      income: '',
      family_size: '',
      health_history: 'None',
      existing_insurance: 'None',
      preferred_coverage_type: 'Health',
      concerns: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="E.g. 35" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="E.g. Mumbai, Delhi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="income"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Income (₹)</FormLabel>
                <FormControl>
                  <Input placeholder="E.g. 50000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="family_size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Family Size</FormLabel>
                <FormControl>
                  <Input placeholder="E.g. 4" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="health_history"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Health History</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select health history" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="None">None/Healthy</SelectItem>
                    <SelectItem value="Diabetes">Diabetes</SelectItem>
                    <SelectItem value="Hypertension">Hypertension</SelectItem>
                    <SelectItem value="Heart Disease">Heart Disease</SelectItem>
                    <SelectItem value="Other">Other Conditions</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="existing_insurance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Existing Insurance</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select existing insurance" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="None">None</SelectItem>
                    <SelectItem value="Health">Health Insurance</SelectItem>
                    <SelectItem value="Life">Life Insurance</SelectItem>
                    <SelectItem value="Both">Both Health & Life</SelectItem>
                    <SelectItem value="Other">Other Insurance</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferred_coverage_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Coverage Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred coverage" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Health">Health Insurance</SelectItem>
                    <SelectItem value="Life">Life Insurance</SelectItem>
                    <SelectItem value="Motor">Motor Insurance</SelectItem>
                    <SelectItem value="Home">Home Insurance</SelectItem>
                    <SelectItem value="Travel">Travel Insurance</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="concerns"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specific Concerns or Requirements</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="E.g. Looking for maternity coverage, concerned about premium costs, etc." 
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full md:w-auto bg-suraksha-600 hover:bg-suraksha-700"
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing Your Profile...' : 'Get Personalized Recommendations'}
        </Button>
      </form>
    </Form>
  );
};
