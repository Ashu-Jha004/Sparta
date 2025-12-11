"use client";

import { motion } from "framer-motion";
import {
  slideUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/animations";

export function ProblemSection() {
  return (
    <section id="problem" className="section-container section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.p
          variants={staggerItem}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-sparta-blue-600"
        >
          Before Sparta
        </motion.p>

        <motion.h2
          variants={slideUp}
          className="mt-3 text-heading-xl md:text-display-md font-display font-semibold text-sparta-black-900"
        >
          Indian school sports are broken{" "}
          <span className="gradient-text">
            for students, parents and coaches.
          </span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="mt-4 text-body-lg text-sparta-black-600"
        >
          Schools charge more every year, but parents rarely see real growth in
          their child&apos;s discipline, confidence, or physical health.
          Students escape into reels and games, avoiding real-world teams and
          playgrounds, while non-cricket sports, local coaches and pro athletes
          slowly disappear from the map.
        </motion.p>
      </motion.div>

      {/* Pain cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Card 1: Students & parents */}
        <motion.div
          variants={staggerItem}
          className="glass-card rounded-2xl p-5 md:p-6 flex flex-col h-full"
        >
          <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-3">
            Students & parents
          </h3>
          <ul className="space-y-2 text-body-md text-sparta-black-600">
            <li>
              • Screen-first childhood: hours on social media and games, not on
              the ground with teammates.
            </li>
            <li>
              • No clear path from school sports to real opportunities, so kids
              stop taking sports seriously.
            </li>
            <li>
              • Parents pay high fees but mostly see exam results, not visible
              progress in character or physical strength.
            </li>
          </ul>
        </motion.div>

        {/* Card 2: Schools & system */}
        <motion.div
          variants={staggerItem}
          className="glass-card rounded-2xl p-5 md:p-6 flex flex-col h-full"
        >
          <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-3">
            Schools & the system
          </h3>
          <ul className="space-y-2 text-body-md text-sparta-black-600">
            <li>
              • Hard to justify rising fees without a tangible story for sports,
              discipline, or student well-being.
            </li>
            <li>
              • PE periods are unstructured; no consistent evaluations, clubs,
              or inter-school ecosystem to showcase.
            </li>
            <li>
              • Without proof of outcomes, parent trust erodes and schools lose
              their edge to competitors.
            </li>
          </ul>
        </motion.div>

        {/* Card 3: Coaches, athletes & sports economy */}
        <motion.div
          variants={staggerItem}
          className="glass-card rounded-2xl p-5 md:p-6 flex flex-col h-full"
        >
          <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-3">
            Coaches, athletes & sports economy
          </h3>
          <ul className="space-y-2 text-body-md text-sparta-black-600">
            <li>
              • Non-cricket sports struggle for players, viewership and
              sponsors, so many talented athletes quit early.
            </li>
            <li>
              • Local coaches and small academies cannot reliably monetize their
              skill or find a steady stream of young athletes.
            </li>
            <li>
              • No single hub for local matches, content or data means India
              keeps missing out on the next generation of talent.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
