"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/pages/dashboard.module.scss";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      router.replace("/auth");
      setIsAuthorized(false);
      return;
    }

    try {
      const user = JSON.parse(userStr);
      if (!user.phone) {
        router.replace("/auth");
        setIsAuthorized(false);
        return;
      }
      setIsAuthorized(true);
    } catch {
      router.replace("/auth");
      setIsAuthorized(false);
    }
  }, [router]);

  if (isAuthorized === null) return null;

  if (isAuthorized === false) return null;

  const user = JSON.parse(localStorage.getItem("user")!);

  return (
    <main className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
      <p>Hello, {user.name.first} {user.name.last}</p>
      <p>Your phone number: {user.phone}</p>
    </main>
  );
}
