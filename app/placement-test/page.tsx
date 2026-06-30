"use client";

import { useState } from "react";
import { placementQuestions } from "@/lib/placementQuestions";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import { supabase } from "@/lib/supabase";

export default function PlacementTestPage() {
  const [current, setCurrent] = useState(0);

  const [selected, setSelected] = useState<number | null>(null);
  const [textAnswer, setTextAnswer] = useState("");

  const [answers, setAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const question = placementQuestions[current];
  const total = placementQuestions.length;

  function handleNext() {
    const newAnswers = [
      ...answers,
      {
        id: question.id,
        type: question.type,
        question: question.question,
        answer:
          question.type === "writing"
            ? textAnswer
            : selected,
      },
    ];

    setAnswers(newAnswers);

    setSelected(null);
    setTextAnswer("");

    if (current < total - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      submitTest(newAnswers);
    }
  }

  async function submitTest(finalAnswers: any[]) {
    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      const res = await fetch("/api/check-placement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: finalAnswers,
        }),
      });

      const data = await res.json();

      await supabase.from("placement_tests").insert({
        user_id: user.id,
        estimated_cefr: data.estimated_cefr,
        estimated_sublevel: data.estimated_sublevel,
        confidence_score: data.confidence_score,
        answers: finalAnswers,
      });

      await supabase
        .from("profiles")
        .update({
          current_cefr: data.estimated_cefr,
          current_sublevel: data.estimated_sublevel,
        })
        .eq("id", user.id);

      window.location.href = "/placement-result";
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xl font-semibold">
            Проверяем ваши ответы...
          </p>
          <p className="text-slate-500 mt-2">
            Это займёт несколько секунд
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Placement Test
        </h1>

        {/* PROGRESS */}
        <ProgressBar current={current + 1} total={total} />

        {/* TYPE LABEL */}
        <div className="text-sm text-slate-500 mb-2">
          {question.type === "grammar" && "Грамматика"}
          {question.type === "vocabulary" && "Словарный запас"}
          {question.type === "listening" && "Аудирование"}
          {question.type === "writing" && "Письмо"}
        </div>

        {/* QUESTION */}
        <QuestionCard
  question={question as any}
  selected={selected}
  textAnswer={textAnswer}
  onSelect={setSelected}
  onTextChange={setTextAnswer}
/>

        {/* BUTTON */}
        <button
          onClick={handleNext}
          disabled={
            question.type === "writing"
              ? textAnswer.trim().length < 5
              : selected === null
          }
          className={`w-full mt-6 py-4 rounded-xl font-semibold transition
            ${
              (question.type === "writing"
                ? textAnswer.trim().length < 5
                : selected === null)
                ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {current === total - 1 ? "Завершить тест" : "Далее"}
        </button>

      </div>
    </main>
  );
}

