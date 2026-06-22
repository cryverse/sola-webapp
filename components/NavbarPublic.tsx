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

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">

          <a href="#how">
            How it works
          </a>

          <a href="#pricing">
            Pricing
          </a>

        </nav>

        <div className="flex items-center gap-3">

          <a
            href="/login"
            className="btn"
          >
            Login
          </a>

          <a
            href="/register"
            className="btn btn-primary"
          >
            Start free
          </a>

        </div>

      </div>

    </header>
  );
}