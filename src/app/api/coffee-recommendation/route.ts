import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { questions, answers } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a coffee expert helping someone choose the right coffee beans based on their preferences. Based on the following answers, what kind of coffee should they try? Please recommend bean origin, processing method, roast level, and suggested brew method. Answers: ${questions
              .map((q: string, i: number) => `${q} ${answers[i]}`)
              .join(', ')}`,
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      return NextResponse.json(
        { error: 'Error from OpenAI API' },
        { status: 500 }
      );
    }

    return NextResponse.json({ recommendation: data.choices[0].message.content });
  } catch (error) {
    console.error('Error in coffee recommendation route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 