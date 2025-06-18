// src/app/about/page.tsx
'use client'; // Added to support form interactivity

import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/shared/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Added CardDescription
import { ScrollText, Users, Eye, BookHeart, Phone, Mail, MapPin, Clock, Send, Facebook, Youtube, Instagram } from 'lucide-react'; // Merged icons
import { BuddhaIcon, LotusIcon } from '@/components/icons';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const testimonials = [
  {
    id: 1,
    name: 'Linh Chen',
    quote: 'Finding Vien Quang Temple has been a true blessing. The teachings are profound and the community is so welcoming.',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'woman portrait',
  },
  {
    id: 2,
    name: 'David Miller',
    quote: 'The Venerable Monk\'s guidance has brought so much clarity and peace to my life. I am grateful for this spiritual home.',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'man portrait',
  },
  {
    id: 3,
    name: 'An Nguyen',
    quote: 'The meditation sessions helped me immensely. The temple is a beautiful sanctuary for anyone seeking inner peace.',
    avatar: 'https://placehold.co/100x100.png',
    imageHint: 'person meditation',
  },
];

const galleryImages = [
  { id: 1, src: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fvienquang-1.jpg?alt=media&token=40fb4a77-2289-4062-955d-1aedf1f56204', alt: 'Temple exterior', imageHint: 'temple building' },
  { id: 2, src: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fvienquang-2.jpg?alt=media&token=40fb4a77-2289-4062-955d-1aedf1f56204', alt: 'Meditation hall', imageHint: 'meditation hall' },
  { id: 3, src: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fvienquang-3.jpg?alt=media&token=40fb4a77-2289-4062-955d-1aedf1f56204', alt: 'Temple garden', imageHint: 'temple garden' },
  { id: 4, src: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fvienquang-4.jpg?alt=media&token=40fb4a77-2289-4062-955d-1aedf1f56204', alt: 'Statue of Buddha', imageHint: 'buddha statue' },
  { id: 5, src: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fvienquang-5.jpg?alt=media&token=40fb4a77-2289-4062-955d-1aedf1f56204', alt: 'Community gathering', imageHint: 'community gathering' },
  { id: 6, src: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fvienquang-6.jpg?alt=media&token=40fb4a77-2289-4062-955d-1aedf1f56204', alt: 'Prayer wheels', imageHint: 'prayer wheels' },
];

// Copied from contact/page.tsx
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message must not exceed 500 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function AboutPage() {
  // Copied from contact/page.tsx
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

  function onSubmitContact(data: ContactFormValues) {
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
        <LotusIcon className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Vien Quang Temple</h1>
        <p className="text-lg text-muted-foreground mt-2">Discover our roots, our guide, and our guiding principles.</p>
      </header>

      {/* Temple History and Founding */}
      <section className="mb-12 md:mb-16">
        <Card className="shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Ffront_buddha.jpg?alt=media&token=60cff70f-4503-4596-ae47-3d779e6125db"
                alt="Historic photo of temple founding"
                width={800}
                height={600}
                className="object-cover h-full w-full"
                data-ai-hint="historic temple"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center mb-3">
                <ScrollText className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-headline font-semibold text-foreground">Our History &amp; Founding</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                Vien Quang Temple was founded in [Year] by a group of dedicated practitioners with the vision of creating a spiritual haven for the study and practice of Buddhism. Rooted in the [Buddhist Tradition, e.g., Mahayana] tradition, our temple has grown from humble beginnings into a vibrant center for Dharma in the region.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                We honor our founders and lineage masters by upholding the authentic teachings and fostering a supportive environment for all who seek the path of wisdom and compassion. <em className="text-sm">(Content available in English &amp; Vietnamese)</em>
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* About the Venerable Monk */}
      <section className="mb-12 md:mb-16">
        <Card className="shadow-lg overflow-hidden">
          <div className="md:flex md:flex-row-reverse">
            <div className="md:w-1/2">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fmonk.jpg?alt=media&token=0603072b-5ed5-4e46-9deb-74ac24bfe5b8"
                alt="Venerable Monk teaching"
                width={800}
                height={600}
                className="object-cover h-full w-full"
                data-ai-hint="monk teaching"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center mb-3">
                <BuddhaIcon className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-headline font-semibold text-foreground">Our Guiding Light: Venerable [Monk's Name]</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                Venerable [Monk's Name] is the spiritual director of Vien Quang Temple. With over [Number] years of monastic training and Dharma practice, Venerable [Monk's Name] offers profound teachings and compassionate guidance to the community. Their dedication to spreading the Dharma has inspired countless individuals on their spiritual journeys.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Learn more about Venerable [Monk's Name]'s life, teachings, and contributions to Buddhism. <em className="text-sm">(Content available in English &amp; Vietnamese)</em>
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Temple Philosophy and Mission */}
      <section className="mb-12 md:mb-16 text-center">
        <div className="flex items-center justify-center mb-3">
           <BookHeart className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl font-headline font-semibold text-foreground">Our Philosophy &amp; Mission</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
          At Vien Quang Temple, our mission is to provide a supportive and authentic environment for the study, practice, and realization of Buddhist teachings. We strive to cultivate wisdom, compassion, and inner peace within individuals and the broader community. We are guided by the core tenets of [mention specific principles, e.g., the Four Noble Truths, the Eightfold Path] and aim to make these timeless teachings accessible to all.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="mb-12 md:mb-16">
        <div className="flex items-center mb-6">
          <Eye className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl font-headline font-semibold text-foreground">Temple Photo Gallery</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={image.imageHint}
              />
            </Card>
          ))}
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="mb-16"> {/* Added mb-16 for spacing before contact section */}
        <div className="flex items-center mb-6">
          <Users className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl font-headline font-semibold text-foreground">Voices of Our Community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex items-center space-x-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                  data-ai-hint={testimonial.imageHint}
                />
                <div>
                  <CardTitle className="text-lg font-headline">{testimonial.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- START OF MOVED CONTACT CONTENT --- */}
      <section id="contact-us" className="mt-16 pt-12 border-t">
        <header className="text-center mb-12 md:mb-16">
          <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">Get In Touch With Us</h2>
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
                <CardDescription> {/* Ensured CardDescription is imported and used */}
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmitContact)} className="space-y-6">
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
      </section>
      {/* --- END OF MOVED CONTACT CONTENT --- */}
    </PageWrapper>
  );
}
