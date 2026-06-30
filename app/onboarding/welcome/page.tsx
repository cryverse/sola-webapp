import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">

        {/* BADGE */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center rounded-full bg-blue-50 text-blue-600 px-4 py-2 text-sm font-medium mb-6">
            Тест уровня английского
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Определим ваш уровень английского
          </h1>

          {/* <p className="text-xl text-slate-600 leading-8">
            Это займёт около 25–30 минут.
            После теста мы подберём для вас персональную программу обучения.
          </p> */}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="font-bold text-lg mb-2">Грамматика</h3>
            <p className="text-slate-600 text-sm leading-6">
              Проверим базовые знания английского языка.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="text-3xl mb-4">🎧</div>
            <h3 className="font-bold text-lg mb-2">Аудирование</h3>
            <p className="text-slate-600 text-sm leading-6">
              Прослушаете записи и ответите на вопросы.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">
            <div className="text-3xl mb-4">🎤</div>
            <h3 className="font-bold text-lg mb-2">Речь и письмо</h3>
            <p className="text-slate-600 text-sm leading-6">
              Проверим, как вы выражаете свои мысли.
            </p>
          </div>
        </div>

        {/* INFO */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10">
          <h2 className="font-bold text-xl mb-4">
            Важно знать
          </h2>

          <div className="space-y-3 text-slate-600">
            <p>• Тест занимает около <b>25–30 минут</b></p>
            <p>• Сложность постепенно увеличивается</p>
            <p>• После теста мы подберем для вас персональную систему обучения</p>
            <p>• Результат можно будет пересдать позже</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition shadow-lg hover:scale-[1.02]"
          >
            Начать тест →
          </Link>

        </div>

      </div>
    </main>
  );
}