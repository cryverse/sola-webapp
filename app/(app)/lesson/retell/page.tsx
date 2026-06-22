"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RetellPage() {
  const [retell, setRetell] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
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
  "/api/check-retell",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify({
      retell,
    }),
  }
);

const aiData =
  await aiResponse.json();

const { error } = await supabase
  .from("lesson_attempts")
  .insert({
    user_id: user.id,
    lesson_id:
      "business_communication",
    retell_text: retell,
    feedback_json: aiData,
  });

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      window.location.href = "/lesson/feedback";
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Retell The Lesson
      </h1>

      <textarea
        value={retell}
        onChange={(e) => setRetell(e.target.value)}
        className="border rounded-xl p-4 w-full h-64"
        placeholder="Write what you remember..."
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="border rounded-xl px-6 py-3 mt-6"
      >
        {loading ? "Saving..." : "Get Feedback"}
      </button>

    </main>
  );
}