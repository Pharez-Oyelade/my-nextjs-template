"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingBag, UserPlus, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Collections",
    href: "/collections",
  },
  {
    name: "About Asa",
    href: "/about",
  },
  {
    name: "Lookbook",
    href: "/lookbook",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  return (
    <nav className="bg-background text-foreground flex justify-between items-center shadow-md px-6 py-3">
      <div className="">
        <h1 className="text-2xl font-bold text-secondary flex items-end gap-1">
          ÀṢÀ
          <span className="text-accent text-lg font-serif hidden lg:block">
            by Adeola
          </span>
        </h1>
      </div>

      <ul className="md:flex gap-6 items-center hidden">
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={cn(
              "cursor-pointer hover:text-secondary",
              pathname === link.href ? "text-secondary" : "",
              "transition-colors duration-200",
            )}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 md:gap-6 items-center">
        <Search className="cursor-pointer hover:text-secondary w-5 h-5 md:w-6 md:h-6" />
        <ShoppingBag className="cursor-pointer hover:text-secondary w-5 h-5 md:w-6 md:h-6" />
        <UserPlus className="cursor-pointer hover:text-secondary w-5 h-5 md:w-6 md:h-6" />
        <Menu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer hover:text-secondary w-5 h-5 md:w-6 md:h-6 md:hidden"
        />
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-0 h-full w-full bg-background z-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "transition-transform duration-300 ease-in-out",
        )}
      >
        <X
          onClick={() => setIsMenuOpen(false)}
          className="cursor-pointer hover:text-secondary w-6 h-6 absolute top-4 right-6"
        />

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-secondary my-10 px-10">
          ÀṢÀ <span className="text-accent text-lg font-serif">by Adeola</span>
        </h1>

        <hr />

        <ul className="flex flex-col gap-6 items-start mt-10 px-10">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={cn(
                "cursor-pointer hover:text-secondary",
                pathname === link.href ? "text-secondary" : "",
                "transition-colors duration-200",
              )}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
