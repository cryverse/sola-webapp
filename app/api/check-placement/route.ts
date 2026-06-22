import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const answers = body.answers;

    const response = await openai.responses.create({
      model: "gpt-5.4-mini",
      input: `
You are a CEFR English examiner.

Analyze the student's answers.

Return ONLY valid JSON.

{
  "estimated_cefr":"A1",
  "estimated_sublevel":"A1.1",
  "confidence_score":50,
  "reason":""
}

Student answers:

${JSON.stringify(answers)}
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
        estimated_cefr: "A1",
        estimated_sublevel: "A1.1",
        confidence_score: 50,
        reason: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}