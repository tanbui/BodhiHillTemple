// This file uses server-side code.
'use server';

/**
 * @fileOverview A feedback analyzer AI agent.
 *
 * - analyzeFeedback - A function that handles the feedback analysis process.
 * - AnalyzeFeedbackInput - The input type for the analyzeFeedback function.
 * - AnalyzeFeedbackOutput - The return type for the analyzeFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeFeedbackInputSchema = z.object({
  feedback: z.string().describe('The user feedback to analyze.'),
});
export type AnalyzeFeedbackInput = z.infer<typeof AnalyzeFeedbackInputSchema>;

const AnalyzeFeedbackOutputSchema = z.object({
  summary: z.string().describe('A summary of the user feedback.'),
  sentiment: z.string().describe('The overall sentiment of the feedback (positive, negative, or neutral).'),
  keyTopics: z.array(z.string()).describe('A list of key topics mentioned in the feedback.'),
  suggestions: z.array(z.string()).describe('A list of suggestions for improvement based on the feedback.'),
});
export type AnalyzeFeedbackOutput = z.infer<typeof AnalyzeFeedbackOutputSchema>;

export async function analyzeFeedback(input: AnalyzeFeedbackInput): Promise<AnalyzeFeedbackOutput> {
  return analyzeFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeFeedbackPrompt',
  input: {schema: AnalyzeFeedbackInputSchema},
  output: {schema: AnalyzeFeedbackOutputSchema},
  prompt: `You are a feedback analysis expert. Analyze the following user feedback and provide a summary, sentiment, key topics, and suggestions for improvement.

Feedback: {{{feedback}}}

Respond in JSON format.
Make sure sentiment is one of "positive", "negative", or "neutral".`,
});

const analyzeFeedbackFlow = ai.defineFlow(
  {
    name: 'analyzeFeedbackFlow',
    inputSchema: AnalyzeFeedbackInputSchema,
    outputSchema: AnalyzeFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
