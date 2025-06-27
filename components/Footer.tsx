"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-6 border-t bg-background mt-8">
      <span className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} FingSprint. All rights reserved.
      </span>
      <div className="flex">
        <Button asChild variant="ghost" size="icon">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
