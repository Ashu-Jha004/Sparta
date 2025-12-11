"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  slideUp,
  defaultViewport,
  cardReveal,
} from "@/lib/animations";

const personas = [
  {
    id: "schools",
    label: "For schools",
    title: "Turn fees into visible outcomes.",
    points: [
      "Install structured sports clubs managed by PE teachers and trusted guides, not just loose periods.",
      "Show parents clear progress with evaluations, rankings and match footage instead of vague promises.",
      "Build a school brand around discipline, teamwork and national-level ambition, not only exam scores.",
    ],
    tag: "Principals • Management • PE heads",
  },
  {
    id: "students",
    label: "For students",
    title: "From spectators to real athletes.",
    points: [
      "Move from scrolling highlights to playing weekly matches and chasing real rankings with your friends.",
      "Get physical evaluations every 3 months and see your speed, stamina and strength improve over time.",
      "Use Game Tube channels to share matches, train smarter and start building a sports identity early.",
    ],
    tag: "Class 6–12 • All skill levels",
  },
  {
    id: "parents",
    label: "For parents",
    title: "Know what your child is becoming.",
    points: [
      "Watch your child’s matches, see their new habits and follow their progress beyond just marks.",
      "Trust that school time is building character traits like discipline, teamwork and resilience.",
      "Feel confident that fees are funding both academic and physical growth, not just buildings.",
    ],
    tag: "Mothers • Fathers • Guardians",
  },
  {
    id: "coaches",
    label: "For coaches & pros",
    title: "A youth pipeline and a platform.",
    points: [
      "Connect with schools that need your expertise and earn from coaching, evaluations and guides’ fees.",
      "Monetize your knowledge through content, premium sessions and revenue share from streams.",
      "Spot and develop serious talent early, then help them reach trials, tournaments and sponsors.",
    ],
    tag: "Coaches • Trainers • Ex-athletes",
  },
];

export function PersonaCards() {
  return (
    <section id="who-its-for" className="section-container section-padding">
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
          Who Sparta is for
        </motion.p>

        <motion.h2
          variants={slideUp}
          className="mt-3 text-heading-xl md:text-display-md font-display font-semibold text-sparta-black-900"
        >
          One platform for{" "}
          <span className="gradient-text">
            schools, students, parents and coaches.
          </span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="mt-4 text-body-lg text-sparta-black-600"
        >
          Everyone around a school feels the gap in sports today. Sparta gives
          each of them a reason to believe again—whether it&apos;s structure,
          safety, ambition or income.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        {personas.map((persona) => (
          <motion.article
            key={persona.id}
            variants={cardReveal}
            className="glass-card rounded-2xl p-5 md:p-6 flex flex-col h-full"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sparta-black-400 mb-1">
              {persona.label}
            </p>
            <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-2">
              {persona.title}
            </h3>
            <p className="text-xs text-sparta-black-500 mb-3">{persona.tag}</p>
            <ul className="space-y-2 text-body-md text-sparta-black-600">
              {persona.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
