"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserRole } from "@/lib/auth/getUserRole";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      const res = await getUserRole();

      if (!res?.user) {
        router.replace("/login");
        return;
      }

      if (res.role !== "admin") {
        router.replace("/dashboard");
        return;
      }

      setLoading(false);
    };

    check();
  }, []);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  return <>{children}</>;
}