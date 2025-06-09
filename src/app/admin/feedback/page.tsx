// src/app/admin/feedback/page.tsx
import PageWrapper from '@/components/shared/PageWrapper';
import FeedbackForm from './FeedbackForm';
import { BarChartHorizontalBig } from 'lucide-react';

export default function FeedbackAnalyzerPage() {
  return (
    <PageWrapper className="bg-muted/20 min-h-screen">
      <header className="text-center mb-12">
        <BarChartHorizontalBig className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">Feedback Analysis Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Utilize AI to gain insights from user feedback.
        </p>
      </header>
      <div className="max-w-3xl mx-auto">
        <FeedbackForm />
      </div>
    </PageWrapper>
  );
}