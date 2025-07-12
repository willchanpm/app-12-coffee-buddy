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
              content: `You are a coffee expert. Consider ALL these origins when making recommendations:
- Central America: Guatemala, Costa Rica, Honduras, Nicaragua, Panama
- South America: Colombia, Brazil, Peru, Ecuador, Bolivia
- Africa: Ethiopia, Kenya, Tanzania, Uganda, Rwanda, Burundi, Yemen
- Asia: Indonesia (Sumatra, Java, Sulawesi), Vietnam, India, Thailand, Philippines
- Pacific: Hawaii, Papua New Guinea, Timor-Leste

Based on the user's answers, provide a personalized coffee recommendation in the following structured format:

## Recommended Coffee
[Your specific coffee recommendation with origin, roast level, and why it matches their preferences]

## Origin Details
[Information about the coffee's origin region and what makes it special]

## Roast Profile
[Details about the roast level and flavor characteristics]

## Brewing Method
[Recommended brewing method with brief instructions]

## Flavor Notes
[Expected flavor profile and tasting notes]

## Why This Coffee for You
[Personalized explanation of why this coffee matches their preferences]

Be specific and detailed in each section.`,
            },
            {
              role: 'user',
              content: `Here are my coffee preferences:

${questions.map((question: string, index: number) => `Question ${index + 1}: ${question}
Answer: ${answers[index]}`).join('\n\n')}

Please recommend the perfect coffee for me based on these preferences.`,
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