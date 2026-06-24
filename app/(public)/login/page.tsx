"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin() {
    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.replace("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-md flex flex-col gap-4">

        <h1 className="text-4xl font-bold">
          Вход
        </h1>

        <input
          className="border p-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="border p-3 rounded"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading
            ? "Загрузка..."
            : "Войти"}
        </button>

        <div className="text-center text-sm">

          Нет аккаунта?

          {" "}

          <a
            href="/register"
            className="text-blue-600"
          >
            Зарегистрироваться
          </a>

        </div>

      </div>

    </main>
  );
}