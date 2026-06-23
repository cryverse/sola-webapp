"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProgressPage() {
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    loadProgress();
  }, []);

  async function loadProgress() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user.id)
      .single();

    setProgress(data);
  }

  return (
    <main className="max-w-5xl mx-auto p-8">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Progress
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border rounded-xl p-6">
          <p>Current Level</p>

          <h2 className="text-3xl font-bold">
            {progress?.cefr_level || "A1"}
          </h2>
        </div>

        <div className="border rounded-xl p-6">
          <p>Progress</p>

          <h2 className="text-3xl font-bold">
            {progress?.cefr_progress || 0}%
          </h2>
        </div>

        <div className="border rounded-xl p-6">
          <p>Streak</p>

          <h2 className="text-3xl font-bold">
            {progress?.current_streak || 0}
          </h2>
        </div>

      </div>

      <div className="border rounded-xl p-6 mt-8">

        <h2 className="text-xl font-bold mb-4">
          Statistics
        </h2>

        <div className="space-y-3">

          <p>
            Lessons:
            {" "}
            {progress?.completed_sessions || 0}
          </p>

          <p>
            Minutes:
            {" "}
            {progress?.total_minutes || 0}
          </p>

          <p>
            Best Streak:
            {" "}
            {progress?.best_streak || 0}
          </p>

        </div>

      </div>

    </main>
  );
}