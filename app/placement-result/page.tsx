"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PlacementResultPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data: userData } = await supabase.auth.getUser();

    if (!userData?.user) {
      window.location.href = "/login";
      return;
    }

    const { data } = await supabase
      .from("placement_tests")
      .select("*")
      .eq("user_id", userData.user.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    setData(data);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Загрузка...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="max-w-2xl w-full bg-white border rounded-2xl p-10 text-center shadow-sm">

        <h1 className="text-3xl font-bold mb-4">
          Ваш результат готов
        </h1>

        <p className="text-slate-500 mb-6">
          Определённый уровень английского:
        </p>

        <div className="text-6xl font-bold mb-6 text-blue-600">
          {data?.estimated_cefr}
        </div>

        <div className="bg-slate-50 border rounded-xl p-4 mb-6 text-left">
          <p className="font-semibold mb-2">Анализ:</p>
          <p className="text-slate-600">{data?.reason}</p>
        </div>

        <p className="text-sm text-slate-400 mb-6">
          Уверенность AI: {data?.confidence_score}%
        </p>

        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Перейти на главную страницу
        </button>

      </div>

    </main>
  );
}