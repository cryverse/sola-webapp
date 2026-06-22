import { supabase } from "./supabase";

export async function updateStreak() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const today = new Date().toISOString().split("T")[0];

  const { data } = await supabase
    .from("profiles")
    .select("streak,last_activity")
    .eq("id", user.id)
    .single();

  if (!data) return;

  if (data.last_activity === today) {
    return;
  }

  await supabase
    .from("profiles")
    .update({
      streak: (data.streak || 0) + 1,
      last_activity: today,
    })
    .eq("id", user.id);
}