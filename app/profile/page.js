"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import WebsiteUrlInput from "@/components/forms/WebsiteUrlInput";

const Profile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <WebsiteUrlInput />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
