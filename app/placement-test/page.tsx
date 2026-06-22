"use client";

import { useState } from "react";
import { placementQuestions } from "@/lib/placementQuestions";
import { supabase } from "@/lib/supabase";

export default function PlacementTestPage() {
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [currentAnswer, setCurrentAnswer] =
    useState("");

  const [answers, setAnswers] = useState<any[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<any>(null);

  const question =
    placementQuestions[currentQuestion];

  async function handleNext() {
    const newAnswers = [
      ...answers,
      {
        question: question.question,
        answer: currentAnswer,
      },
    ];

    if (
      currentQuestion <
      placementQuestions.length - 1
    ) {
      setAnswers(newAnswers);
      setCurrentAnswer("");
      setCurrentQuestion(
        currentQuestion + 1
      );
      return;
    }

    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("User not found");
        return;
      }

      const aiResponse = await fetch(
        "/api/check-placement",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            answers: newAnswers,
          }),
        }
      );

      const aiData =
        await aiResponse.json();

      await supabase
        .from("placement_tests")
        .insert({
          user_id: user.id,
          estimated_cefr:
            aiData.estimated_cefr,
          estimated_sublevel:
            aiData.estimated_sublevel,
          confidence_score:
            aiData.confidence_score,
          answers: newAnswers,
        });

      await supabase
        .from("user_levels")
        .update({
          current_level:
            aiData.estimated_cefr,
          progress_percent: 0,
        })
        .eq("user_id", user.id);

      setResult(aiData);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <main className="max-w-3xl mx-auto p-8">

        <div className="border rounded-2xl p-8 text-center">

          <h1 className="text-4xl font-bold mb-4">
            Your Level
          </h1>

          <div className="text-6xl font-bold mb-4">
            {result.estimated_cefr}
          </div>

          <p className="mb-4">
            Confidence:
            {" "}
            {result.confidence_score}%
          </p>

          <div className="border rounded-xl p-4 mb-6 text-left">

            <p className="font-semibold mb-2">
              AI Analysis
            </p>

            <p>
              {result.reason}
            </p>

          </div>

          <button
            onClick={() => {
              window.location.href =
                "/dashboard";
            }}
            className="border rounded px-6 py-3"
          >
            Go To Dashboard
          </button>

        </div>

      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Placement Test
      </h1>

      <div className="border rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          Question {currentQuestion + 1}/
          {placementQuestions.length}
        </h2>

        <p className="text-lg mb-6">
          {question.question}
        </p>

        <textarea
          value={currentAnswer}
          onChange={(e) =>
            setCurrentAnswer(
              e.target.value
            )
          }
          className="border rounded w-full p-4 h-40"
          placeholder="Write your answer..."
        />

        <button
          className="mt-6 border rounded px-6 py-3"
          onClick={handleNext}
          disabled={loading}
        >
          {loading
            ? "Analyzing..."
            : currentQuestion ===
              placementQuestions.length - 1
            ? "Finish Test"
            : "Next"}
        </button>

      </div>

    </main>
  );
}