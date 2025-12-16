// components/investors/ProblemSection.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertCircle, TrendingDown, X, Users } from 'lucide-react';

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    {
      icon: Users,
      title: 'Youth Development Crisis',
      stats: '73% lack essential life skills',
      description: 'Screen time averaging 7+ hours daily leading to declining physical and mental health',
      impact: '₹850M spent on unjustified school fees annually',
    },
    {
      icon: TrendingDown,
      title: 'Broken Sports Economy',
      stats: '89% of athletes abandon careers',
      description: 'No monetization infrastructure for non-cricket sports, coaches earning 40-60% below potential',
      impact: 'Zero structured pipeline from school to national representation',
    },
    {
      icon: AlertCircle,
      title: 'School Accountability Gap',
      stats: '1.5M schools struggling with justification',
      description: 'Cannot justify premium fees to skeptical parents, sports infrastructure sitting idle',
      impact: 'PE teachers and coaches facing career stagnation',
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            India&apos;s Youth Development Crisis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three interconnected problems creating a ₹2.3B market opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-red-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              
              <div className="inline-block px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-4">
                {problem.stats}
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{problem.description}</p>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-900">Impact: {problem.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pain Points Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            The Cascading Effect
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="flex-1">
              <div className="text-3xl font-bold text-red-600 mb-2">7+ hrs</div>
              <div className="text-sm text-gray-700">Daily Screen Time</div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
            <div className="flex-1">
              <div className="text-3xl font-bold text-red-600 mb-2">73%</div>
              <div className="text-sm text-gray-700">Lack Life Skills</div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
            <div className="flex-1">
              <div className="text-3xl font-bold text-red-600 mb-2">89%</div>
              <div className="text-sm text-gray-700">Athletes Quit</div>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
            <div className="flex-1">
              <div className="text-3xl font-bold text-red-600 mb-2">₹850M</div>
              <div className="text-sm text-gray-700">Wasted Annually</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
