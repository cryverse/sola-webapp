"use client";

import { useState } from "react";
import { placementQuestions } from "@/lib/placementQuestions";
import QuestionCard from "@/app/placement-test/components/QuestionCard";


export default function PlacementTestPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [answers, setAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const question = placementQuestions[current]!;

  function handleNext() {
    const answer =
      question.type === "writing"
        ? textAnswer
        : selected;

    const newAnswers = [
      ...answers,
      {
        id: question.id,
        type: question.type,
        question: question.question,
        answer,
      },
    ];

    setAnswers(newAnswers);
    setSelected(null);
    setTextAnswer("");

    if (current + 1 >= placementQuestions.length) {
      finishTest(newAnswers);
      return;
    }

    setCurrent(current + 1);
  }

  async function finishTest(finalAnswers: any[]) {
    try {
      setLoading(true);

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

      setResult(data);

      setTimeout(() => {
        window.location.href = "/placement-result";
      }, 800);
    } catch (e) {
      console.error(e);
      alert("Error sending test");
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Redirecting...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Placement Test
        </h1>

        <div className="mb-6 text-center text-sm text-slate-500">
          Question {current + 1} / {placementQuestions.length}
        </div>

        <QuestionCard
  question={question as any}
  selected={selected}
  textAnswer={textAnswer}
  onSelect={setSelected}
  onTextChange={setTextAnswer}
/>

        <button
          onClick={handleNext}
          disabled={
            question.type === "writing"
              ? textAnswer.trim().length < 5
              : selected === null
          }
          className="w-full mt-6 py-4 rounded-xl bg-blue-600 text-white font-semibold disabled:opacity-40"
        >
          {loading
            ? "Checking..."
            : current === placementQuestions.length - 1
            ? "Finish"
            : "Next"}
        </button>

      </div>
    </main>
  );
}