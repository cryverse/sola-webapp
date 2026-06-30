import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();

    const response = await openai.responses.create({
      model: "gpt-5.4-mini",
      input: `
You are a strict CEFR examiner.

Return ONLY valid JSON. No markdown. No extra text.

Schema:
{
  "estimated_cefr": "A1 | A2 | B1 | B2 | C1",
  "estimated_sublevel": "string",
  "confidence_score": number,
  "summary": "short explanation in Russian",
  "strengths": ["max 5 items"],
  "weaknesses": ["max 5 items"],
  "next_level": "A2 or B1 etc",
  "hours_to_next_level": "25-40 hours"
}

Rules:
- Be strict
- No formatting
- No comments
- JSON only

Student answers:
${JSON.stringify(answers)}
      `.trim(),
    });

    const raw = response.output_text?.trim();

    if (!raw) {
      throw new Error("Empty response from OpenAI");
    }

    let result;

    try {
      result = JSON.parse(raw);
    } catch (e) {
      console.log("RAW RESPONSE:", raw);

      return NextResponse.json({
        estimated_cefr: "A1",
        estimated_sublevel: "A1.1",
        confidence_score: 50,
        summary: "Ошибка парсинга ответа AI",
        strengths: [],
        weaknesses: [],
        next_level: "A2",
        hours_to_next_level: "25-40 часов",
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      estimated_cefr: "A1",
      estimated_sublevel: "A1.1",
      confidence_score: 50,
      summary: "Ошибка сервера",
      strengths: [],
      weaknesses: [],
      next_level: "A2",
      hours_to_next_level: "25-40 часов",
    });
  }
}