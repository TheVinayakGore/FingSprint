"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "./ui/button";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useeffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <nav className="w-full flex items-center justify-between px-4 md:px-12 py-3 border-b bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-primary">FingSprint</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
