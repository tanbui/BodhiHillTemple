// src/app/admin/feedback/actions.ts
'use server';

import { analyzeFeedback as analyzeFeedbackFlow, type AnalyzeFeedbackInput, type AnalyzeFeedbackOutput } from '@/ai/flows/feedback-analyzer';

export async function handleFeedbackAnalysis(input: AnalyzeFeedbackInput): Promise<AnalyzeFeedbackOutput | { error: string }> {
  try {
    const result = await analyzeFeedbackFlow(input);
    return result;
  } catch (error) {
    console.error('Error analyzing feedback:', error);
    // It's good practice to not expose raw error messages to the client
    // For a production app, log this error and return a generic message
    return { error: 'An error occurred while analyzing feedback. Please try again later.' };
  }
}
