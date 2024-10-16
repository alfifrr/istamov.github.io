"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { NavbarSection } from "@/components/NavbarSection";
import { useAuth } from "@/contexts/authContext";
import Link from "next/link";
import api from "@/lib/axios";

const Login: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginRequest = async () => {
    try {
      const domain = "http://localhost:3000";
      const getRequestToken = await api.get("/3/authentication/token/new");
      const response = await getRequestToken.data;
      const askUserPermissionUrl = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=${domain}/approved`;
      window.open(askUserPermissionUrl, "_blank");
    } catch (error) {
      console.log(error);
    }
    router.push("/");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password)
      ? loginRequest()
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
          {error && (
            <>
              <Alert color="failure">
                <strong>Error!</strong> {error}
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

export default Login;
