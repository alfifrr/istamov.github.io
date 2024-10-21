"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { NavbarSection } from "@/components/NavbarSection";
import { useAuth } from "@/contexts/authContext";
import Link from "next/link";
import { withoutAuth } from "@/hoc/pageControl";

const Login: React.FC = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      return setError("Please fill in all fields");
    }

    const usernameRegex = /^[a-zA-Z0-9._@]+$/;
    const passwordRegex = /^\S+$/;

    if (!usernameRegex.test(username)) {
      return setError(
        "Username can only contain letters, numbers, underscores, @ signs, and dots, and no spaces."
      );
    }
    if (!passwordRegex.test(password)) {
      return setError("Password cannot contain spaces.");
    }

    register(username, password).then((res) => {
      if (res) {
        router.push("/");
      } else {
        setError("User already exists");
      }
    });
  };

  return (
    <>
      <NavbarSection />
      <form
        onSubmit={handleAuth}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <h1 className="text-2xl text-center font-bold my-4 text-black dark:text-white">
          Register New User
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
        <Button type="submit">Register</Button>

        <Link
          href="/login"
          className="text-cyan-600 hover:underline dark:text-cyan-500 text-center"
        >
          Back to login page.
        </Link>
      </form>
    </>
  );
};

export default withoutAuth(Login);
