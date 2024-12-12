"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Book, Mail, MenuIcon, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const pages = [
    {
      name: "Search",
      href: "/",
      icon: <Search size={16} />,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Mail size={16} />,
    },
  ];

  return (
    <div className="fixed left-0 top-0 z-10 h-16 w-full flex-row items-center justify-between border-b bg-background px-4">
      <div className="flex h-full items-center justify-start gap-4 text-2xl">
        <Book />
        <Link href="/" className="font-bold">
          Book
        </Link>
      </div>

      <Button
        size="icon"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-4 top-4 sm:hidden"
      >
        <X
          className={cn(
            `${isOpen ? "scale-100" : "scale-0"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-200`,
          )}
        />
        <MenuIcon
          className={cn(
            `${isOpen ? "scale-0" : "scale-100"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-200`,
          )}
        />
      </Button>

      <div
        className={cn(
          `${isOpen ? "opacity-100" : "opacity-0"} height-full fixed left-0 top-16 z-10 flex h-full w-full flex-col items-center justify-start bg-background transition-all duration-200 sm:absolute sm:top-0 sm:flex-row sm:justify-end sm:bg-transparent sm:opacity-100`,
        )}
      >
        <nav className="w-full max-w-72 py-10 sm:w-auto">
          <ul className="sm:flex sm:flex-row">
            {pages.map((page, index) => (
              <li
                key={page.name + index}
                className={cn(
                  `${pathname === page.href ? "text-primary" : "text-foreground"} w-full border-b sm:border-none`,
                )}
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  href={page.href}
                  className="flex w-full items-center gap-2 p-4 font-semibold transition-all duration-300 hover:text-primary"
                >
                  {page.icon}
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex w-full max-w-72 items-center justify-between rounded-lg bg-secondary px-4 py-2 sm:w-auto sm:rounded-none sm:border-l sm:bg-inherit sm:py-0">
          <p className="text-xs sm:hidden">Appearance</p>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Menu;
