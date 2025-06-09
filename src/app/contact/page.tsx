// src/app/contact/page.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import PageWrapper from '@/components/shared/PageWrapper';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message must not exceed 500 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    form.reset();
  }

  return (
    <PageWrapper>
      <header className="text-center mb-12 md:mb-16">
        <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get In Touch</h1>
        <p className="text-lg text-muted-foreground mt-2">We'd love to hear from you. Reach out with any questions or to learn more.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information Section */}
        <section className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2"><MapPin className="text-primary"/>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">123 Bodhi Path, Serenity City, CA 90210</p>
              <Button variant="link" asChild className="p-0 mt-2 text-primary">
                <a href="https://maps.google.com/?q=123+Bodhi+Path,Serenity+City,CA+90210" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2"><Phone className="text-primary"/>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground"><strong>Email:</strong> info@bodhihilltemple.org</p>
              <p className="text-muted-foreground"><strong>Phone:</strong> (555) 123-4567</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2"><Clock className="text-primary"/>Operating Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground"><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
              <p className="text-muted-foreground"><strong>Saturday - Sunday:</strong> 10:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground text-sm italic mt-2">(Hours may vary for special events and holidays)</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-2">Follow Us</CardTitle>
            </CardHeader>
            <CardContent>
                 <div className="flex space-x-4">
                    <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-7 w-7" /></Link>
                    <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-7 w-7" /></Link>
                    <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-7 w-7" /></Link>
                </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form Section */}
        <section>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl flex items-center gap-2">
                <Send className="h-7 w-7 text-primary"/>
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject of your message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here..."
                            className="resize-y min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 shadow-md hover:shadow-lg transition-all">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Interactive Map Placeholder */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-8 font-headline">Find Us On The Map</h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border">
          {/* Placeholder for interactive map. In a real app, use @vis.gl/react-google-maps or similar */}
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Map showing temple location"
            width={1200}
            height={600}
            className="object-cover w-full h-full"
            data-ai-hint="city map location"
          />
        </div>
         <p className="text-sm text-muted-foreground text-center mt-2">Interactive map integration coming soon.</p>
      </section>
    </PageWrapper>
  );
}