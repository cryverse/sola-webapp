"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [promoCode, setPromoCode] = useState("");

  async function handleRegister() {
    const { data, error } =
      await supabase.auth.signUp({
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
        email,
        full_name: name,
      });

      if (promoCode.trim()) {
        await supabase
          .from("promo_code_usages")
          .insert({
            user_id: data.user.id,
          });
      }

      window.location.href = "/onboarding/welcome";
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-md flex flex-col gap-4">

        <h1 className="text-4xl font-bold">
          Создать аккаунт
        </h1>

        <p className="text-slate-500">
          Начни изучать английский с Sola.
        </p>

        <input
          className="border p-3 rounded"
          placeholder="Имя"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          placeholder="Пароль"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <input
          className="border p-3 rounded"
          placeholder="Промокод (необязательно)"
          value={promoCode}
          onChange={(e) =>
            setPromoCode(e.target.value)
          }
        />

        <button
          onClick={handleRegister}
          className="btn btn-primary"
        >
          Зарегистрироваться
        </button>

        <div className="text-center text-sm">

          Уже есть аккаунт?

          {" "}

          <a
            href="/login"
            className="text-blue-600"
          >
            Войти
          </a>

        </div>

      </div>

    </main>
  );
}