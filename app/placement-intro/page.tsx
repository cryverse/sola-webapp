import Link from "next/link";

export default function PlacementIntroPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-3xl w-full">

        <div className="text-center mb-12">

          <div className="text-6xl mb-6">
            🎯
          </div>

          <h1 className="text-5xl font-bold mb-6">
            Placement Test
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Перед первым уроком мы определим твой текущий уровень английского
            и построим персональный план обучения.
          </p>

        </div>

        <div className="border rounded-3xl p-8 mb-8 bg-white shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Что будет в тесте
          </h2>

          <div className="space-y-5">

            <div className="flex gap-4">
              <span className="text-2xl">📖</span>

              <div>
                <h3 className="font-semibold">
                  Vocabulary
                </h3>

                <p className="text-slate-600">
                  Проверим словарный запас.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">✍️</span>

              <div>
                <h3 className="font-semibold">
                  Grammar
                </h3>

                <p className="text-slate-600">
                  Посмотрим, насколько уверенно ты строишь предложения.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">🎧</span>

              <div>
                <h3 className="font-semibold">
                  Listening
                </h3>

                <p className="text-slate-600">
                  Нужно будет прослушать короткое аудио.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">📚</span>

              <div>
                <h3 className="font-semibold">
                  Reading
                </h3>

                <p className="text-slate-600">
                  Прочитаешь небольшой текст.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">💬</span>

              <div>
                <h3 className="font-semibold">
                  Writing
                </h3>

                <p className="text-slate-600">
                  Напишешь небольшой ответ своими словами.
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="border rounded-3xl p-6 bg-blue-50 mb-10">

          <h3 className="font-bold text-lg mb-3">
            После теста ты получишь
          </h3>

          <ul className="space-y-2 text-slate-700">

            <li>✅ Точный уровень CEFR</li>

            <li>✅ Подробный AI-анализ</li>

            <li>✅ Сильные стороны</li>

            <li>✅ Ошибки, которые мешают говорить</li>

            <li>✅ Индивидуальную программу обучения</li>

          </ul>

        </div>

        <Link
          href="/placement-test"
          className="btn btn-primary w-full text-center py-4 text-lg"
        >
          Начать тест
        </Link>

      </div>

    </main>
  );
}