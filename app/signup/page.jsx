"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { Google } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";


 function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="min-w-[500px] max-w-[700px] flex flex-col gap-y-4 items-center">
        <h1 className="text-3xl w-full">Sign Up</h1>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSignup}
        >
          <div className="flex flex-col w-full space-y-2 mb-5 items-center">
            <Input
              type="email"
              variant="bordered"
              label="Email"
              isRequired
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              variant="bordered"
              label="Password"
              isRequired
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              variant="bordered"
              label="Confirm Password"
              isRequired
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <Button
            className="w-full rounded-md border border-blue-500 bg-transparent hover:bg-blue-500 hover:border-transparent transition-all"
            type="submit"
          >
            Sign Up
          </Button>
          <div className="mt-4">
            <span className="text-sm ">Already have an account?</span>
            <Link
              href="/login"
              className=" text-sm underline hover:text-blue-400 transition-all"
            >
              {"Log In"}
            </Link>
          </div>
          <Button
            className="mt-4 w-full rounded-md border border-white bg-transparent hover:bg-white hover:border-transparent hover:text-gray-700 transition-all"
            // onClick={logInWithGoogle}
          >
            <Google /> <span>Continue with Google</span>
          </Button>
        </form>
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Signup), { ssr: false });
