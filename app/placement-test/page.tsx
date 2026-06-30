
export default function Page() {
  return (
    <div style={{ fontSize: 50, color: "red" }}>
      THIS IS NEW BUILD
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { placementQuestions } from "@/lib/placementQuestions";

// import ProgressBar from "./components/ProgressBar";
// import QuestionCard from "./components/QuestionCard";

// export default function PlacementTestPage() {
//   const [current, setCurrent] = useState(0);

//   const [selected, setSelected] = useState<number | null>(null);
//   const [textAnswer, setTextAnswer] = useState("");

//   const [answers, setAnswers] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const question = placementQuestions[current];

// if (!question) return null;

//   const total = placementQuestions?.length || 0;

//   // 🔥 SAFETY CHECK (главное против белого экрана)
//   if (!question) {
//     return (
//       <main className="min-h-screen flex items-center justify-center">
//         <p className="text-red-500">
//           Ошибка: вопросы не загрузились
//         </p>
//       </main>
//     );
//   }

//   function handleNext() {
//     const newAnswers = [
//       ...answers,
//       {
//         id: question.id,
//         type: question.type,
//         question: question.question,
//         answer:
//           question.type === "writing"
//             ? textAnswer
//             : selected,
//       },
//     ];

//     setAnswers(newAnswers);

//     setSelected(null);
//     setTextAnswer("");

//     if (current < total - 1) {
//       setCurrent(current + 1);
//     } else {
//       finishTest(newAnswers);
//     }
//   }

//   async function finishTest(finalAnswers: any[]) {
//     try {
//       setLoading(true);

//       const res = await fetch("/api/check-placement", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           answers: finalAnswers,
//         }),
//       });

//       const data = await res.json();

//       // ⚠️ SAFE redirect (без Supabase — чтобы не ломалось)
//       window.location.href = "/placement-result";
//     } catch (e) {
//       console.error("Placement test error:", e);
//       alert("Ошибка при отправке теста");
//     } finally {
//       setLoading(false);
//     }
//   }

//   if (loading) {
//     return (
//       <main className="min-h-screen flex items-center justify-center">
//         <p className="text-lg">
//           Проверяем ответы...
//         </p>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
//       <div className="w-full max-w-2xl">

//         {/* TITLE */}
//         <h1 className="text-3xl font-bold text-center mb-6">
//           Placement Test
//         </h1>

//         {/* PROGRESS */}
//         <ProgressBar
//           current={current + 1}
//           total={total}
//         />

//         {/* TYPE LABEL */}
//         <div className="text-sm text-slate-500 mb-3">
//           {question.type === "grammar" && "Грамматика"}
//           {question.type === "vocabulary" && "Словарь"}
//           {question.type === "listening" && "Аудирование"}
//           {question.type === "writing" && "Письмо"}
//         </div>

//         {/* QUESTION */}
//         <QuestionCard
//           question={question}
//           selected={selected}
//           textAnswer={textAnswer}
//           onSelect={setSelected}
//           onTextChange={setTextAnswer}
//         />

//         {/* BUTTON */}
//         <button
//           onClick={handleNext}
//           disabled={
//             question.type === "writing"
//               ? textAnswer.trim().length < 5
//               : selected === null
//           }
//           className={`w-full mt-6 py-4 rounded-xl font-semibold transition
//             ${
//               (question.type === "writing"
//                 ? textAnswer.trim().length < 5
//                 : selected === null)
//                 ? "bg-slate-300 text-slate-500 cursor-not-allowed"
//                 : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//         >
//           {current === total - 1
//             ? "Завершить тест"
//             : "Далее"}
//         </button>

//       </div>
//     </main>
//   );
// }