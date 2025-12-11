"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  slideUp,
  defaultViewport,
  counterAnimation,
  cardReveal,
} from "@/lib/animations";
import Image from "next/image";

const stats = [
  {
    id: "schools",
    number: "5",
    label: "Schools",
    sublabel: "Running active clubs",
  },
  {
    id: "academy",
    number: "1",
    label: "Academy",
    sublabel: "Professional partner",
  },
  {
    id: "athletes",
    number: "200+",
    label: "Student athletes",
    sublabel: "Evaluated & competing",
  },
  {
    id: "matches",
    number: "30",
    label: "Matches played",
    sublabel: "Filmed & ranked",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Our students finally have something to look forward to every week. The club system brought discipline and excitement back to PE.",
    author: "Principal",
    school: "Partner school, Delhi NCR",
  },
  {
    id: 2,
    quote:
      "I can see my son's progress in real numbers and watch his matches online. This is what school fees should buy.",
    author: "Parent",
    school: "Student in Class 9",
  },
  {
    id: 3,
    quote:
      "Sparta gave me access to 50+ young athletes in one month. I can finally build a sustainable coaching practice.",
    author: "Coach",
    school: "State-level football trainer",
  },
];

export function TractionSection() {
  return (
    <section id="traction" className="section-container section-padding">
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
          Early traction
        </motion.p>

        <motion.h2
          variants={slideUp}
          className="mt-3 text-heading-xl md:text-display-md font-display font-semibold text-sparta-black-900"
        >
          Already powering school sports{" "}
          <span className="gradient-text">for hundreds of students.</span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="mt-4 text-body-lg text-sparta-black-600"
        >
          We launched with 5 schools and 1 academy. In just a few months, 200+
          students have been evaluated, joined clubs, and competed in 30 real
          matches—all recorded, ranked and streamed.
        </motion.p>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={counterAnimation}
            className="glass-card rounded-2xl p-5 md:p-6 text-center"
          >
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label mt-1">{stat.label}</div>
            <p className="mt-1 text-xs text-sparta-black-500">
              {stat.sublabel}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Visual proof: students playing */}
      <motion.div
        variants={cardReveal}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-12 glass-card rounded-3xl p-4 md:p-5 shadow-2xl max-w-4xl mx-auto"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-sparta-blue-100">
          <Image
            src="/assets/students-playing.png"
            alt="Students competing in a Sparta-organized school match"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-center text-sm text-sparta-black-600">
          Students from our partner schools competing in a weekly Sunday match,
          recorded and broadcast by their teammates.
        </p>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-12 grid gap-6 md:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={cardReveal}
            className="glass-card rounded-2xl p-5 flex flex-col h-full"
          >
            <p className="text-body-md text-sparta-black-700 italic">
              {testimonial.quote}
            </p>
            <div className="mt-4 pt-4 border-t border-sparta-black-200">
              <p className="text-sm font-semibold text-sparta-black-900">
                {testimonial.author}
              </p>
              <p className="text-xs text-sparta-black-500">
                {testimonial.school}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* School logos placeholder (optional - add when you have partner logos) */}
      <motion.div
        variants={staggerItem}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-12 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sparta-black-400 mb-6">
          Trusted by schools and academies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
          {/* Placeholder for school logos - replace with real logos later */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-12 w-24 rounded-lg bg-sparta-black-100 flex items-center justify-center text-xs text-sparta-black-400"
            >
              School {i}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
