// components/investors/CompetitiveAdvantage.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Network, Layers, TrendingUp, Database } from "lucide-react";

export default function CompetitiveAdvantage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Network,
      title: "Network Effects",
      description:
        "Every new school and athlete exponentially increases match opportunities, content quality, and platform value",
      moat: "Insurmountable",
    },
    {
      icon: Layers,
      title: "Vertical Integration",
      description:
        "Only platform combining evaluation, competition, marketplace, and monetization in one ecosystem",
      moat: "Unique",
    },
    {
      icon: Shield,
      title: "Stakeholder Alignment",
      description:
        "Creates tangible value for every participant—students, schools, coaches, and parents win together",
      moat: "Sustainable",
    },
    {
      icon: TrendingUp,
      title: "Content Moat",
      description:
        "User-generated authentic match footage and athlete stories impossible to replicate at scale",
      moat: "Defensible",
    },
    {
      icon: Database,
      title: "Data Asset",
      description:
        "Comprehensive physical evaluation and performance analytics become more valuable over time",
      moat: "Compounding",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Unassailable Competitive Moats
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five interconnected advantages that strengthen with scale
          </p>
        </motion.div>

        <div className="space-y-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 flex items-start gap-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {advantage.title}
                  </h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {advantage.moat}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
