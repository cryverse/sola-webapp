import { supabase } from "@/lib/supabase";

export async function createInitialUserData(userId: string) {
  await Promise.all([
    supabase.from("user_levels").insert({
      user_id: userId,
      current_level: "A1 Beginner",
      progress_percent: 0,
    }),

    supabase.from("user_progress").insert({
  user_id: userId,
  cefr_level: "A1",
  cefr_sublevel: "A1.1",
  cefr_progress: 0,
  current_streak: 1,
  best_streak: 1,
  completed_sessions: 0,
  total_minutes: 0,
}),

    supabase.from("user_streaks").insert({
      user_id: userId,
      current_streak: 1,
      best_streak: 1,
      last_activity_date: new Date().toISOString(),
    }),

    supabase.from("subscriptions").insert({
      user_id: userId,
      plan: "free",
      status: "active",
    }),
  ]);
}