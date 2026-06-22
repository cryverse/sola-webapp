"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, usePathname } from "next/navigation";

export default function NavbarApp() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.auth.getUser();

      setUser(data?.user ?? null);
      setLoading(false);
    };

    load();

    const { data } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return null;

  const linkClass = (href: string) =>
    pathname === href
      ? "text-blue-600 font-medium"
      : "text-slate-600 hover:text-slate-900 transition";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">

        <a
          href="/dashboard"
          className="font-bold text-xl text-blue-600"
        >
          Sola
        </a>

        <div className="flex items-center gap-6 text-sm">

          <a href="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </a>

          <a href="/lesson" className={linkClass("/lesson")}>
            Lesson
          </a>

          <a href="/progress" className={linkClass("/progress")}>
            Progress
          </a>

          <a href="/vocabulary" className={linkClass("/vocabulary")}>
            Vocabulary
          </a>

          <a href="/profile" className={linkClass("/profile")}>
            Profile
          </a>

          {user && (
            <button
              onClick={logout}
              className="px-3 py-2 rounded-lg border text-slate-600 hover:bg-slate-50 transition"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}