"use client";

import { useState } from "react";
import styles from "../../styles/pages/auth.module.scss";
import Button from "../components/Button";
import Input from "../components/Input";
import { useRouter } from "next/navigation";

type User = {
  name: { first: string; last: string };
  email: string;
  
};

export default function AuthPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validatePhone = (value: string) => {
    const iranPhoneRegex = /^09\d{9}$/;
    return iranPhoneRegex.test(value);
  };

  const handleSubmit = async () => {
    if (!validatePhone(phone)) {
      setError("The phone number is not valid. Example: 09123456789");
      return;
    }
    setError("");

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();

      if (!data.results || !Array.isArray(data.results) || data.results.length === 0) {
        setError("No valid data received.");
        return;
      }

      const user: User = data.results[0];
      localStorage.setItem("user", JSON.stringify(user));

      router.push("/dashboard");
    } catch (e) {
      setError("Error retrieving user information. Please try again.");
      console.error(e);
    }
  };

  return (
    <main className={styles.container}>
      <h1>Login page</h1>
      <Input
        type="tel"
        value={phone}
        placeholder="Iranian phone number"
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button onClick={handleSubmit}>login</Button>
    </main>
  );
}
