"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PlacementResultPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData?.user) {
        window.location.href = "/login";
        return;
      }

      const { data, error } = await supabase
        .from("placement_tests")
        .select("*")
        .eq("user_id", userData.user.id)
        .order("created_at", { ascending: false })
        .limit(1);

      if (error || !data || data.length === 0) {
        setError("Результат теста не найден");
        setLoading(false);
        return;
      }

      setData(data[0]);
      setLoading(false);
    } catch (e) {
      setError("Что-то пошло не так");
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Загрузка результата...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => (window.location.href = "/placement")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl"
          >
            Пройти тест заново
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white border rounded-2xl p-8 shadow-sm">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Ваш результат готов
          </h1>
          <p className="text-slate-500 mt-2">
            Мы проанализировали ваш английский
          </p>
        </div>

        {/* LEVEL */}
        <div className="text-center mb-6">
          <div className="text-6xl font-bold text-blue-600">
            {data?.estimated_cefr}
          </div>

          <p className="text-sm text-slate-500 mt-2">
            Уверенность: {data?.confidence_score}%
          </p>
        </div>

        {/* SUMMARY */}
        <div className="bg-slate-50 border rounded-xl p-5 mb-5">
          <p className="font-semibold mb-2">📊 Краткий разбор</p>
          <p className="text-slate-700 leading-relaxed">
            {data?.summary}
          </p>
        </div>

        {/* STRENGTHS */}
        <div className="mb-5">
          <p className="font-semibold mb-2">✅ Сильные стороны</p>

          <div className="space-y-2">
            {data?.strengths?.map((s: string, i: number) => (
              <div
                key={i}
                className="bg-green-50 border border-green-100 rounded-lg p-3"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* WEAKNESSES */}
        <div className="mb-5">
          <p className="font-semibold mb-2">⚠️ Что мешает росту</p>

          <div className="space-y-2">
            {data?.weaknesses?.map((w: string, i: number) => (
              <div
                key={i}
                className="bg-red-50 border border-red-100 rounded-lg p-3"
              >
                {w}
              </div>
            ))}
          </div>
        </div>

        {/* NEXT STEP */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6 text-center">
          <p className="font-semibold">🚀 Следующий уровень</p>
          <p className="text-xl font-bold mt-1">
            {data?.next_level}
          </p>

          <p className="text-sm text-slate-600 mt-2">
            Примерно {data?.hours_to_next_level}
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Начать обучение
        </button>

      </div>
    </main>
  );
}