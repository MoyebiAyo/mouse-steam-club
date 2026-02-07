"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { navLinks } from "@/constants/navigation";
import { themeToggleTransition } from "@/constants/animations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image 
              src="/logo.png" 
              alt="Mouse STEAM Club Logo" 
              width={48}
              height={48}
              className={`h-12 w-auto object-contain ${theme === 'dark' ? 'brightness-0 invert' : ''}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-primary-blue font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-card-bg border border-border-color text-foreground/70 hover:text-primary-blue cursor-pointer relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme === "dark" ? "dark" : "light"}
                  {...themeToggleTransition}
                >
                  {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
                </motion.div>
              </AnimatePresence>
            </button>

            <Link
              href="/#contact"
              className="bg-primary-blue text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all hover:shadow-lg active:scale-95"
            >
              Join the Club
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-card-bg text-foreground/70 cursor-pointer relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme === "dark" ? "dark" : "light"}
                  {...themeToggleTransition}
                >
                  {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
                </motion.div>
              </AnimatePresence>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground/70 hover:text-primary-blue transition-colors cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b border-border-color absolute top-20 left-0 right-0 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-foreground/70 hover:text-primary-blue hover:bg-card-bg rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                >
                  Join the Club
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
