"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData?.user;

    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setProfile(data);
  }

  return (
    <main className="container py-10">

      <h1 className="text-2xl font-bold mb-4">
        Profile
      </h1>

      <div className="card">
        <p>Email: {profile?.email}</p>
        <p>Role: {profile?.role}</p>
      </div>

      {/* 🔥 ADMIN WINDOW */}
      {profile?.role === "admin" && (
        <div className="card mt-4 border border-blue-500">

          <h2 className="font-bold mb-2">
            Admin Window
          </h2>

          <a className="btn btn-primary" href="/admin">
            Open Admin Panel
          </a>

        </div>
      )}

      {/* 🟣 PARTNER WINDOW */}
      {profile?.role === "partner" && (
        <div className="card mt-4 border border-purple-500">

          <h2 className="font-bold mb-2">
            Partner Window
          </h2>

          <a className="btn" href="/partner">
            Open Partner Panel
          </a>

        </div>
      )}

    </main>
  );
}