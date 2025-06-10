// src/app/admin/feedback/FeedbackForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, CheckCircle, AlertCircle, Lightbulb, BarChart2, Smile, Frown, Meh } from 'lucide-react';
import type { AnalyzeFeedbackOutput } from '@/ai/flows/feedback-analyzer';
import { handleFeedbackAnalysis } from './actions';

const feedbackSchema = z.object({
  feedbackText: z.string().min(10, { message: 'Feedback must be at least 10 characters long.' }),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

export default function FeedbackForm() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeFeedbackOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedbackText: '',
    },
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    const result = await handleFeedbackAnalysis({ feedback: data.feedbackText });

    if ('error' in result) {
      setError(result.error);
    } else {
      setAnalysisResult(result);
    }
    setIsLoading(false);
  };
  
  const renderSentimentIcon = (sentiment: string) => {
    if (sentiment.toLowerCase() === 'positive') return <Smile className="h-5 w-5 text-green-500" />;
    if (sentiment.toLowerCase() === 'negative') return <Frown className="h-5 w-5 text-red-500" />;
    if (sentiment.toLowerCase() === 'neutral') return <Meh className="h-5 w-5 text-yellow-500" />;
    return null;
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Feedback Analyzer Tool</CardTitle>
          <CardDescription>Enter user feedback below to get an AI-powered analysis including summary, sentiment, key topics, and suggestions.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <FormField
                control={form.control}
                name="feedbackText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="feedbackText">User Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        id="feedbackText"
                        placeholder="Paste or type user feedback here..."
                        className="min-h-[150px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Feedback'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {error && (
        <Alert variant="destructive" className="shadow-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {analysisResult && (
        <Card className="shadow-lg animate-subtle-fade-in">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Analysis Complete
            </CardTitle>
            <CardDescription>Here's the breakdown of the feedback provided:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                Summary
              </h3>
              <p className="text-muted-foreground bg-muted/30 p-3 rounded-md">{analysisResult.summary}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                {renderSentimentIcon(analysisResult.sentiment)}
                Sentiment
              </h3>
              <p className="text-muted-foreground bg-muted/30 p-3 rounded-md capitalize">{analysisResult.sentiment}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Key Topics
              </h3>
              {analysisResult.keyTopics.length > 0 ? (
                <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2 bg-muted/30 p-3 rounded-md">
                  {analysisResult.keyTopics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground bg-muted/30 p-3 rounded-md">No specific key topics identified.</p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Suggestions
              </h3>
              {analysisResult.suggestions.length > 0 ? (
                <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2 bg-muted/30 p-3 rounded-md">
                  {analysisResult.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground bg-muted/30 p-3 rounded-md">No specific suggestions identified.</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
