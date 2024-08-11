"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { Google } from "@mui/icons-material";
import { Button } from "@nextui-org/react";

import { useRouter } from "next/navigation"; // Import useRouter


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const router = useRouter()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/profile");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="w-full h-full flex justify-center">
      <div className="min-w-[500px] max-w-[700px] flex flex-col gap-y-4 items-center">
        <h1 className="text-3xl w-full">Login</h1>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleLogin}
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
          </div>
          <Button
            className="w-full rounded-md border border-blue-500 bg-transparent hover:bg-blue-500 hover:border-transparent transition-all"
            type="submit"
          >
            Sign In
          </Button>
          <div className="mt-4">
            <span className="text-sm "><span>Don&apos;t have an account?</span>
            </span>
            <Link
              href="/signup"
              className=" text-sm underline hover:text-blue-400 transition-all"
            >
              Sign Up
            </Link>
          </div>
          <Button
            className="mt-4 w-full rounded-md border border-white bg-transparent hover:bg-white hover:border-transparent hover:text-gray-700 transition-all "
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
