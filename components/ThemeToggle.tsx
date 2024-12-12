"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="rounded-full"
      variant="outline"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="dark:opacity-0" />
      <Moon className="absolute opacity-0 dark:opacity-100" />
    </Button>
  );
}
