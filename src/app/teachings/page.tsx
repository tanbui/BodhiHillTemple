// src/app/teachings/page.tsx
import Image from 'next/image';
import PageWrapper from '@/components/shared/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, Video, BookOpenText, Download, Mic2 } from 'lucide-react';
import Link from 'next/link';
import { LotusIcon } from '@/components/icons';

const mantras = [
  { id: 1, name: 'Om Mani Padme Hum', description: 'The mantra of compassion.', audioSrc: '#', textSrc: '#' },
  { id: 2, name: 'Namo Amitabha Buddha', description: 'Homage to Amitabha Buddha.', audioSrc: '#', textSrc: '#' },
  { id: 3, name: 'Great Compassion Mantra (Da Bei Zhou)', description: 'A powerful mantra for purification and blessings.', audioSrc: '#', textSrc: '#' },
];

const videoLibrary = [
  { id: 1, title: 'The Four Noble Truths Explained', speaker: 'Venerable Thich Tam Thien', duration: '45 min', image: 'https://placehold.co/600x338.png', imageHint: 'dharma lecture video' },
  { id: 2, title: 'Guided Meditation for Beginners', speaker: 'Lay Teacher Ananda', duration: '20 min', image: 'https://placehold.co/600x338.png', imageHint: 'meditation guide video' },
  { id: 3, title: 'Highlights from Vesak Celebration 2024', speaker: 'Temple Event', duration: '15 min', image: 'https://placehold.co/600x338.png', imageHint: 'temple event video' },
];

const articles = [
  { id: 1, title: 'Finding Peace in a Hectic World', date: 'October 15, 2024', excerpt: 'Practical tips from Buddhist philosophy to maintain calm amidst chaos...', image: 'https://placehold.co/600x400.png', imageHint: 'peaceful scene' },
  { id: 2, title: 'The Bodhisattva Path of Service', date: 'October 1, 2024', excerpt: 'Understanding the altruistic ideal of a Bodhisattva and how to embody it...', image: 'https://placehold.co/600x400.png', imageHint: 'helping hands' },
  { id: 3, title: 'Benefits of Daily Meditation', date: 'September 20, 2024', excerpt: 'Scientific and spiritual insights into the transformative power of meditation.', image: 'https://placehold.co/600x400.png', imageHint: 'meditation silhouette' },
];

const downloads = [
  { id: 1, title: 'Introduction to Buddhism (PDF)', description: 'A beginner-friendly guide to core Buddhist concepts.' },
  { id: 2, title: 'Loving-Kindness Meditation Audio (MP3)', description: 'Guided audio for Metta meditation.' },
  { id: 3, title: 'Daily Chants Booklet (PDF)', description: 'Common chants used in temple services.' },
];

export default function TeachingsPage() {
  return (
    <PageWrapper>
      <header className="text-center mb-12 md:mb-16">
        <LotusIcon className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Teachings & Resources</h1>
        <p className="text-lg text-muted-foreground mt-2">Nourish your mind and spirit with the wisdom of the Dharma.</p>
      </header>

      <Tabs defaultValue="mantras" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="mantras">Mantras</TabsTrigger>
          <TabsTrigger value="videos">Video Library</TabsTrigger>
          <TabsTrigger value="articles">Blog/Articles</TabsTrigger>
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
        </TabsList>

        {/* Mantras Section */}
        <TabsContent value="mantras">
          <Card className="shadow-lg">
            <CardHeader>
               <div className="flex items-center gap-3">
                <Music className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-3xl">Sacred Mantras</CardTitle>
              </div>
              <CardDescription>Listen, recite, and learn the significance of these powerful sounds.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {mantras.map((mantra) => (
                  <li key={mantra.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-background/50">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{mantra.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{mantra.description}</p>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" onClick={() => alert('Audio playback not implemented.')}><Mic2 className="mr-2 h-4 w-4" /> Play Audio</Button>
                      <Button variant="outline" size="sm" onClick={() => alert('Text view not implemented.')}><BookOpenText className="mr-2 h-4 w-4" /> View Text & Guide</Button>
                    </div>
                     <p className="text-xs text-muted-foreground mt-2"><em>(Text versions in multiple languages & pronunciation guides coming soon)</em></p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Video Library Section */}
        <TabsContent value="videos">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Video className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-3xl">Video Library</CardTitle>
              </div>
              <CardDescription>Dharma talks, meditation instructions, and ceremonial recordings.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoLibrary.map((video) => (
                  <Card key={video.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-video">
                      <Image src={video.image} alt={video.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" data-ai-hint={video.imageHint} />
                       <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Video className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1 truncate">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">By: {video.speaker}</p>
                      <p className="text-sm text-muted-foreground">Duration: {video.duration}</p>
                       <Button variant="link" className="text-primary p-0 mt-2" onClick={() => alert('Video playback not implemented.')}>Watch Video →</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blog/Articles Section */}
        <TabsContent value="articles">
          <Card className="shadow-lg">
            <CardHeader>
               <div className="flex items-center gap-3">
                <BookOpenText className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-3xl">Wisdom & Insights</CardTitle>
              </div>
              <CardDescription>Weekly teachings, Buddhist philosophy, and practical life applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Card key={article.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col">
                     <Image src={article.image} alt={article.title} width={600} height={300} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" data-ai-hint={article.imageHint} />
                    <div className="p-6 flex flex-col flex-grow">
                      <CardTitle className="font-headline text-xl mb-2">{article.title}</CardTitle>
                      <CardDescription className="text-xs mb-2">{article.date}</CardDescription>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{article.excerpt}</p>
                      <Button variant="outline" asChild>
                        <Link href="#">Read Full Article</Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Downloads Section */}
        <TabsContent value="downloads">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Download className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-3xl">Downloadable Resources</CardTitle>
              </div>
              <CardDescription>PDFs of teachings and audio files for offline listening.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {downloads.map((item) => (
                  <li key={item.id} className="p-4 border rounded-lg flex justify-between items-center hover:shadow-md transition-shadow bg-background/50">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Button variant="secondary" onClick={() => alert('Download not implemented.')}><Download className="mr-2 h-4 w-4" /> Download</Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageWrapper>
  );
}