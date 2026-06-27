export default function NavbarPublic() {
  return (
    <header className="navbar">

      <div className="container h-16 flex items-center justify-between">

        <a
          href="/"
          className="font-bold text-xl text-blue-600"
        >
          Sola
        </a>

        <div className="flex items-center gap-3">

          <a
            href="/login"
            className="btn"
          >
            Войти
          </a>

          <a
            href="/register"
            className="btn btn-primary"
          >
            Зарегистрироваться
          </a>

        </div>

      </div>

    </header>
  );
}