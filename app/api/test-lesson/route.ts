import OpenAI from "openai";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(req: Request) {
  try {
    const userId =
      new URL(req.url).searchParams.get(
        "userId"
      );

    let level = "A1";

    if (userId) {
      const { data } = await supabase
        .from("user_levels")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", {
          ascending: false,
        })
        .limit(1)
        .single();

      if (data?.current_level) {
        level = data.current_level;
      }
    }

    const response =
      await openai.responses.create({
        model: "gpt-5.4-mini",
        input: `
Create an English lesson.

Level: ${level}
Topic: Startups

Requirements:
- Lesson title
- 200-300 words
- Appropriate for the level
- Useful vocabulary
`,
      });

    return NextResponse.json({
      title: "AI Generated Lesson",
      level,
      text: response.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      title: "Error",
      level: "Unknown",
      text: "Failed to generate lesson",
    });
  }
}