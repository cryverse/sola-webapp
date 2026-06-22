"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FeedbackPage() {
  const [attempt, setAttempt] = useState<any>(null);

  useEffect(() => {
    loadAttempt();
  }, []);

  async function loadAttempt() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("lesson_attempts")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", {
        ascending: false,
      })
      .limit(1)
      .single();

    setAttempt(data);
  }

  if (!attempt) {
    return (
      <div className="p-8">
        Loading feedback...
      </div>
    );
  }

  const feedback = attempt.feedback_json;

  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        AI Feedback
      </h1>

      <div className="border rounded-xl p-6 mb-6">
        <h2 className="font-bold mb-2">
          Your Retell
        </h2>

        <p>{attempt.retell_text}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <div className="border rounded-xl p-6">
          <p className="text-sm text-slate-500">
            Estimated Level
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {feedback?.estimated_level}
          </h2>
        </div>

        <div className="border rounded-xl p-6">
          <p className="text-sm text-slate-500">
            Grammar
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {feedback?.grammar_score}/10
          </h2>
        </div>

        <div className="border rounded-xl p-6">
          <p className="text-sm text-slate-500">
            Vocabulary
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {feedback?.vocabulary_score}/10
          </h2>
        </div>

      </div>

      <div className="border rounded-xl p-6">

        <h2 className="font-bold mb-4">
          AI Feedback
        </h2>

        <p>
          {feedback?.feedback}
        </p>

      </div>

      <button
        className="border rounded-xl px-6 py-3 mt-6"
        onClick={() => {
          window.location.href =
            "/dashboard";
        }}
      >
        Back To Dashboard
      </button>

    </main>
  );
}