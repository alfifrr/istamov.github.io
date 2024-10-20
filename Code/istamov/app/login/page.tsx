"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { NavbarSection } from "@/components/NavbarSection";
import { useAuth } from "@/contexts/authContext";
import Link from "next/link";
import api from "@/lib/axios";
import { withoutAuth } from "@/hoc/pageControl";

const Login: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const loginState = localStorage.getItem("user");

    if (!loginState) {
      if (login(username, password)) {
        setInfo("Success. Redirecting...");
        router.push("/");
      } else {
        setInfo("Invalid credentials");
      }
    }
  };

  return (
    <>
      <NavbarSection />
      <form
        onSubmit={handleLogin}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <h1 className="text-2xl text-center font-bold my-4 text-black dark:text-white">
          Login
        </h1>
        <div>
          {info && (
            <>
              <Alert color="blue">
                <strong>Info:</strong> {info}
              </Alert>
            </>
          )}

          <div className="mb-2 block">
            <Label htmlFor="username" value="Your username" />
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="johndoe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Login</Button>

        <Link
          href="/register"
          className="text-cyan-600 hover:underline dark:text-cyan-500 text-center"
        >
          Register new user.
        </Link>
      </form>
    </>
  );
};

export default withoutAuth(Login);
