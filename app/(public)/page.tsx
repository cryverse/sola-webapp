import Link from "next/link";

export default function HomePage() {
return ( <main className="fade">

  {/* HERO */}

  <section className="container py-28 text-center">

    <div className="max-w-4xl mx-auto">

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
        Заговори на английском
        <br />
        через ежедневную практику
      </h1>

      <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
        Персональные уроки, словарь как Anki,
        разговорные сессии и понятная система прогресса.
        Всё в одном месте.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">

        <Link
          href="/register"
          className="btn btn-primary"
        >
          Начать бесплатно
        </Link>

        <a
          href="#pricing"
          className="btn"
        >
          Посмотреть тарифы
        </a>

      </div>

      <p className="text-sm text-slate-500 mt-6">
        Без карты • Регистрация за 30 секунд
      </p>

    </div>

  </section>

  {/* PROBLEM */}

  <section className="container py-20">

    <h2 className="text-4xl font-bold text-center mb-14">
      Знакомая ситуация?
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="card">
        <h3 className="font-bold mb-2">
          Смотришь видео
        </h3>

        <p>
          Понимаешь YouTube и фильмы.
        </p>
      </div>

      <div className="card">
        <h3 className="font-bold mb-2">
          Читаешь статьи
        </h3>

        <p>
          Большинство текстов понятны.
        </p>
      </div>

      <div className="card">
        <h3 className="font-bold mb-2">
          Знаешь грамматику
        </h3>

        <p>
          Теория вроде есть.
        </p>
      </div>

      <div className="card">
        <h3 className="font-bold mb-2 text-red-500">
          Но не говоришь
        </h3>

        <p>
          И теряешься в реальном разговоре.
        </p>
      </div>

    </div>

  </section>

  {/* HOW */}

  <section className="bg-white py-24">

    <div className="container">

      <h2 className="text-4xl font-bold text-center mb-14">
        Как работает Sola
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="card">
          <div className="text-3xl font-bold mb-3">
            1
          </div>

          <h3 className="font-bold mb-2">
            Определи уровень
          </h3>

          <p>
            Пройди placement test и узнай свой уровень.
          </p>
        </div>

        <div className="card">
          <div className="text-3xl font-bold mb-3">
            2
          </div>

          <h3 className="font-bold mb-2">
            Проходи уроки
          </h3>

          <p>
            Изучай английский через реальные темы.
          </p>
        </div>

        <div className="card">
          <div className="text-3xl font-bold mb-3">
            3
          </div>

          <h3 className="font-bold mb-2">
            Практикуй речь
          </h3>

          <p>
            Пересказывай и говори на английском.
          </p>
        </div>

        <div className="card">
          <div className="text-3xl font-bold mb-3">
            4
          </div>

          <h3 className="font-bold mb-2">
            Отслеживай прогресс
          </h3>

          <p>
            Видишь уровень, XP и движение к следующему уровню.
          </p>
        </div>

      </div>

    </div>

  </section>

  {/* FEATURES */}

  <section className="container py-24">

    <h2 className="text-4xl font-bold text-center mb-14">
      Всё необходимое для английского
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="card">
        <h3 className="font-bold text-xl mb-2">
          Уроки
        </h3>

        <p>
          Персональные уроки под твой уровень.
        </p>
      </div>

      <div className="card">
        <h3 className="font-bold text-xl mb-2">
          Vocabulary
        </h3>

        <p>
          Словарь по принципу Anki.
        </p>
      </div>

      <div className="card">
        <h3 className="font-bold text-xl mb-2">
          Speaking
        </h3>

        <p>
          Практика разговорного английского.
        </p>
      </div>

      <div className="card">
        <h3 className="font-bold text-xl mb-2">
          Система прогресса
        </h3>

        <p>
          XP, streak, уровни и развитие навыков.
        </p>
      </div>

    </div>

  </section>

  {/* PRICING */}

  <section
    id="pricing"
    className="container py-24"
  >

    <h2 className="text-4xl font-bold text-center mb-14">
      Тарифы
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="card">

        <h3 className="font-bold text-xl">
          Free
        </h3>

        <div className="text-4xl font-bold my-4">
          0 ₽
        </div>

        <ul className="space-y-2">
          <li>✓ 1 сессия в день</li>
          <li>✓ 15 минут</li>
          <li>✓ Базовый словарь</li>
        </ul>

      </div>

      <div className="card border-2 border-blue-500">

        <h3 className="font-bold text-xl">
          Pro
        </h3>

        <div className="text-4xl font-bold my-4">
          999 ₽
        </div>

        <ul className="space-y-2">
          <li>✓ 3 сессии в день</li>
          <li>✓ Расширенный словарь</li>
          <li>✓ Больше практики</li>
        </ul>

      </div>

      <div className="card">

        <h3 className="font-bold text-xl">
          Intensive
        </h3>

        <div className="text-4xl font-bold my-4">
          1990 ₽
        </div>

        <ul className="space-y-2">
          <li>✓ 5 сессий в день</li>
          <li>✓ Максимальный прогресс</li>
          <li>✓ Все функции</li>
        </ul>

      </div>

    </div>

  </section>

  {/* CTA */}

  <section className="container py-28 text-center">

    <h2 className="text-5xl font-bold mb-6">
      Начни сегодня
    </h2>

    <p className="text-xl text-slate-600 mb-10">
      Первые результаты появляются уже через несколько недель.
    </p>

    <Link
      href="/register"
      className="btn btn-primary"
    >
      Начать бесплатно
    </Link>

  </section>

  {/* FOOTER */}

  <footer className="border-t py-12">

    <div className="container flex flex-col md:flex-row justify-between gap-8">

      <div>

        <h3 className="text-2xl font-bold text-blue-600">
          Sola
        </h3>

        <p className="text-slate-500">
          Система изучения разговорного английского.
        </p>

      </div>

      <div className="space-y-2">

        <a href="#">
          Telegram поддержка
        </a>

        <br />

        <a href="#">
          Политика конфиденциальности
        </a>

        <br />

        <a href="#">
          Пользовательское соглашение
        </a>

      </div>

    </div>

  </footer>

</main>

);
}
