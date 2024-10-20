"use client";
import { useAuth } from "@/contexts/authContext";
import {
  Button,
  DarkThemeToggle,
  Flowbite,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function NavbarSection() {
  const { user, logout } = useAuth();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    } else {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUsername(JSON.parse(storedUser).username);
      }
    }
  }, [user]);

  return (
    <Navbar fluid rounded>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Welcome, {username ? username : "guest"}!
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {username ? (
          <>
            <span className="flex items-center mr-4 text-black dark:text-white">
              {username}
            </span>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        {user && user.sessionId && <NavbarToggle />}
      </div>
      <NavbarCollapse>
        {user && user.sessionId && (
          <Link href="/favorite">
            <NavbarLink as="div">Favorites</NavbarLink>
          </Link>
        )}

        <Link href="/">
          <NavbarLink as="div">Dashboard</NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
