// src/app/activities/page.tsx
import Image from 'next/image';
import PageWrapper from '@/components/shared/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Film, Users, Sparkles, Flower2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const weeklySchedule = [
  { day: 'Monday', time: '7:00 PM - 8:30 PM', activity: 'Introduction to Meditation' },
  { day: 'Wednesday', time: '6:30 PM - 8:00 PM', activity: 'Sutra Study Group' },
  { day: 'Saturday', time: '9:00 AM - 10:30 AM', activity: 'Morning Chanting & Meditation' },
  { day: 'Sunday', time: '10:00 AM - 12:00 PM', activity: 'Dharma Talk & Community Lunch' },
];

const specialEvents = [
  { id: 1, title: 'Vesak Celebration', date: 'May 15, 2025', description: 'Commemorating the birth, enlightenment, and passing of the Buddha.', image: 'https://placehold.co/600x400.png', imageHint: 'vesak festival' },
  { id: 2, title: 'Annual Meditation Retreat', date: 'July 20-25, 2025', description: 'A 5-day silent retreat to deepen your meditation practice.', image: 'https://placehold.co/600x400.png', imageHint: 'meditation retreat' },
  { id: 3, title: 'Lunar New Year Blessing Ceremony', date: 'February 1, 2025', description: 'Join us for traditional blessings and festivities.', image: 'https://placehold.co/600x400.png', imageHint: 'lunar new year' },
];

const pastEventPhotos = [
  { id: 1, src: 'https://placehold.co/600x400.png', alt: 'Community event 1', imageHint: 'temple celebration' },
  { id: 2, src: 'https://placehold.co/600x400.png', alt: 'Meditation session', imageHint: 'group meditation' },
  { id: 3, src: 'https://placehold.co/600x400.png', alt: 'Festival gathering', imageHint: 'buddhist festival' },
  { id: 4, src: 'https://placehold.co/600x400.png', alt: 'Volunteers at work', imageHint: 'temple volunteers' },
];


export default function ActivitiesPage() {
  return (
    <PageWrapper>
      <header className="text-center mb-12 md:mb-16">
        <Flower2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Activities & Events</h1>
        <p className="text-lg text-muted-foreground mt-2">Engage with our community and deepen your practice.</p>
      </header>

      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
          <TabsTrigger value="special-events">Special Events</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="gallery">Event Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CalendarDays className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-3xl">Weekly Schedule</CardTitle>
              </div>
              <CardDescription>Our regular activities. All are welcome!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold text-foreground">Day</th>
                      <th className="text-left p-3 font-semibold text-foreground">Time</th>
                      <th className="text-left p-3 font-semibold text-foreground">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeklySchedule.map((item) => (
                      <tr key={item.day} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                        <td className="p-3 text-muted-foreground">{item.day}</td>
                        <td className="p-3 text-muted-foreground">{item.time}</td>
                        <td className="p-3 text-foreground font-medium">{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <Image src="https://placehold.co/800x300.png" alt="Decorative Calendar Placeholder" width={800} height={300} className="rounded-md mx-auto" data-ai-hint="calendar design" />
                <p className="text-sm text-muted-foreground mt-2">Event calendar integration coming soon.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="special-events">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-3xl">Special Ceremonies & Festivals</CardTitle>
              </div>
              <CardDescription>Join us for these auspicious and joyful occasions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specialEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <Image src={event.image} alt={event.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={event.imageHint} />
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                       <Button variant="link" className="text-primary p-0">Learn More →</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="community">
            <Card className="shadow-lg">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Users className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline text-3xl">Community Events & Meditation</CardTitle>
                    </div>
                    <CardDescription>Connect with fellow practitioners and deepen your understanding.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Meditation Sessions</h3>
                        <p className="text-muted-foreground mb-2">
                            Regularly scheduled group meditation sessions for all levels. Whether you are new to meditation or an experienced practitioner, find peace and clarity in a supportive group setting. Check our weekly schedule for timings.
                        </p>
                        <Image src="https://placehold.co/700x300.png" alt="Group meditation" width={700} height={300} className="rounded-md object-cover" data-ai-hint="group meditation" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Community Gatherings</h3>
                        <p className="text-muted-foreground">
                            We host various community events such as potlucks, discussion groups, and volunteer days. These are wonderful opportunities to connect, share, and support one another on the path.
                        </p>
                         <Image src="https://placehold.co/700x300.png" alt="Community gathering" width={700} height={300} className="rounded-md object-cover" data-ai-hint="community potluck" />
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="gallery">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Film className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-3xl">Photo & Video Gallery</CardTitle>
              </div>
              <CardDescription>Memories from our past events and ceremonies.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pastEventPhotos.map((photo) => (
                  <div key={photo.id} className="overflow-hidden rounded-lg shadow-md group">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={photo.imageHint}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">View More on Flickr/YouTube (Coming Soon)</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageWrapper>
  );
}
