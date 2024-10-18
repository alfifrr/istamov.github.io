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
  return (
    <Navbar fluid rounded>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Welcome to Istamov
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Link href="/login">
          <Button>Get started</Button>
        </Link>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
