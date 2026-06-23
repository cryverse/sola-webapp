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
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    const { data } = await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (data) {
      setLevel(data.cefr_level || "A1");
      setProgress(data.cefr_progress || 0);
      setStreak(data.current_streak || 0);
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
    <main className="container py-10">

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