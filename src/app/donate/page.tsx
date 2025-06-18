// src/app/donate/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/shared/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartHandshake, Building, PiggyBank, Users, Gift, BarChart3 } from 'lucide-react';
import { useState } from 'react';

const donationAmounts = [25, 50, 100, 250];

export default function DonationsPage() {
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const handleDonate = () => {
    const amountToDonate = selectedAmount || parseFloat(customAmount) || 0;
    if (amountToDonate <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }
    // In a real app, this would redirect to a payment processor like Stripe or PayPal
    alert(`Thank you for your donation of $${amountToDonate}${isRecurring ? ' (recurring)' : ''}! (Payment processing not implemented)`);
  };

  return (
    <PageWrapper>
      <header className="text-center mb-12 md:mb-16">
        <HeartHandshake className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Support Vien Quang Temple</h1>
        <p className="text-lg text-muted-foreground mt-2">Your generosity helps us share wisdom, compassion, and peace.</p>
      </header>

      <Tabs defaultValue="general" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
          <TabsTrigger value="general">General Operating Expenses</TabsTrigger>
          <TabsTrigger value="building">Temple Building Fund</TabsTrigger>
          <TabsTrigger value="projects">Specific Projects</TabsTrigger>
        </TabsList>

        <Card className="shadow-xl p-6 md:p-8">
          <TabsContent value="general">
            <div className="flex items-center gap-3 mb-4">
              <PiggyBank className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-headline font-semibold text-foreground">General Operating Expenses</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Your contributions to our general fund help cover daily operational costs, utility bills, maintenance, and support for our monastic community. This ensures the temple remains a welcoming sanctuary for all.
            </p>
          </TabsContent>
          <TabsContent value="building">
             <div className="flex items-center gap-3 mb-4">
                <Building className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-headline font-semibold text-foreground">Temple Building & Expansion Fund</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Help us grow and improve our facilities. Donations to this fund support construction, renovations, and expansion projects to better serve our growing community and enhance our spaces for practice and learning.
            </p>
          </TabsContent>
          <TabsContent value="projects">
             <div className="flex items-center gap-3 mb-4">
                <Gift className="h-10 w-10 text-primary" />
                <h2 className="text-3xl font-headline font-semibold text-foreground">Specific Project Funding</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Support a specific initiative close to your heart, such as our community outreach programs, Dharma book printing, or technology upgrades for online teachings. (Details on current projects will be listed here).
            </p>
          </TabsContent>

          {/* Donation Form Area */}
          <div className="space-y-6 mt-6 border-t pt-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">Choose Your Donation Amount</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {donationAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? 'default' : 'outline'}
                  size="lg"
                  className={`py-6 text-lg ${selectedAmount === amount ? 'bg-primary text-primary-foreground' : 'border-primary text-primary hover:bg-primary/10'}`}
                  onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                >
                  ${amount}
                </Button>
              ))}
            </div>
            <div>
              <Label htmlFor="customAmount" className="text-sm font-medium text-foreground">Or Enter Custom Amount:</Label>
              <Input
                id="customAmount"
                type="number"
                placeholder="e.g., 75"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null);}}
                className="mt-1 text-lg"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="recurring" checked={isRecurring} onCheckedChange={(checked) => setIsRecurring(checked as boolean)} />
              <Label htmlFor="recurring" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Make this a monthly recurring donation
              </Label>
            </div>
            <Button onClick={handleDonate} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xl py-8 shadow-md hover:shadow-lg transition-all">
              Donate Now
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">Secure payment processing via Stripe/PayPal (coming soon). All donations are tax-deductible as allowed by law.</p>
          </div>
        </Card>
      </Tabs>
      

      {/* Donor Recognition & Transparency */}
      <section className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Donor Recognition</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We are deeply grateful for every contribution. Special recognition options are available:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>Virtual Brick Wall: A digital space to honor our supporters (coming soon).</li>
              <li>Business Sponsors: Opportunities for businesses to support our mission and be acknowledged.</li>
            </ul>
            <Image src="https://placehold.co/600x300.png" alt="Placeholder for virtual brick wall" width={600} height={300} className="mt-4 rounded-md" data-ai-hint="donation recognition" />
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Transparency Reports</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We are committed to transparency in how donations are utilized. Annual reports on fund usage will be made available here.
            </p>
            <Button variant="outline" asChild>
              <Link href="#">View Past Reports (Coming Soon)</Link>
            </Button>
             <Image src="https://placehold.co/600x300.png" alt="Placeholder for transparency report" width={600} height={300} className="mt-4 rounded-md" data-ai-hint="financial report graph" />
          </CardContent>
        </Card>
      </section>
    </PageWrapper>
  );
}
