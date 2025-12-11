"use client";

import { motion } from "framer-motion";
import {
  slideUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
  imageReveal,
} from "@/lib/animations";
import Image from "next/image";

export function SolutionSection() {
  return (
    <section id="solution" className="section-container section-padding">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="grid lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-16 items-start"
      >
        {/* Left: Text + transformation cards */}
        <div>
          <motion.p
            variants={staggerItem}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-sparta-blue-600"
          >
            After Sparta
          </motion.p>

          <motion.h2
            variants={slideUp}
            className="mt-3 text-heading-xl md:text-display-md font-display font-semibold text-sparta-black-900"
          >
            Clubs, matches and streaming that{" "}
            <span className="gradient-text">change how schools do sports.</span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mt-4 text-body-lg text-sparta-black-600 max-w-xl"
          >
            Sparta installs a complete club system inside every school: guided
            physical evaluations, structured teams, weekly inter-school matches
            overseen by certified guides, and student-produced content that
            families and fans can actually watch and support.
          </motion.p>

          {/* Transformation grid */}
          <motion.div
            variants={staggerContainer}
            className="mt-8 grid gap-5 md:grid-cols-2"
          >
            {/* Students */}
            <motion.div
              variants={staggerItem}
              className="glass-card rounded-2xl p-5 flex flex-col h-full"
            >
              <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-1">
                Students
              </h3>
              <p className="text-body-sm text-sparta-black-500 mb-3">
                From scrolling reels to chasing rankings.
              </p>
              <ul className="space-y-2 text-body-md text-sparta-black-600">
                <li>
                  • Guided physical evaluations every 3 months with real stats.
                </li>
                <li>
                  • Join school clubs, train with clear targets and weekly
                  fixtures.
                </li>
                <li>
                  • Build confidence, discipline and teamwork by competing on
                  Sundays instead of just watching highlights.
                </li>
              </ul>
            </motion.div>

            {/* Parents */}
            <motion.div
              variants={staggerItem}
              className="glass-card rounded-2xl p-5 flex flex-col h-full"
            >
              <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-1">
                Parents
              </h3>
              <p className="text-body-sm text-sparta-black-500 mb-3">
                From “Where do the fees go?” to “I can see the change.”
              </p>
              <ul className="space-y-2 text-body-md text-sparta-black-600">
                <li>
                  • Watch their child’s matches, habits and traits grow on real
                  video, not just report cards.
                </li>
                <li>
                  • Track progress in strength, speed and stamina through
                  evaluation records.
                </li>
                <li>
                  • Finally feel school fees are funding body, mind and
                  character development.
                </li>
              </ul>
            </motion.div>

            {/* Schools */}
            <motion.div
              variants={staggerItem}
              className="glass-card rounded-2xl p-5 flex flex-col h-full"
            >
              <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-1">
                Schools
              </h3>
              <p className="text-body-sm text-sparta-black-500 mb-3">
                From unstructured PE to a visible sports ecosystem.
              </p>
              <ul className="space-y-2 text-body-md text-sparta-black-600">
                <li>
                  • Structured clubs led by PE teachers and guides, not random
                  periods.
                </li>
                <li>
                  • Weekly inter-school fixtures and rankings that build school
                  pride and discipline.
                </li>
                <li>
                  • A clear story to parents: “Here is what your child is
                  building beyond marks.”
                </li>
              </ul>
            </motion.div>

            {/* Coaches & pros */}
            <motion.div
              variants={staggerItem}
              className="glass-card rounded-2xl p-5 flex flex-col h-full"
            >
              <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-1">
                Coaches & pro athletes
              </h3>
              <p className="text-body-sm text-sparta-black-500 mb-3">
                From unstable gigs to a real youth pipeline.
              </p>
              <ul className="space-y-2 text-body-md text-sparta-black-600">
                <li>
                  • Get matched with schools needing experienced guides at
                  affordable rates.
                </li>
                <li>
                  • Earn from evaluations, coaching, and streaming revenue
                  share.
                </li>
                <li>
                  • Use Sparta as the hub to showcase talent, find sponsors and
                  grow a personal brand.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: Visual Before/After graphic */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-5 md:p-6 shadow-2xl">
            <h3 className="text-heading-md font-semibold text-sparta-black-900 mb-4">
              From this ➝ to this
            </h3>
            <div className="grid gap-4 text-body-sm text-sparta-black-600">
              <div className="rounded-2xl border border-sparta-black-200 bg-white/80 p-4">
                <p className="font-semibold text-sparta-red-500 mb-1">
                  Before Sparta
                </p>
                <ul className="space-y-1">
                  <li>• Students bored of PE, hooked on phones.</li>
                  <li>• No consistent games, no rankings, no footage.</li>
                  <li>
                    • Coaches and athletes struggle to find work or visibility.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-sparta-blue-200 bg-sparta-blue-50/80 p-4">
                <p className="font-semibold text-sparta-blue-700 mb-1">
                  After Sparta
                </p>
                <ul className="space-y-1">
                  <li>
                    • Clubs in every school with clear training and fixtures.
                  </li>
                  <li>
                    • Weekly Sunday matches recorded, ranked and streamed.
                  </li>
                  <li>
                    • Students, schools and coaches all share in new revenue.
                  </li>
                </ul>
              </div>
            </div>

            {/* Placeholder image area */}
            <div className="mt-5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sparta-blue-100">
              {/* Replace with a dedicated Before/After illustration later */}
              <Image
                src="/assets/solution-before-after.png"
                alt="Before and after Sparta illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
