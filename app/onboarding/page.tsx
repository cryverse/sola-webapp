"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { createInitialUserData } from "./actions";

const goals = [
  { id: "work", icon: "💼", title: "Работа", description: "Получить новую работу или повышение" },
  { id: "study", icon: "🎓", title: "Учёба", description: "Университет, экзамены и образование" },
  { id: "business", icon: "💰", title: "Бизнес", description: "Переговоры, проекты и предпринимательство" },
  { id: "travel", icon: "✈️", title: "Путешествия", description: "Свободно говорить за границей" },
  { id: "relocation", icon: "🌍", title: "Переезд", description: "Подготовка к жизни в другой стране" },
  { id: "communication", icon: "💬", title: "Для себя", description: "Смотреть фильмы, книги и общение" },
];

const interests = [
  "💼 Бизнес",
  "🚀 Стартапы",
  "🤖 Искусственный интеллект",
  "💸 Финансы",
  "📈 Инвестиции",
  "💻 Программирование",
  "🎮 Игры",
  "🎬 Фильмы",
  "🎵 Музыка",
  "⚽ Спорт",
  "✈️ Путешествия",
  "🧠 Психология",
  "📚 История",
  "🔬 Наука",
  "🏋️ Саморазвитие",
  "🌎 Политика",
];

export default function OnboardingPage() {
  const [goal, setGoal] = useState<string | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [minutes, setMinutes] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  function toggleInterest(item: string) {
    setSelectedInterests((prev) => {
      const exists = prev.includes(item);

      if (exists) {
        return prev.filter((i) => i !== item);
      }

      if (prev.length >= 5) return prev;

      return [...prev, item];
    });
  }

  const isValid =
    goal &&
    selectedInterests.length > 0 &&
    minutes !== null &&
    minutes > 0;

  async function handleContinue() {
    if (!isValid) return;

    try {
      setLoading(true);

      const { data: { user } } = await supabase.auth.getUser();

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
          native_language: "Russian",
          target_language: "English",
          daily_minutes: minutes,
        });

      if (error) {
        alert(error.message);
        return;
      }

      await createInitialUserData(user.id);

      window.location.href = "/placement-test";
    } catch (e) {
      console.error(e);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 flex justify-center py-10">
      <div className="w-full max-w-4xl px-6 flex flex-col">

        {/* LOGO */}
        <div className="flex justify-center mb-10">
          <div className="text-4xl font-bold text-blue-600">Sola</div>
        </div>

        {/* PROGRESS */}
        {/* <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-between text-sm text-slate-500 mb-3">
            <span>Шаг {step} из 3</span>
          </div>

          <div
  className="h-full bg-blue-600 rounded-full transition-all"
  style={{ width: `${(step / 3) * 100}%` }}
/>
        </div>

<div className="w-full max-w-4xl"></div> */}
        {/* HERO */}
        {/* <div className="text-center mb-6">
          <h1 className="text-5xl font-bold mb-5">
            Добро пожаловать
            <br />
            в Sola 👋
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-8">
            Ответь на несколько вопросов.
            <br />
            Мы полностью настроим обучение специально под тебя.
          </p>
        </div>
<div className="text-center mb-6"></div> */}

{/* {step === 1 && (
  <div> */}
  {step === 1 && (
  <div className="w-full flex flex-col justify-between">
    {/* STEP 1 */}
    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-10">
      <div className="mb-10">
        <div className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
          Шаг 1
        </div>

        <h2 className="text-3xl font-bold mt-5">
          Зачем ты изучаешь английский?
        </h2>

        <p className="text-slate-500 mt-3 text-lg">
          От этого будут зависеть темы уроков и упражнения
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {goals.map((item) => (
          <button
            key={item.id}
            onClick={() => setGoal(item.id)}
            className={`rounded-3xl border p-7 text-left transition-all duration-200 hover:scale-[1.02] ${
  goal === item.id
    ? "border-blue-600 bg-blue-50 shadow-lg"
    : "border-slate-200 hover:border-blue-300 bg-white"
}`}
          >
            <div className="text-4xl mb-5">{item.icon}</div>
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-slate-500 leading-7">{item.description}</p>
          </button>
        ))}
      </div>
    </div>

<div className="h-40" />

    {/* BUTTON (ОТДЕЛЬНО НО ПРАВИЛЬНО) */}
    <div className="mt-auto text-center">
      <button
        disabled={!goal}
        onClick={() => setStep(2)}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl disabled:opacity-40"
      >
        Далее →
      </button>
    </div>
  </div>
)}

{/* {step === 2 && (
  <div> */}
  {step === 2 && (
  <div className="w-full flex flex-col justify-between">
    {/* STEP 2 */}
    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-10 mt-10">
      <div className="mb-10">
        <div className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
          Шаг 2
        </div>

        <h2 className="text-3xl font-bold mt-5">
          Что тебе интересно?
        </h2>

        <p className="text-slate-500 mt-3 text-lg">
          Мы будем использовать это для примеров
        </p>

        <div className="mt-4 text-sm text-slate-500">
          Выбрано:{" "}
          <span className="font-semibold text-blue-600">
            {selectedInterests.length}/5
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {interests.map((item) => {
          const active = selectedInterests.includes(item);

          return (
            <button
              key={item}
              onClick={() => toggleInterest(item)}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all border ${
  active
    ? "bg-blue-600 text-white border-blue-600 shadow-md scale-[1.03]"
    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50"
}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>

<div className="h-40" />

    {/* BUTTON */}
    <div className="mt-auto text-center">
      <button
        disabled={selectedInterests.length === 0}
        onClick={() => setStep(3)}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl disabled:opacity-40"
      >
        Далее →
      </button>
    </div>
  </div>
)}

{step === 3 && (
  <div className="w-full flex flex-col justify-between">
    {/* STEP 3 */}
    <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 p-10 mt-10">
      <div className="mb-10">
        <div className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
          Шаг 3
        </div>

        <h2 className="text-3xl font-bold mt-5">
          Сколько времени ты готов заниматься в день?
        </h2>

        <p className="text-slate-500 mt-3 text-lg">
          Это влияет на интенсивность программы
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[15, 30, 60, 120].map((val) => (
          <button
            key={val}
            onClick={() => setMinutes(val)}
            className={`py-5 rounded-2xl border font-bold text-lg transition-all ${
  minutes === val
    ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-[1.03]"
    : "bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50"
}`}
          >
            {val} мин
          </button>
        ))}
      </div>
    </div>

<div className="h-40" />

    {/* CONTINUE */}
    <div className="mt-auto text-center">
      <button
        onClick={handleContinue}
        disabled={!isValid || loading}
        className={`w-full max-w-2xl mx-auto py-5 rounded-2xl text-white font-bold text-xl transition-all
          ${
            !isValid || loading
              ? "bg-slate-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 shadow-xl hover:scale-[1.01]"
          }
        `}
      >
        {loading ? "Сохранение..." : "Continue →"}
      </button>

      <p className="text-sm text-slate-500 mt-5">
        Placement test займет примерно 25–30 минут
      </p>
    </div>
  </div>
)}
      </div>
    </main>
  );
}