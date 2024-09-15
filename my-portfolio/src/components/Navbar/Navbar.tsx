import { routes } from "@/models/routes";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {routes.map((route) => {
        return (
          <nav key={route.href}>
            <ul>
              <Link href={route.href}>{route.label}</Link>
            </ul>
          </nav>
        );
      })}
    </>
  );
};

export default Navbar;
