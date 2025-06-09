// src/app/prayers/page.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import PageWrapper from '@/components/shared/PageWrapper';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { HandHeart, MessageSquareHeart, Sprout } from 'lucide-react';
import Image from 'next/image';

const prayerFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  contactInfo: z.string().email({ message: 'Please enter a valid email address.' }),
  requestType: z.enum(['personalWellbeing', 'deceasedSouls', 'generalBlessings'], {
    required_error: 'Please select a prayer request type.',
  }),
  specificDetails: z.string().min(10, { message: 'Details must be at least 10 characters.' }).max(500, { message: 'Details must not exceed 500 characters.' }),
  makeDonation: z.boolean().optional(),
});

type PrayerFormValues = z.infer<typeof prayerFormSchema>;

export default function PrayerRequestsPage() {
  const { toast } = useToast();
  const form = useForm<PrayerFormValues>({
    resolver: zodResolver(prayerFormSchema),
    defaultValues: {
      name: '',
      contactInfo: '',
      specificDetails: '',
      makeDonation: false,
    },
  });

  function onSubmit(data: PrayerFormValues) {
    // In a real app, you would send this data to a server
    console.log(data);
    toast({
      title: 'Prayer Request Submitted',
      description: 'Thank you. Your prayer request has been received and will be attended to with care.',
      variant: 'default',
    });
    form.reset();
  }

  return (
    <PageWrapper>
      <header className="text-center mb-12 md:mb-16">
        <HandHeart className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Prayer Requests</h1>
        <p className="text-lg text-muted-foreground mt-2">Submit your heartfelt requests for prayers and blessings.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl flex items-center gap-2">
              <MessageSquareHeart className="h-7 w-7 text-primary"/>
              Submit Your Prayer
            </CardTitle>
            <CardDescription>
              Please fill out the form below. All requests are handled with confidentiality and compassion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormDescription>We will use this to confirm receipt (optional).</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requestType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Prayer Request</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a prayer category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="personalWellbeing">Personal Wellbeing</SelectItem>
                          <SelectItem value="deceasedSouls">Dedication for Deceased Souls</SelectItem>
                          <SelectItem value="generalBlessings">General Blessings & Aspirations</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="specificDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specific Details of Your Request</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide details for your prayer request (e.g., name of person, specific situation)."
                          className="resize-y min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="makeDonation"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-muted/20">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Optional: Make a Donation</FormLabel>
                        <FormDescription>
                          Support the temple's prayer services. If checked, you'll be guided to our donation page after submission.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-md hover:shadow-lg transition-all">
                  Send Prayer Request
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-8">
            <Card className="shadow-lg bg-secondary/30">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <Sprout className="h-6 w-6 text-secondary-foreground"/>
                        Our Commitment
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                        Each prayer request is received with utmost respect and sincerity. Our monastic and lay community members will include your intentions in our regular prayer and dedication services. We hold your requests in our hearts and practice for the benefit of all beings.
                    </p>
                    <p className="text-muted-foreground mt-3 text-sm">
                        <em>Confirmation and follow-up system: After submission, you will receive an email confirmation. While we cannot provide individual responses to all requests, please know that your intentions are being supported.</em>
                    </p>
                </CardContent>
            </Card>
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="https://placehold.co/600x400.png" alt="Serene temple scene for prayer" width={600} height={400} className="w-full object-cover" data-ai-hint="prayer candles peaceful" />
            </div>
        </div>
      </div>
    </PageWrapper>
  );
}