import { supabase } from "./supabase";

export async function addXP(amount: number) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data } = await supabase
    .from("profiles")
    .select("xp")
    .eq("id", user.id)
    .single();

  const currentXP = data?.xp || 0;

  await supabase
    .from("profiles")
    .update({
      xp: currentXP + amount,
    })
    .eq("id", user.id);
}