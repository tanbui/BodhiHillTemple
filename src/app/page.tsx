// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import PageWrapper from '@/components/shared/PageWrapper';
import { CalendarDays, HeartHandshake, BookOpen, TrendingUp, Users, HelpCircle } from 'lucide-react';
import { LotusIcon, BuddhaIcon } from '@/components/icons';

const featuredEvents = [
  { id: 1, title: 'Full Moon Meditation', date: 'October 28, 2024', description: 'Join us for a guided meditation session under the serene light of the full moon.', icon: <CalendarDays className="h-6 w-6 text-primary" />, imageHint: 'moon meditation', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fevent1.jpg?alt=media&token=0292f1eb-5256-4fdd-b2d4-8bbc9dc12ca1' },
  { id: 2, title: 'Dharma Talk by Venerable Thich Tam Thien', date: 'November 5, 2024', description: 'An insightful talk on applying Buddhist principles in daily life.', icon: <BookOpen className="h-6 w-6 text-primary" />, imageHint: 'dharma talk', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fevent2.jpg?alt=media&token=0292f1eb-5256-4fdd-b2d4-8bbc9dc12ca1'},
  { id: 3, title: 'Community Volunteer Day', date: 'November 12, 2024', description: 'Lend a hand and connect with fellow community members at the temple.', icon: <Users className="h-6 w-6 text-primary" />, imageHint: 'community volunteer', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fevent3.jpg?alt=media&token=0292f1eb-5256-4fdd-b2d4-8bbc9dc12ca1'}
];

const latestTeachings = [
  { id: 1, title: 'The Art of Mindful Living', excerpt: 'Explore techniques to bring mindfulness into every moment of your day...', category: 'Mindfulness', imageHint: 'mindful living', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fteaching1.jpg?alt=media&token=0292f1eb-5256-4fdd-b2d4-8bbc9dc12ca1' },
  { id: 2, title: 'Understanding Karma', excerpt: 'A deep dive into the concept of karma and its implications for our lives...', category: 'Philosophy', imageHint: 'karma concept', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fteaching2.jpg?alt=media&token=0292f1eb-5256-4fdd-b2d4-8bbc9dc12ca1' },
  { id: 3, title: 'Cultivating Compassion', excerpt: 'Practical steps to develop a compassionate heart towards oneself and others...', category: 'Practice', imageHint: 'compassion heart', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fteaching3.jpg?alt=media&token=0292f1eb-5256-4fdd-b2d4-8bbc9dc12ca1' },
];

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-background to-accent/10 py-20 md:py-32 rounded-xl shadow-lg overflow-hidden mb-16 animate-subtle-slide-up">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://firebasestorage.googleapis.com/v0/b/bodhiconnect.firebasestorage.app/o/gallery%2Fvienquang_home.jpg?alt=media&token=e89f9a66-aed8-4d6a-88bb-f6045490bf19" alt="Abstract temple background" layout="fill" objectFit="cover" data-ai-hint="serene abstract" />
        </div>
        <div className="relative container mx-auto text-center px-4">
          <LotusIcon className="h-20 w-20 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Welcome to Vien Quang Temple
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A sanctuary for peace, wisdom, and community. Discover the path to enlightenment through ancient teachings and compassionate practice.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Link href="/about">Learn More About Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-primary text-primary hover:bg-primary/10">
              <Link href="/activities">View Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="mb-16 animate-subtle-slide-up animation-delay-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <HeartHandshake className="h-8 w-8 text-accent" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Support Our Mission</CardTitle>
                <CardDescription>Your generosity helps us maintain the temple and serve the community.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-secondary/20 rounded-full">
                <HelpCircle className="h-8 w-8 text-secondary-foreground" />
              </div>
              <div>
                <CardTitle className="font-headline text-2xl">Request a Prayer</CardTitle>
                <CardDescription>Submit a prayer request for yourself, loved ones, or for world peace.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" asChild className="w-full">
                <Link href="/prayers">Submit Prayer Request</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="mb-16 animate-subtle-slide-up animation-delay-400">
        <div className="flex items-center mb-8">
          <TrendingUp className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {event.icon}
                  <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                </div>
                <CardDescription>{event.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="rounded-md object-cover aspect-video"
                  data-ai-hint={event.imageHint}
                />
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="link" asChild className="text-primary p-0">
                  <Link href="/activities">Event Details →</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Teachings Section */}
      <section className="animate-subtle-slide-up animation-delay-600">
        <div className="flex items-center mb-8">
          <BuddhaIcon className="h-10 w-10 text-primary mr-3" />
          <h2 className="text-3xl font-bold text-foreground">Latest Teachings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestTeachings.map((teaching) => (
            <Card key={teaching.id} className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <Image
                  src={teaching.imageUrl}
                  alt={teaching.title}
                  width={600}
                  height={350}
                  className="rounded-t-md object-cover aspect-[16/9]"
                  data-ai-hint={teaching.imageHint}
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">{teaching.category}</span>
                <CardTitle className="font-headline text-xl mt-1 mb-2">{teaching.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{teaching.excerpt}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="outline" asChild>
                  <Link href="/teachings">Read More</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

// Add some CSS for animation delay utility if not present
// Or use inline style for simplicity if Tailwind PurgeCSS is aggressive
// For now, assuming these classes might be defined or animations are fast enough
// .animation-delay-200 { animation-delay: 0.2s; }
// .animation-delay-400 { animation-delay: 0.4s; }
// .animation-delay-600 { animation-delay: 0.6s; }
