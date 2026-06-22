"use client";

export default function ShadowingPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Shadowing
      </h1>

      <p className="mb-6 text-slate-600">
        Read the improved version aloud.
      </p>

      <div className="border rounded-xl p-6 mb-6">

        Technology helps people work faster,
        communicate easier, and build new
        opportunities around the world.

      </div>

      <button
        className="border rounded-xl px-6 py-3"
        onClick={() => {
          window.location.href =
            "/lesson/complete";
        }}
      >
        I Practiced
      </button>

    </main>
  );
}