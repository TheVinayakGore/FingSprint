import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-6 border-t bg-background mt-8">
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} FingSprint. All rights reserved.
        </span>
        <div className="flex">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5 hover:text-primary transition-colors" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaXTwitter className="w-5 h-5 hover:text-primary transition-colors" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5 hover:text-primary transition-colors" />
            </Link>
          </Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
