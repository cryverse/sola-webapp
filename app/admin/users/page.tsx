"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type UserProfile = {
  id: string;
  email?: string;
  role: string;
};

export default function AdminUsers() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

async function loadUsers() {
  const { data, error } = await supabase
    .from("profiles")
    .select("id,email,role");

  console.log("PROFILES FROM DB:");
  console.table(data);

  if (error) {
    console.error(error);
  }

  setUsers(data || []);
  setLoading(false);
}

  async function changeRole(userId: string, role: string) {
    await supabase
      .from("profiles")
      .update({ role })
      .eq("id", userId);

    loadUsers();
  }

  if (loading) return <div>Loading...</div>;

  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      <div className="space-y-3">

        {users.map((user) => (
          <div key={user.id} className="card flex justify-between items-center">

            <div>
              <p className="font-bold">{user.email || user.id}</p>
              <p className="text-sm opacity-60">role: {user.role}</p>
            </div>

            <div className="flex gap-2">

              <button
                className="btn"
                onClick={() => changeRole(user.id, "user")}
              >
                User
              </button>

              <button
                className="btn"
                onClick={() => changeRole(user.id, "partner")}
              >
                Partner
              </button>

              <button
                className="btn btn-primary"
                onClick={() => changeRole(user.id, "admin")}
              >
                Admin
              </button>

            </div>

          </div>
        ))}

      </div>
    </main>
  );
}