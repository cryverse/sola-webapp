"use client";

export default function ProgressPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Progress
        </h1>

        <p className="text-slate-500 mt-2">
          Track your English journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <p className="text-slate-500 text-sm">
            Current Level
          </p>

          <h2 className="text-3xl font-bold mt-2">
            B1
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <p className="text-slate-500 text-sm">
            Progress
          </p>

          <h2 className="text-3xl font-bold mt-2">
            35%
          </h2>

          <div className="w-full h-3 bg-slate-200 rounded-full mt-4">
            <div className="h-3 bg-blue-600 rounded-full w-[35%]" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <p className="text-slate-500 text-sm">
            Streak
          </p>

          <h2 className="text-3xl font-bold mt-2">
            4 days
          </h2>
        </div>

      </div>

      <div className="bg-white border rounded-2xl mt-8 p-6">

        <h2 className="text-xl font-semibold mb-4">
          Learning Statistics
        </h2>

        <div className="space-y-4">

          <div>
            <div className="flex justify-between">
              <span>Vocabulary</span>
              <span>120 words</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span>Lessons Completed</span>
              <span>8</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span>Total Study Time</span>
              <span>5.2 hours</span>
            </div>
          </div>

        </div>

      </div>

    </main>
  );
}