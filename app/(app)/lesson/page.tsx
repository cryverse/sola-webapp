"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LessonPage() {
  const [lesson, setLesson] = useState<any>(null);

  useEffect(() => {
    loadLesson();
  }, []);

  async function loadLesson() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return;
    }

    const response = await fetch(
      `/api/test-lesson?userId=${user.id}`
    );

    const data =
      await response.json();

    setLesson(data);
  }

  if (!lesson) {
    return (
      <div className="p-8">
        Loading lesson...
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        {lesson.title}
      </h1>

      <div className="border rounded-xl p-6 mb-4">
        Level: {lesson.level}
      </div>

      <div className="border rounded-xl p-6">
        {lesson.text}
      </div>

      <div className="mt-6">

        <button
          className="border rounded-xl px-6 py-3"
          onClick={() => {
            window.location.href =
              "/lesson/retell";
          }}
        >
          Start Lesson
        </button>

      </div>

    </main>
  );
}