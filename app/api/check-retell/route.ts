import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const retell = body.retell;

    const response = await openai.responses.create({
      model: "gpt-5.4-mini",
      input: `
You are an IELTS and CEFR English examiner.

Analyze the student's retelling.

Return ONLY valid JSON.

{
  "estimated_level":"A1",
  "grammar_score":0,
  "vocabulary_score":0,
  "feedback":""
}

Student retelling:

${retell}
`,
    });

    const result = JSON.parse(
      response.output_text
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        estimated_level: "Unknown",
        grammar_score: 0,
        vocabulary_score: 0,
        feedback:
          "Failed to generate feedback",
      },
      {
        status: 500,
      }
    );
  }
}