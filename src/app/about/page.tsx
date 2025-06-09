// src/app/about/page.tsx
import Image from 'next/image';
import PageWrapper from '@/components/shared/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, Users, Eye, BookHeart } from 'lucide-react';
import { BuddhaIcon, LotusIcon } from '@/components/icons';

const testimonials = [
  {
    id: 1,
    name: 'Linh Chen',
    quote: 'Finding Bodhi Hill Temple has been a true blessing. The teachings are profound and the community is so welcoming.',
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
  { id: 1, src: 'https://placehold.co/600x400.png', alt: 'Temple exterior', imageHint: 'temple building' },
  { id: 2, src: 'https://placehold.co/600x400.png', alt: 'Meditation hall', imageHint: 'meditation hall' },
  { id: 3, src: 'https://placehold.co/600x400.png', alt: 'Temple garden', imageHint: 'temple garden' },
  { id: 4, src: 'https://placehold.co/600x400.png', alt: 'Statue of Buddha', imageHint: 'buddha statue' },
  { id: 5, src: 'https://placehold.co/600x400.png', alt: 'Community gathering', imageHint: 'community gathering' },
  { id: 6, src: 'https://placehold.co/600x400.png', alt: 'Prayer wheels', imageHint: 'prayer wheels' },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <header className="text-center mb-12 md:mb-16">
        <LotusIcon className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Bodhi Hill Temple</h1>
        <p className="text-lg text-muted-foreground mt-2">Discover our roots, our guide, and our guiding principles.</p>
      </header>

      {/* Temple History and Founding */}
      <section className="mb-12 md:mb-16">
        <Card className="shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/800x600.png"
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
                Bodhi Hill Temple was founded in [Year] by a group of dedicated practitioners with the vision of creating a spiritual haven for the study and practice of Buddhism. Rooted in the [Buddhist Tradition, e.g., Mahayana] tradition, our temple has grown from humble beginnings into a vibrant center for Dharma in the region.
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
                src="https://placehold.co/800x600.png"
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
                Venerable [Monk's Name] is the spiritual director of Bodhi Hill Temple. With over [Number] years of monastic training and Dharma practice, Venerable [Monk's Name] offers profound teachings and compassionate guidance to the community. Their dedication to spreading the Dharma has inspired countless individuals on their spiritual journeys.
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
          At Bodhi Hill Temple, our mission is to provide a supportive and authentic environment for the study, practice, and realization of Buddhist teachings. We strive to cultivate wisdom, compassion, and inner peace within individuals and the broader community. We are guided by the core tenets of [mention specific principles, e.g., the Four Noble Truths, the Eightfold Path] and aim to make these timeless teachings accessible to all.
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
      <section>
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
    </PageWrapper>
  );
}
