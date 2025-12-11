"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { buttonAnimation } from "@/lib/animations";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  // ✅ FIX 1: Explicit false initial state (no undefined)
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // ✅ FIX 2: Client-only scroll listener with cleanup
  useEffect(() => {
    // ✅ FIX 3: Check window exists (SSR safe)
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      {/* Scroll progress bar - SSR safe */}
      <motion.div
        className="fixed left-0 top-0 right-0 h-1 origin-left bg-sparta-blue-500 z-50"
        style={{ scaleX }}
        aria-hidden="true"
        suppressHydrationWarning // ✅ FIX 4: Suppress motion hydration warning
      />

      {/* Navbar - SSR safe */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/80 border-b border-sparta-black-200 shadow-sm"
            : "bg-transparent"
        }`}
        suppressHydrationWarning // ✅ FIX 5: Key hydration mismatch source
      >
        <div className="section-container flex items-center justify-between py-3 md:py-4">
          {/* Left: Logo + name */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-sparta-blue-500 flex items-center justify-center text-white font-display font-semibold">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base md:text-lg font-semibold tracking-tight text-sparta-black-900">
                Sparta
              </span>
              <span className="text-xs md:text-sm text-sparta-black-500">
                School Sports Clubs & Streaming
              </span>
            </div>
          </div>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-sparta-black-600">
            <a
              href="#problem"
              className="hover:text-sparta-blue-600 transition-colors"
            >
              Why Sparta
            </a>
            <a
              href="#how-it-works"
              className="hover:text-sparta-blue-600 transition-colors"
            >
              How it works
            </a>
            <a
              href="#product"
              className="hover:text-sparta-blue-600 transition-colors"
            >
              Product
            </a>
            <a
              href="#traction"
              className="hover:text-sparta-blue-600 transition-colors"
            >
              Results
            </a>
            <Link
              href="/investors"
              className="hover:text-sparta-blue-600 whitespace-nowrap transition-colors"
            >
              For investors
            </Link>
          </nav>

          {/* Right: CTAs */}
          <div className="flex items-center gap-2">
            <Link
              href="https://sportsv2-4xzd.vercel.app/auth/sign-up"
              className="hidden md:block"
            >
              <motion.button
                whileHover={buttonAnimation.hover}
                whileTap={buttonAnimation.tap}
                className="btn-secondary text-xs md:text-sm"
              >
                Sign-Up
              </motion.button>
            </Link>
            <Link href="https://sportsv2-4xzd.vercel.app/auth/sign-in">
              <motion.button
                whileHover={buttonAnimation.hover}
                whileTap={buttonAnimation.tap}
                className="btn-primary text-xs md:text-sm"
              >
                Sign-in
              </motion.button>
            </Link>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
