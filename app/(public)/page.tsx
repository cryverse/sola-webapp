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

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Sola — AI платформа, которая превращает знания английского в реальную речь.
            Уроки, разговорная практика, словарь и система прогресса.
            <br />
            <span className="text-slate-500">
              15 минут в день. Без учебников. Без зубрёжки. Без хаоса.
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
      <section className="container pb-40">

        <div className="grid md:grid-cols-5 gap-6 text-center text-sm text-slate-600">

          <div className="card">✓ CEFR уровень</div>
          <div className="card">✓ AI уроки</div>
          <div className="card">✓ Speaking практика</div>
          <div className="card">✓ Vocabulary</div>
          <div className="card">✓ Progress tracking</div>

        </div>

      </section>

      {/* ================= PROBLEM ================= */}
      <section className="container py-44">

        <h2 className="text-4xl font-bold text-center mb-6">
          Ты уже учил английский.
          <br />
          Но не говоришь.
        </h2>

        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16">
          Проблема не в знаниях — проблема в отсутствии системы практики речи.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="card">
            <h3 className="font-bold mb-2">Понимаешь контент</h3>
            <p className="text-slate-600">YouTube и фильмы уже понятны.</p>
          </div>

          <div className="card">
            <h3 className="font-bold mb-2">Но не говоришь</h3>
            <p className="text-slate-600">Речь не активируется.</p>
          </div>

          <div className="card">
            <h3 className="font-bold mb-2">Учишь годами</h3>
            <p className="text-slate-600">Без реального прогресса.</p>
          </div>

          <div className="card">
            <h3 className="font-bold mb-2 text-red-500">Нет системы</h3>
            <p className="text-slate-600">Только хаотичное обучение.</p>
          </div>

        </div>

      </section>

      {/* ================= WHY ================= */}
      <section className="bg-white py-44">

        <div className="container">

          <h2 className="text-4xl font-bold text-center mb-20">
            Почему Sola работает
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

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
      <section id="how" className="container py-44">

        <h2 className="text-4xl font-bold text-center mb-20">
          Как ты будешь учиться
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">

          <div className="card">1. Определи уровень (CEFR тест)</div>
          <div className="text-center text-slate-400">↓</div>

          <div className="card">2. Получи персональные уроки</div>
          <div className="text-center text-slate-400">↓</div>

          <div className="card">3. Пересказывай и говори</div>
          <div className="text-center text-slate-400">↓</div>

          <div className="card">4. Получай AI фидбек</div>
          <div className="text-center text-slate-400">↓</div>

          <div className="card">5. Реальный прогресс</div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="container py-44">

        <h2 className="text-4xl font-bold text-center mb-20">
          Всё что нужно для прогресса
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card">AI Lessons</div>
          <div className="card">Speaking Practice</div>
          <div className="card">Vocabulary (Anki style)</div>
          <div className="card">Retell System</div>
          <div className="card">AI Feedback</div>
          <div className="card">Progress System</div>

        </div>

      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="container py-48">

        <h2 className="text-4xl font-bold text-center mb-20">
          Тарифы
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* FREE */}
          <div className="card">
            <h3 className="font-bold text-xl">Free</h3>
            <div className="text-4xl font-bold my-6">0 ₽</div>

            <ul className="space-y-2 text-slate-600">
              <li>✓ 1 сессия в день</li>
              <li>✓ 15 минут практики</li>
              <li>✓ Placement test</li>
              <li>✕ AI Speaking</li>
            </ul>
          </div>

          {/* PRO */}
          <div className="card border-2 border-blue-500 scale-105 shadow-lg">

            <div className="text-sm text-blue-600 font-bold mb-2">
              ⭐ РЕКОМЕНДУЕМЫЙ
            </div>

            <h3 className="font-bold text-xl">Pro</h3>

            <div className="flex items-center gap-3 my-6">
              <span className="line-through text-slate-400">2990 ₽</span>
              <span className="text-4xl font-bold">1490 ₽</span>
            </div>

            <ul className="space-y-2 text-slate-600">
              <li>✓ 3 сессии в день</li>
              <li>✓ 45 минут практики</li>
              <li>✓ AI Speaking</li>
              <li>✓ Быстрый прогресс</li>
            </ul>

            <button className="btn btn-primary w-full mt-6">
              Выбрать Pro
            </button>

          </div>

          {/* INTENSIVE */}
          <div className="card">

            <h3 className="font-bold text-xl">Intensive</h3>
            <div className="text-4xl font-bold my-6">2990 ₽</div>

            <ul className="space-y-2 text-slate-600">
              <li>✓ 5 сессий в день</li>
              <li>✓ Максимальный прогресс</li>
              <li>✓ Все функции</li>
            </ul>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}
      <section className="container py-48">

        <h2 className="text-4xl font-bold text-center mb-20">
          Частые вопросы
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">

          <div className="card">
            <h3 className="font-bold">Сколько нужно заниматься?</h3>
            <p className="text-slate-600 mt-2">15–30 минут в день.</p>
          </div>

          <div className="card">
            <h3 className="font-bold">Подходит ли новичкам?</h3>
            <p className="text-slate-600 mt-2">Да, от A1 до C1.</p>
          </div>

          <div className="card">
            <h3 className="font-bold">Есть мобильное приложение?</h3>
            <p className="text-slate-600 mt-2">Пока только веб.</p>
          </div>

          <div className="card">
            <h3 className="font-bold">Когда оплата?</h3>
            <p className="text-slate-600 mt-2">Сейчас ранний доступ.</p>
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

      {/* ================= FOOTER ================= */}
      <footer className="border-t py-32">

        <div className="container grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="text-2xl font-bold text-blue-600">Sola</h3>
            <p className="text-slate-500 mt-2">
              AI платформа для разговорного английского.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Продукт</h4>
            <p className="text-slate-600">Уроки</p>
            <p className="text-slate-600">Speaking</p>
            <p className="text-slate-600">Vocabulary</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Поддержка</h4>
            <p className="text-slate-600">Telegram</p>
          </div>

        </div>

        <div className="container mt-12 text-center text-slate-500">
          © 2026 Sola
        </div>

      </footer>

    </main>
  );
}