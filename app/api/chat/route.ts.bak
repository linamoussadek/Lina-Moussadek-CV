import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for Lina Moussadek's portfolio website. You can answer questions about Lina's skills, experience, projects, and help visitors understand her work better. Keep responses concise and professional."
        },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    return NextResponse.json(
      { message: completion.choices[0].message },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in chat:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
} 