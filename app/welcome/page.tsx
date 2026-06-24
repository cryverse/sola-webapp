export default function WelcomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-2xl w-full text-center">

        <h1 className="text-5xl font-bold mb-6">
          Добро пожаловать в Sola
        </h1>

        <p className="text-xl text-slate-600 mb-10">
          Сейчас мы настроим обучение специально под тебя.
        </p>

        <div className="border rounded-2xl p-8 text-left mb-8 space-y-4">

          <div>
            ✓ Определим твой уровень английского
          </div>

          <div>
            ✓ Подберем темы обучения
          </div>

          <div>
            ✓ Настроим персональный план
          </div>

          <div>
            ✓ Подготовим первую AI-сессию
          </div>

        </div>

        <a
          href="/onboarding"
          className="btn btn-primary px-8 py-3"
        >
          Начать
        </a>

      </div>

    </main>
  );
}