import { FormData } from '@/types';

export const sendEmail = async (data: FormData) => {
  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    // Assert error as Error type
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return { success: false, error: error.message };
    } else {
      console.error('Unknown error:', error);
      return { success: false, error: 'An unknown error occurred' };
    }
  }
};
