"use client";

export default function CompletePage() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Session Complete 🎉
      </h1>

      <div className="border rounded-xl p-6 mb-4">
        XP Earned: +25
      </div>

      <div className="border rounded-xl p-6 mb-4">
        Progress: +5%
      </div>

      <div className="border rounded-xl p-6 mb-6">
        New Expression:
        <br />
        build new opportunities
      </div>

      <button
        className="border rounded-xl px-6 py-3"
        onClick={() => {
          window.location.href =
            "/dashboard";
        }}
      >
        Back To Dashboard
      </button>

    </main>
  );
}