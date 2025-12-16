// components/investors/SolutionSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Zap, Users, ShoppingCart, Video } from 'lucide-react';

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: Users,
      title: 'Physical Evaluation & Club Formation',
      description: 'Comprehensive assessment by certified guides, structured team formation, and weekly inter-school competition framework',
      features: ['Certified guide network', 'Performance tracking', 'Club ranking system'],
    },
    {
      icon: Zap,
      title: 'Structured Competition',
      description: 'Weekly matches with student-led broadcasting, automated match coordination, and performance-based rankings',
      features: ['Match scheduling', 'Student commentators', 'Live oversight system'],
    },
    {
      icon: ShoppingCart,
      title: 'Marketplace & Infrastructure',
      description: 'Direct manufacturer connections for equipment, verified coach directory, and end-to-end logistics',
      features: ['40-60% cost savings', 'Verified suppliers', 'Logistics management'],
    },
    {
      icon: Video,
      title: 'Content & Career Development',
      description: 'Live streaming platform, talent management, brand building, and sponsorship connections',
      features: ['85% creator revenue', 'Talent representation', 'Brand partnerships'],
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold mb-4">
            The Sparta Solution
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete Competitive Sports Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four integrated pillars creating value for students, schools, coaches, and communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{pillar.description}</p>
              
              <div className="space-y-2">
                {pillar.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">How Sparta Creates Value</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Students Join', value: 'Skills + Health' },
              { step: '2', title: 'Schools Engage', value: 'Fee Justification' },
              { step: '3', title: 'Content Flows', value: '85% Revenue Share' },
              { step: '4', title: 'Ecosystem Grows', value: 'Network Effects' },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
