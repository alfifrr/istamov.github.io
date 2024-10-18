"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { NavbarSection } from "@/components/NavbarSection";
import { useAuth } from "@/contexts/authContext";

const Login: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password)
      ? router.push("/")
      : setError("Invalid credentials");
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
          {error && <p className="text-red-500">{error}</p>}

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
      </form>
    </>
  );
};

export default Login;
