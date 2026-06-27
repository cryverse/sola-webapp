import Link from "next/link";

export default function HomePage() {
  return (
    <main className="fade">

      {/* HERO */}

      <section className="container py-36 text-center">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
            Перестань учить
            <br />
            английский.
            <br />
            Начни говорить.
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12">
            Уроки, разговорная практика, словарь как Anki,
            система прогресса и AI-фидбек.
            Всё что нужно для перехода от понимания английского
            к свободной речи.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">

            <Link
              href="/register"
              className="btn btn-primary text-lg px-8 py-4"
            >
              Начать бесплатно
            </Link>

            <a
              href="#pricing"
              className="btn text-lg px-8 py-4"
            >
              Посмотреть тарифы
            </a>

          </div>

          <p className="text-sm text-slate-500">
            Без карты • Регистрация за 30 секунд
          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="container pb-28">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card text-center">
            <h3 className="text-4xl font-bold mb-2">
              AI
            </h3>

            <p className="text-slate-600">
              Персональные уроки под твой уровень
            </p>
          </div>

          <div className="card text-center">
            <h3 className="text-4xl font-bold mb-2">
              CEFR
            </h3>

            <p className="text-slate-600">
              Прогресс от A1 до C1
            </p>
          </div>

          <div className="card text-center">
            <h3 className="text-4xl font-bold mb-2">
              80/20
            </h3>

            <p className="text-slate-600">
              Только самые эффективные методы обучения
            </p>
          </div>

        </div>

      </section>

      {/* PROBLEM */}

      <section className="container pt-48 pb-36">

        <h2 className="text-5xl font-bold text-center mb-6">
          Знакомая ситуация?
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
          Большинство людей учат английский годами,
          но всё ещё не могут свободно говорить.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="card">

            <div className="text-4xl mb-4">
              🎬
            </div>

            <h3 className="font-bold text-xl mb-2">
              Смотришь видео
            </h3>

            <p className="text-slate-600">
              Понимаешь YouTube, фильмы и подкасты.
            </p>

          </div>

          <div className="card">

            <div className="text-4xl mb-4">
              📚
            </div>

            <h3 className="font-bold text-xl mb-2">
              Читаешь статьи
            </h3>

            <p className="text-slate-600">
              Большинство текстов уже понятны.
            </p>

          </div>

          <div className="card">

            <div className="text-4xl mb-4">
              🧠
            </div>

            <h3 className="font-bold text-xl mb-2">
              Знаешь грамматику
            </h3>

            <p className="text-slate-600">
              Теория давно изучена.
            </p>

          </div>

          <div className="card border-red-200">

            <div className="text-4xl mb-4">
              😔
            </div>

            <h3 className="font-bold text-xl mb-2 text-red-500">
              Но не говоришь
            </h3>

            <p className="text-slate-600">
              Теряешься в разговоре и переводишь каждую фразу в голове.
            </p>

          </div>

        </div>

      </section>

            {/* HOW IT WORKS */}

      <section className="bg-white py-32">

        <div className="container">

          <h2 className="text-5xl font-bold text-center mb-6">
            Как работает Sola
          </h2>

          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
            Мы убрали всё лишнее и оставили только то,
            что действительно помогает начать говорить.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="card">

              <div className="text-4xl font-bold text-blue-600 mb-4">
                01
              </div>

              <h3 className="font-bold text-xl mb-3">
                Определи уровень
              </h3>

              <p>
                Placement Test определяет твой уровень
                и создаёт персональную траекторию обучения.
              </p>

            </div>

            <div className="card">

              <div className="text-4xl font-bold text-blue-600 mb-4">
                02
              </div>

              <h3 className="font-bold text-xl mb-3">
                Проходи уроки
              </h3>

              <p>
                AI создаёт уроки под твой уровень,
                цели и интересы.
              </p>

            </div>

            <div className="card">

              <div className="text-4xl font-bold text-blue-600 mb-4">
                03
              </div>

              <h3 className="font-bold text-xl mb-3">
                Практикуй речь
              </h3>

              <p>
                Пересказывай материал и учись
                формулировать мысли на английском.
              </p>

            </div>

            <div className="card">

              <div className="text-4xl font-bold text-blue-600 mb-4">
                04
              </div>

              <h3 className="font-bold text-xl mb-3">
                Получай фидбек
              </h3>

              <p>
                AI анализирует ошибки,
                словарный запас и уровень речи.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* WHY SOLA */}

      <section className="container py-32">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-8">
            Почему большинство людей
            не могут заговорить?
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            Потому что они изучают английский через
            бесконечную теорию, правила и упражнения.
            Но разговорный английский развивается
            только через регулярное понимание речи,
            активное воспроизведение информации
            и разговорную практику.
          </p>

        </div>

      </section>

      {/* METHOD */}

      <section className="bg-white py-32">

        <div className="container">

          <div className="max-w-4xl mx-auto text-center mb-16">

            <h2 className="text-5xl font-bold mb-8">
              Система 80/20
            </h2>

            <p className="text-xl text-slate-600">
              20% действий дают 80% результата.
              Именно на них построено обучение в Sola.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="card">

              <div className="text-5xl mb-4">
                🎧
              </div>

              <h3 className="font-bold text-xl mb-3">
                Listening
              </h3>

              <p>
                Постоянное взаимодействие
                с понятным английским.
              </p>

            </div>

            <div className="card">

              <div className="text-5xl mb-4">
                🗣️
              </div>

              <h3 className="font-bold text-xl mb-3">
                Retelling
              </h3>

              <p>
                Пересказ заставляет мозг
                самостоятельно строить речь.
              </p>

            </div>

            <div className="card">

              <div className="text-5xl mb-4">
                📈
              </div>

              <h3 className="font-bold text-xl mb-3">
                Consistency
              </h3>

              <p>
                Небольшая практика каждый день
                работает лучше марафонов раз в неделю.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="container py-32">

        <h2 className="text-5xl font-bold text-center mb-6">
          Всё необходимое для английского
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
          Один продукт вместо десяти разных сервисов.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="card">

            <h3 className="font-bold text-2xl mb-3">
              📚 AI Уроки
            </h3>

            <p>
              Уроки генерируются специально под твой уровень,
              интересы и цели.
            </p>

          </div>

          <div className="card">

            <h3 className="font-bold text-2xl mb-3">
              🧠 Vocabulary
            </h3>

            <p>
              Интервальные повторения по принципу Anki
              для долгосрочного запоминания слов.
            </p>

          </div>

          <div className="card">

            <h3 className="font-bold text-2xl mb-3">
              🎙 Speaking Practice
            </h3>

            <p>
              Реальная разговорная практика,
              а не бесконечные тесты.
            </p>

          </div>

          <div className="card">

            <h3 className="font-bold text-2xl mb-3">
              📊 Progress System
            </h3>

            <p>
              XP, streak, уровни и понятная шкала роста
              от A1 до C1.
            </p>

          </div>

        </div>

      </section>

            {/* PRICING */}

      <section
        id="pricing"
        className="container py-36"
      >

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-6">
            Выбери свой темп роста
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Все тарифы построены вокруг одной цели —
            как можно быстрее привести тебя к свободному разговорному английскому.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* FREE */}

          <div className="card">

            <h3 className="text-2xl font-bold mb-4">
              Free
            </h3>

            <div className="mb-6">
              <span className="text-5xl font-bold">
                0 ₽
              </span>

              <p className="text-slate-500 mt-2">
                Навсегда бесплатно
              </p>
            </div>

            <ul className="space-y-3 mb-8">

              <li>✓ 1 сессия в день</li>
              <li>✓ До 15 минут практики</li>
              <li>✓ Placement Test</li>
              <li>✓ Базовый словарь</li>

              <li className="text-slate-400">
                ✕ AI Speaking
              </li>

              <li className="text-slate-400">
                ✕ Продвинутый словарь
              </li>

              <li className="text-slate-400">
                ✕ Быстрый прогресс
              </li>

            </ul>

            <Link
              href="/register"
              className="btn w-full"
            >
              Начать
            </Link>

          </div>

          {/* PRO */}

          <div className="card border-2 border-blue-500 relative scale-105">

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              САМЫЙ ПОПУЛЯРНЫЙ
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Pro
            </h3>

            <div className="mb-6">

              <div className="text-slate-400 line-through text-xl">
                1990 ₽
              </div>

              <span className="text-5xl font-bold text-blue-600">
                1490 ₽
              </span>

              <p className="text-slate-500 mt-2">
                Для серьёзного прогресса
              </p>

            </div>

            <ul className="space-y-3 mb-8">

              <li>✓ До 3 сессий в день</li>
              <li>✓ До 60 минут практики</li>
              <li>✓ Полный словарь</li>
              <li>✓ AI Speaking</li>
              <li>✓ AI Feedback</li>
              <li>✓ Быстрый рост уровня</li>
              <li>✓ Все основные функции</li>

            </ul>

            <Link
              href="/register"
              className="btn btn-primary w-full"
            >
              Выбрать Pro
            </Link>

          </div>

          {/* INTENSIVE */}

          <div className="card">

            <h3 className="text-2xl font-bold mb-4">
              Intensive
            </h3>

            <div className="mb-6">

              <div className="text-slate-400 line-through text-xl">
                3990 ₽
              </div>

              <span className="text-5xl font-bold">
                2990 ₽
              </span>

              <p className="text-slate-500 mt-2">
                Максимальный результат
              </p>

            </div>

            <ul className="space-y-3 mb-8">

              <li>✓ До 5 сессий в день</li>
              <li>✓ До 120 минут практики</li>
              <li>✓ Все возможности Pro</li>
              <li>✓ Максимум разговорной практики</li>
              <li>✓ Самый быстрый рост</li>
              <li>✓ Полный доступ ко всему</li>

            </ul>

            <Link
              href="/register"
              className="btn w-full"
            >
              Выбрать Intensive
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="container py-36">

        <div className="card text-center max-w-5xl mx-auto p-12">

          <h2 className="text-5xl font-bold mb-6">
            Через год ты всё ещё можешь
            переводить предложения в голове.
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            Или уже свободно говорить на английском.
            Выбор начинается сегодня.
          </p>

          <Link
            href="/register"
            className="btn btn-primary text-lg px-10 py-4"
          >
            Начать бесплатно
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t py-20">

        <div className="container">

          <div className="grid md:grid-cols-3 gap-12">

            <div>

              <h3 className="text-3xl font-bold text-blue-600 mb-4">
                Sola
              </h3>

              <p className="text-slate-500 leading-relaxed">
                AI-платформа для развития
                разговорного английского.
              </p>

            </div>

            <div>

              <h4 className="font-bold text-lg mb-4">
                Продукт
              </h4>

              <div className="space-y-3 text-slate-600">

                <p>Уроки</p>
                <p>Vocabulary</p>
                <p>AI Speaking</p>
                <p>Тарифы</p>

              </div>

            </div>

            <div>

              <h4 className="font-bold text-lg mb-4">
                Поддержка
              </h4>

              <a
                href="https://t.me/kaihavenne"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Связаться с нами
              </a>

            </div>

          </div>

          <div className="border-t mt-12 pt-8 text-sm text-slate-500 text-center">
            © 2026 Sola. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}