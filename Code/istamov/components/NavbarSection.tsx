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

export function NavbarSection() {
  const { user, logout } = useAuth();

  return (
    <Navbar fluid rounded>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Welcome to Istamov
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {user ? (
          <>
            <span className="flex items-center mr-4">
              {JSON.parse(localStorage.getItem("user") || "{}").username}
            </span>
            <Button onClick={logout}>Logout</Button>
          </>
        ) : (
          <Link href="/login">
            <Button>Get started</Button>
          </Link>
        )}
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
