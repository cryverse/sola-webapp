"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        email: email,
        full_name: name,
      });

      alert("Аккаунт создан");

      window.location.href = "/onboarding";
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 w-96">
        <h1 className="text-3xl font-bold">
          Создать аккаунт
        </h1>

        <input
          className="border p-3 rounded"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-3 rounded"
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="border rounded p-3"
        >
          Зарегистрироваться
        </button>
      </div>
    </main>
  );
}