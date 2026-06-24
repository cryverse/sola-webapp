import Link from "next/link";

export default function HomePage() {
  return (
    <main className="fade">

      {/* ================= HERO ================= */}
      <section className="container py-48 text-center">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-12">
            Перестань учить английский.
            <br />
            Начни говорить.
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-14 leading-relaxed">
            Sola — AI система, которая превращает знания английского в реальную речь.
            <br />
            Уроки, разговорная практика, словарь и персональный прогресс.
            <br />
            <span className="text-slate-500">
              15 минут в день. Без учебников. Без хаоса.
            </span>
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/register" className="btn btn-primary">
              Начать бесплатно
            </Link>

            <a href="#how" className="btn">
              Как это работает
            </a>
          </div>

          <p className="text-sm text-slate-500 mt-10">
            Регистрация за 30 секунд • Доступ сразу
          </p>

        </div>

      </section>

      {/* ================= TRUST ================= */}
      <section className="container pb-44">

        <div className="grid md:grid-cols-5 gap-6 text-center">

          <div className="card">CEFR уровень</div>
          <div className="card">AI уроки</div>
          <div className="card">Speaking практика</div>
          <div className="card">Vocabulary</div>
          <div className="card">Progress</div>

        </div>

      </section>

      {/* ================= PROBLEM ================= */}
      <section className="container py-48">

        <h2 className="text-4xl font-bold text-center mb-10">
          Ты учил английский годами.
          <br />
          Но не говоришь.
        </h2>

        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-20">
          Проблема не в знаниях. Проблема в том, что нет системы практики речи.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="card">
            <h3 className="font-bold mb-2">Понимаешь контент</h3>
            <p className="text-slate-600">YouTube и фильмы уже понятны.</p>
          </div>

          <div className="card">
            <h3 className="font-bold mb-2">Но не говоришь</h3>
            <p className="text-slate-600">Речь не активируется.</p>
          </div>

          <div className="card">
            <h3 className="font-bold mb-2">Учишь долго</h3>
            <p className="text-slate-600">Без видимого результата.</p>
          </div>

          <div className="card">
            <h3 className="font-bold mb-2 text-red-500">Нет системы</h3>
            <p className="text-slate-600">Обучение хаотичное.</p>
          </div>

        </div>

      </section>

      {/* ================= WHY ================= */}
      <section className="bg-white py-48">

        <div className="container">

          <h2 className="text-4xl font-bold text-center mb-20">
            Почему Sola работает
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            <div className="card">
              <h3 className="font-bold mb-2">Только практика</h3>
              <p className="text-slate-600">Ты сразу говоришь.</p>
            </div>

            <div className="card">
              <h3 className="font-bold mb-2">Персонально</h3>
              <p className="text-slate-600">Под твой уровень.</p>
            </div>

            <div className="card">
              <h3 className="font-bold mb-2">80/20</h3>
              <p className="text-slate-600">Только полезный английский.</p>
            </div>

            <div className="card">
              <h3 className="font-bold mb-2">Фокус на речь</h3>
              <p className="text-slate-600">Главная цель — говорить.</p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= HOW ================= */}
      <section id="how" className="container py-48">

        <h2 className="text-4xl font-bold text-center mb-20">
          Как ты будешь учиться
        </h2>

        <div className="max-w-3xl mx-auto space-y-10">

          <div className="card">1. Определи уровень (CEFR тест)</div>
          <div className="text-center text-slate-400">↓</div>

          <div className="card">2. Получи персональные уроки</div>
          <div className="text-center text-slate-400">↓</div>

          <div className="card">3. Пересказывай и говори</div>
          <div className="text-center text-slate-400">↓</div>

          <div className="card">4. AI фидбек</div>
          <div className="text-center text-slate-400">↓</div>

          <div className="card">5. Реальный прогресс</div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="container py-48">

        <h2 className="text-4xl font-bold text-center mb-20">
          Всё что нужно
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="card">AI Lessons</div>
          <div className="card">Speaking</div>
          <div className="card">Vocabulary</div>
          <div className="card">Retell</div>
          <div className="card">AI Feedback</div>
          <div className="card">Progress</div>

        </div>

      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="container py-48">

        <h2 className="text-4xl font-bold text-center mb-20">
          Тарифы
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="card">
            <h3 className="font-bold">Free</h3>
            <div className="text-4xl font-bold my-6">0 ₽</div>
            <p className="text-slate-600">Базовый доступ</p>
          </div>

          <div className="card border-2 border-blue-500 scale-105">

            <div className="text-sm text-blue-600 font-bold mb-2">
              РЕКОМЕНДУЕМЫЙ
            </div>

            <h3 className="font-bold">Pro</h3>

            <div className="text-4xl font-bold my-6">1490 ₽</div>

            <p className="text-slate-600">
              Максимум прогресса за минимальное время
            </p>

          </div>

          <div className="card">
            <h3 className="font-bold">Intensive</h3>
            <div className="text-4xl font-bold my-6">2990 ₽</div>
            <p className="text-slate-600">Максимальный режим</p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="container py-48 text-center">

        <h2 className="text-5xl font-bold mb-10">
          Начни сегодня
        </h2>

        <Link href="/register" className="btn btn-primary">
          Начать бесплатно
        </Link>

      </section>

      {/* ================= FOOTER (FIXED) ================= */}
      <footer className="border-t py-32">

        <div className="container flex flex-col md:flex-row justify-between gap-20">

          <div>
            <h3 className="text-2xl font-bold text-blue-600">Sola</h3>
            <p className="text-slate-500 mt-3">
              AI платформа для разговорного английского.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Поддержка</h4>
            <p className="text-slate-600">Telegram</p>
          </div>

        </div>

        <div className="container mt-16 text-center text-slate-500">
          © 2026 Sola
        </div>

      </footer>

    </main>
  );
}