"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [level, setLevel] = useState("A1");
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const { data } = await supabase.auth.getUser();
    const user = data?.user;

    if (!user) {
      router.replace("/login");
      return;
    }

    const levelData = await supabase
      .from("user_levels")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", {
        ascending: false,
      })
      .limit(1)
      .single();

    const streakData = await supabase
      .from("user_streaks")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (levelData.data) {
      setLevel(levelData.data.current_level);
      setProgress(
        levelData.data.progress_percent
      );
    }

    if (streakData.data) {
      setStreak(
        streakData.data.current_streak
      );
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <main className="container py-10">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="container py-10 fade">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="card">
          <p>Level</p>
          <h2 className="text-2xl font-bold">
            {level}
          </h2>
        </div>

        <div className="card">
          <p>Progress</p>
          <h2 className="text-2xl font-bold">
            {progress}%
          </h2>
        </div>

        <div className="card">
          <p>Streak</p>
          <h2 className="text-2xl font-bold">
            {streak} days
          </h2>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <a
          className="card"
          href="/lesson"
        >
          Lesson
        </a>

        <a
          className="card"
          href="/progress"
        >
          Progress
        </a>

        <a
          className="card"
          href="/vocabulary"
        >
          Vocabulary
        </a>

        <a
          className="card"
          href="/subscription"
        >
          Upgrade
        </a>

      </div>

    </main>
  );
}