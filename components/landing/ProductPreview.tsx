"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  slideUp,
  defaultViewport,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import Image from "next/image";

const features = [
  {
    id: "evaluations",
    title: "Physical evaluations that track real progress",
    description:
      "Every student gets baseline measurements for speed, strength, stamina and agility. Guides update records every 3 months so schools and parents see growth over time, not just participation.",
    image: "/assets/progress.png",
    imageAlt: "Student evaluation dashboard with progress charts",
  },
  {
    id: "clubs",
    title: "Club rankings that drive competition",
    description:
      "Every match result updates school-wide rankings automatically. Students see where they stand, which schools to challenge next, and how close they are to moving up a class.",
    image: "/assets/product-rankings.png",
    imageAlt: "School club rankings table with upcoming matches",
  },
  {
    id: "matches",
    title: "Match scheduling with integrity built in",
    description:
      "Captains challenge other schools on Saturdays. Sparta confirms fixtures, sends date/time/location with secure OTPs, and assigns neutral guides to oversee matches and record results.",
    image: "/assets/product-match.png",
    imageAlt: "Match challenge screen with team selection",
  },
  {
    id: "streaming",
    title: "Game Tube: streaming, revenue and fanbases",
    description:
      "Students handle recording, commentary and broadcasting during matches. Winning teams upload to Game Tube, earn 85% of revenue from ads and donations, and build followings like real content creators.",
    image: "/assets/product-streaming.png",
    imageAlt: "Live streaming interface with chat and monetization",
  },
  {
    id: "marketplace",
    title: "Marketplace for equipment, coaches and venues",
    description:
      "Schools and students buy equipment direct from manufacturers at low cost. Coaches list their services, schools find experienced guides, and everyone saves time and money in one hub.",
    image: "/assets/product-marketplace.png",
    imageAlt: "Sports equipment marketplace with products",
  },
  {
    id: "ai-coach",
    title: "AI Coach analyzes your stats",
    description:
      "Upload evaluation results and get instant personalized training plans, nutrition advice, and technique tips. Sparta's AI coach sees patterns in your speed, strength and stamina data humans miss.",
    image: "/assets/AI-Coach.png", // Generate this next
    imageAlt: "AI Coach dashboard with personalized training recommendations",
  },
];

export function ProductPreview() {
  return (
    <section id="product" className="section-container section-padding">
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
          Product preview
        </motion.p>

        <motion.h2
          variants={slideUp}
          className="mt-3 text-heading-xl md:text-display-md font-display font-semibold text-sparta-black-900"
        >
          Everything you need to run{" "}
          <span className="gradient-text">a real sports ecosystem.</span>
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="mt-4 text-body-lg text-sparta-black-600"
        >
          Sparta isn&apos;t just a tracker. It&apos;s the operating system for
          school sports: evaluations, clubs, matches, streaming and commerce all
          connected so nothing falls through the cracks.
        </motion.p>
      </motion.div>

      {/* Feature list with alternating layout */}
      <div className="mt-16 space-y-20">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={feature.id}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "" : "lg:grid-flow-dense"
              }`}
            >
              {/* Text */}
              <motion.div
                variants={isEven ? slideInLeft : slideInRight}
                className={isEven ? "" : "lg:col-start-2"}
              >
                <h3 className="text-heading-lg font-semibold text-sparta-black-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-body-lg text-sparta-black-600">
                  {feature.description}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={isEven ? slideInRight : slideInLeft}
                className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}
              >
                <div className="glass-card rounded-3xl p-4 md:p-5 shadow-2xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sparta-blue-100">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
