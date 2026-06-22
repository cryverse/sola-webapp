"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { createInitialUserData } from "./actions";

export default function OnboardingPage() {
  const [goal, setGoal] = useState("");
  const [minutes, setMinutes] = useState("");
  const [loading, setLoading] = useState(false);

  const interests = [
    "Business",
    "Startups",
    "Technology",
    "Finance",
    "Travel",
    "Sports",
    "Psychology",
    "Self Development",
    "Science",
    "History",
  ];

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  function toggleInterest(interest: string) {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((i) => i !== interest)
      );
    } else {
      if (selectedInterests.length < 5) {
        setSelectedInterests([
          ...selectedInterests,
          interest,
        ]);
      }
    }
  }

  async function handleContinue() {
    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("User not found");
        return;
      }

      const { error } = await supabase
        .from("user_preferences")
        .upsert({
          user_id: user.id,
          goal,
          interests: selectedInterests,
          daily_minutes: Number(minutes),
        });

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      await createInitialUserData(user.id);

      window.location.href = "/placement-test";
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Welcome to Sola
      </h1>

      <div className="space-y-8">

        <div>
          <h2 className="font-semibold mb-3">
            Why are you learning English?
          </h2>

          <select
            className="border p-3 rounded w-full"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">Choose</option>
            <option>Work</option>
            <option>Study</option>
            <option>Business</option>
            <option>Travel</option>
            <option>Relocation</option>
            <option>Communication</option>
          </select>
        </div>

        <div>
          <h2 className="font-semibold mb-3">
            Interests (max 5)
          </h2>

          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`border rounded px-4 py-2 ${
                  selectedInterests.includes(interest)
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-3">
            Daily study time
          </h2>

          <select
            className="border p-3 rounded w-full"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          >
            <option value="">Choose</option>
            <option value="15">15 min</option>
            <option value="30">30 min</option>
            <option value="60">60 min</option>
            <option value="120">120+ min</option>
          </select>
        </div>

        <button
          disabled={loading}
          className="border rounded p-4 w-full"
          onClick={handleContinue}
        >
          {loading ? "Saving..." : "Continue"}
        </button>

      </div>

    </main>
  );
}