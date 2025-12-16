// components/investors/InvestmentAsk.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Rocket, Users, Server } from "lucide-react";

export default function InvestmentAsk() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fundAllocation = [
    {
      category: "Product Development",
      percentage: 35,
      icon: Server,
      color: "bg-blue-500",
    },
    {
      category: "Sales & Marketing",
      percentage: 30,
      icon: Users,
      color: "bg-green-500",
    },
    {
      category: "Operations",
      percentage: 20,
      icon: Target,
      color: "bg-purple-500",
    },
    {
      category: "Technology Infrastructure",
      percentage: 15,
      icon: Rocket,
      color: "bg-orange-500",
    },
  ];

  return (
    <section
      id="investment-ask"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-semibold mb-4 border border-white/30">
            Investment Opportunity
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Seeking ₹12 Crore Seed Round
          </h2>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto">
            Scale to 2,000 schools and achieve break-even within 18 months
          </p>
        </motion.div>

        {/* Use of Funds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {fundAllocation.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.category}</h3>
                  </div>
                </div>
                <div className="text-3xl font-bold">{item.percentage}%</div>
              </div>
              <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.percentage}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                  className={`h-full ${item.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Milestones This Funding Enables
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "2,000 Schools Onboarded",
                desc: "Across 25 cities in India",
              },
              {
                title: "500K Registered Athletes",
                desc: "50K weekly match participants",
              },
              {
                title: "₹15 Cr Marketplace GMV",
                desc: "Equipment + coaching sales",
              },
              {
                title: "Break-Even Revenue",
                desc: "Within 18 months of funding",
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{milestone.title}</h4>
                  <p className="text-gray-300">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exit Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Clear Exit Opportunities</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Strategic acquisition by EdTech giants • Sports media companies •
            International expansion to Southeast Asia, Africa, Latin America
          </p>
        </motion.div>
      </div>
    </section>
  );
}
