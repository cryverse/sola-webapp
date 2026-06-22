"use server";

import { supabase } from "@/lib/supabase";

export async function finishPlacementTest(
  userId: string
) {
  const insertResult = await supabase
    .from("placement_tests")
    .insert({
      user_id: userId,
      estimated_cefr: "B1",
      estimated_sublevel: "B1.1",
      confidence_score: 50,
    });

  console.log(
    "PLACEMENT INSERT:",
    insertResult.error
  );

  const updateResult = await supabase
    .from("user_levels")
    .update({
      current_level: "B1",
      progress_percent: 0,
    })
    .eq("user_id", userId);

  console.log(
    "LEVEL UPDATE:",
    updateResult.error
  );
}