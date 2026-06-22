"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PlacementResultPage() {
  const [level, setLevel] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResult();
  }, []);

  async function loadResult() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    const { data } = await supabase
      .from("placement_tests")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (data) {
      setLevel(data.estimated_cefr);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <main className="max-w-3xl mx-auto p-8">
        Loading...
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-8">

      <div className="border rounded-2xl p-10 text-center">

        <h1 className="text-4xl font-bold mb-6">
          Placement Complete
        </h1>

        <p className="text-slate-500 mb-4">
          Your estimated English level:
        </p>

        <div className="text-6xl font-bold mb-8">
          {level}
        </div>

        <p className="mb-8">
          Sola will now personalize your lessons,
          vocabulary and speaking sessions.
        </p>

        <button
          onClick={() =>
            (window.location.href = "/dashboard")
          }
          className="border rounded-xl px-8 py-4"
        >
          Continue To Dashboard
        </button>

      </div>

    </main>
  );
}