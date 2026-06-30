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
Ты экзаменатор CEFR.

Верни ТОЛЬКО JSON БЕЗ ТЕКСТА И БЕЗ MARKDOWN:

{
  "estimated_cefr": "A1",
  "estimated_sublevel": "A1.1",
  "confidence_score": 50,
  "reason": "кратко на русском"
}

Ответь строго по формату.

Ответы студента:
${JSON.stringify(answers)}
`,
    });

    const raw = response.output_text;

    let result;

    try {
      result = JSON.parse(raw);
    } catch (e) {
      console.log("RAW:", raw);

      return NextResponse.json({
        estimated_cefr: "A1",
        estimated_sublevel: "A1.1",
        confidence_score: 50,
        reason: "Ошибка парсинга ответа AI",
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      estimated_cefr: "A1",
      estimated_sublevel: "A1.1",
      confidence_score: 50,
      reason: "Ошибка сервера",
    });
  }
}