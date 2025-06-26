"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-3 border-b bg-background/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="w-8 h-8"
        />
        <span className="text-xl font-bold text-indigo-500">FingSprint</span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <FiSun className="w-5 h-5" />
        ) : (
          <FiMoon className="w-5 h-5" />
        )}
      </Button>
    </nav>
  );
}
