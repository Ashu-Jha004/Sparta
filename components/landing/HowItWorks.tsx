"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  slideUp,
  defaultViewport,
  cardReveal,
} from "@/lib/animations";
import Image from "next/image";

const steps = [
  {
    id: 1,
    label: "Step 1",
    title: "Evaluate every student",
    description:
      "Students register on Sparta and complete guided physical evaluations run by PE teachers or certified coaches. Speed, strength, stamina and agility are measured every 3 months, so everyone starts with a real baseline.",
    icon: "📋",
  },
  {
    id: 2,
    label: "Step 2",
    title: "Join clubs & train",
    description:
      "Based on their profile, students apply to school clubs or teams. Guides and captains accept players who can contribute, set training schedules and monthly targets, and keep attendance and effort consistent.",
    icon: "🤝",
  },
  {
    id: 3,
    label: "Step 3",
    title: "Compete every Sunday",
    description:
      "Every week, captains challenge other schools. Once the match is confirmed, Sparta sends date, time, location and a secure OTP. Neutral guides oversee games to protect fairness, and results update club rankings automatically.",
    icon: "🏆",
  },
  {
    id: 4,
    label: "Step 4",
    title: "Stream, rank & earn",
    description:
      "During matches, students handle recording, commentary and broadcasting. Winning teams upload to Game Tube, earn 85% of video revenue, and use the footage to analyse performance, attract sponsors and grow their fanbase.",
    icon: "📺",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-container section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.p
          variants={staggerItem}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-sparta-blue-600"
        >
          How Sparta works
        </motion.p>

        <motion.h2
          variants={slideUp}
          className="mt-3 text-heading-xl md:text-display-md font-display font-semibold text-sparta-black-900"
        >
          A weekly club system that{" "}
          <span className="gradient-text">turns PE into a real league.</span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="mt-4 text-body-lg text-sparta-black-600"
        >
          Sparta plugs into your existing timetable and grounds. We give
          structure to evaluations, training and fixtures so every Saturday and
          Sunday becomes a rhythm of preparation, competition and celebration
          inside your school.
        </motion.p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-10 grid gap-6 lg:grid-cols-[1.4fr,1fr] items-start"
      >
        {/* Steps list */}
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={cardReveal}
              className="glass-card rounded-2xl p-4 md:p-5 flex gap-4 items-start"
            >
              <div className="flex flex-col items-center">
                <div className="h-9 w-9 rounded-full bg-sparta-blue-500 flex items-center justify-center text-lg">
                  <span className="text-white">{step.icon}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-2 h-full w-px bg-sparta-black-200 hidden md:block" />
                )}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sparta-black-400">
                  {step.label}
                </p>
                <h3 className="mt-1 text-heading-md font-semibold text-sparta-black-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-body-md text-sparta-black-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual timeline */}
        <motion.div
          variants={cardReveal}
          className="glass-card rounded-3xl p-5 md:p-6 shadow-2xl"
        >
          <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-3">
            A simple weekly rhythm
          </h3>
          <ul className="space-y-3 text-body-sm text-sparta-black-600">
            <li>
              <span className="font-semibold text-sparta-blue-700">
                Monday–Friday:
              </span>{" "}
              Training sessions and habit-building inside clubs.
            </li>
            <li>
              <span className="font-semibold text-sparta-blue-700">
                Saturday:
              </span>{" "}
              Captains challenge other schools, confirm fixtures and prepare
              lineups.
            </li>
            <li>
              <span className="font-semibold text-sparta-blue-700">
                Sunday:
              </span>{" "}
              Matches are played, filmed, overseen by guides and uploaded to
              Game Tube.
            </li>
            <li>
              <span className="font-semibold text-sparta-blue-700">
                Every 3 months:
              </span>{" "}
              Full physical evaluations to track student progress over time.
            </li>
          </ul>

          <div className="mt-4 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sparta-blue-100">
            <Image
              src="/assets/how-it-works-timeline.png"
              alt="Visual timeline of Sparta's weekly flow"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
