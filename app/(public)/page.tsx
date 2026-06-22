export default function HomePage() {
  return (
    <main className="fade">

      {/* HERO */}
      <section className="container py-28 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Turn English knowledge into speaking ability
        </h1>

        <p className="max-w-2xl mx-auto text-lg mb-10">
          Sola is an AI speaking coach that helps you stop translating in your head
          and start actually speaking English through real daily practice.
        </p>

        <div className="flex gap-3 justify-center">
          <a className="btn btn-primary" href="/register">
            Start free
          </a>

          <a className="btn" href="#pricing">
            See pricing
          </a>
        </div>

        <p className="text-sm mt-6 text-slate-500">
          No credit card • 30 seconds to start
        </p>
      </section>

      {/* PROBLEM */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          The problem
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-2">
              You understand English
            </h3>

            <p>
              You can read and watch content easily.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-2">
              But you can't speak
            </h3>

            <p>
              Speaking breaks when you try to form real sentences.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20">
        <div className="container">

          <h2 className="text-3xl font-bold text-center mb-10">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="card">
              <h3 className="font-semibold">
                Listen
              </h3>

              <p>
                Short AI lesson based on real topics.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold">
                Speak
              </h3>

              <p>
                Retell in your own words.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold">
                Improve
              </h3>

              <p>
                AI corrects and improves your speech.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="container py-24"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card">
            <h3 className="font-bold">
              Free
            </h3>

            <p className="text-2xl font-bold mt-2">
              $0
            </p>

            <p className="mt-2">
              Basic speaking practice
            </p>

            <a
              className="btn mt-4 w-full"
              href="/register"
            >
              Start
            </a>
          </div>

          <div className="card border-blue-500">
            <h3 className="font-bold">
              Pro
            </h3>

            <p className="text-2xl font-bold mt-2">
              $19
            </p>

            <p className="mt-2">
              Unlimited speaking
            </p>

            <a
              className="btn btn-primary mt-4 w-full"
              href="/register"
            >
              Upgrade
            </a>
          </div>

          <div className="card">
            <h3 className="font-bold">
              Intensive
            </h3>

            <p className="text-2xl font-bold mt-2">
              $39
            </p>

            <p className="mt-2">
              Fast track learning
            </p>

            <a
              className="btn mt-4 w-full"
              href="/register"
            >
              Buy
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="container py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Start speaking today
        </h2>

        <a
          className="btn btn-primary px-8 py-3"
          href="/register"
        >
          Get started
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-12">
        <div className="container flex justify-between">

          <div>
            <h3 className="text-blue-600 font-bold">
              Sola
            </h3>

            <p className="text-sm">
              AI speaking platform
            </p>
          </div>

          <div className="text-sm space-y-1">
            <p>Product</p>
            <p>Pricing</p>
            <p>Login</p>
          </div>

        </div>
      </footer>

    </main>
  );
}