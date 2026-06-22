import { supabase } from "@/lib/supabase";

export async function getUserRole() {
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;

  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  return {
    user,
    role: data?.role || "user",
  };
}