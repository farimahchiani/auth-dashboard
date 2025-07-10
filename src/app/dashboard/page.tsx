"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/pages/dashboard.module.scss";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth");
    }
  }, [router]);

  return (
    <main className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
    </main>
  );
}
