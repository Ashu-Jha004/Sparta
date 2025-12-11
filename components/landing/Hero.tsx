"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  heroText,
  heroImage,
  staggerContainer,
  staggerItem,
  defaultViewport,
  buttonAnimation,
} from "@/lib/animations";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-container section-padding flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
    >
      {/* Left: Text + CTAs */}
      <motion.div
        className="flex-1 max-w-xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {/* Pill tag */}
        <motion.div
          variants={staggerItem}
          className="inline-flex items-center gap-2 rounded-full bg-sparta-blue-50 px-3 py-1 text-xs font-medium text-sparta-blue-700 mb-4"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sparta-green-500" />
          Built for Indian schools, students & coaches
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={heroText}
          className="text-display-md md:text-display-lg font-display font-semibold tracking-tight text-sparta-black-900"
        >
          Turn school sports into{" "}
          <span className="gradient-text">careers, character & content.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={staggerItem}
          className="mt-4 text-body-lg text-sparta-black-600 max-w-lg"
        >
          Sparta builds competitive sports clubs inside schools—physical
          evaluations, weekly inter-school matches, and student-led streaming—so
          students grow discipline and confidence while schools finally show
          parents where the fees go.
        </motion.p>

        {/* Traction stats */}
        <motion.div
          variants={staggerItem}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          <div>
            <div className="stat-number">5</div>
            <div className="stat-label">Schools</div>
          </div>
          <div>
            <div className="stat-number">1</div>
            <div className="stat-label">Academy</div>
          </div>
          <div>
            <div className="stat-number">200+</div>
            <div className="stat-label">Student athletes</div>
          </div>
          <div>
            <div className="stat-number">30</div>
            <div className="stat-label">Matches played</div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={staggerItem}
          className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center"
        >
          <Link href="https://sportsv2-4xzd.vercel.app/auth/sign-up">
            <motion.button
              whileHover={buttonAnimation.hover}
              whileTap={buttonAnimation.tap}
              className="btn-primary w-full sm:w-auto"
            >
              Sign-Up
            </motion.button>
          </Link>

          <Link href="https://sportsv2-4xzd.vercel.app/auth/sign-in">
            <motion.button
              whileHover={buttonAnimation.hover}
              whileTap={buttonAnimation.tap}
              className="btn-secondary w-full sm:w-auto"
            >
              Sign-In
            </motion.button>
          </Link>
        </motion.div>

        {/* Social proof line */}
        <motion.p
          variants={staggerItem}
          className="mt-4 text-xs md:text-sm text-sparta-black-500"
        >
          Already powering 5 schools, 1 academy, 200+ athletes and 30
          matches—built by founders obsessed with Indian school sports.
        </motion.p>
      </motion.div>

      {/* Right: Visual mock + students */}
      <motion.div
        className="flex-1 w-full relative"
        variants={heroImage}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <div className="relative max-w-xl mx-auto">
          {/* Main dashboard mockup */}
          <div className="glass-card rounded-3xl p-4 md:p-5 shadow-2xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sparta-blue-100">
              {/* Placeholder image – replace with your real hero dashboard later */}
              <Image
                src="/assets/hero-dashboard.png"
                alt="Sparta dashboard showing evaluations, rankings, and live match"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay: mini stats */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs md:text-sm">
              <div className="rounded-xl bg-sparta-blue-50 px-3 py-2">
                <p className="text-sparta-black-500">Monthly matches</p>
                <p className="font-semibold text-sparta-blue-700">
                  Every Sunday
                </p>
              </div>
              <div className="rounded-xl bg-sparta-blue-50 px-3 py-2">
                <p className="text-sparta-black-500">Evaluations</p>
                <p className="font-semibold text-sparta-blue-700">
                  Every 3 months
                </p>
              </div>
              <div className="rounded-xl bg-sparta-blue-50 px-3 py-2">
                <p className="text-sparta-black-500">Revenue share</p>
                <p className="font-semibold text-sparta-blue-700">
                  85% to teams
                </p>
              </div>
            </div>
          </div>

          {/* Floating students image */}
          <motion.div
            className="hidden md:block absolute -left-6 -bottom-10 w-40 h-40 rounded-2xl overflow-hidden shadow-xl border border-white bg-white"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src="/assets/hero-students.jpg"
              alt="Students playing sports and recording matches"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            className="absolute -right-2 top-10 rounded-full bg-white shadow-lg border border-sparta-blue-100 px-4 py-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="h-2 w-2 rounded-full bg-sparta-green-500" />
            <span className="text-xs font-medium text-sparta-black-700">
              Clubs, matches & streaming in one place
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
