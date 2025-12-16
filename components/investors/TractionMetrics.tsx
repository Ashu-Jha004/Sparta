// components/investors/TractionMetrics.tsx
'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { School, Users, PlayCircle, TrendingUp } from 'lucide-react';

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration });
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function TractionMetrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    {
      icon: School,
      value: 12,
      label: 'Pilot Schools',
      subtext: 'Delhi NCR & Pune',
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      value: 850,
      label: 'Registered Athletes',
      subtext: '94% active weekly',
      color: 'bg-green-500',
    },
    {
      icon: PlayCircle,
      value: 23,
      label: 'Matches Completed',
      subtext: '12K+ video views',
      color: 'bg-purple-500',
    },
    {
      icon: TrendingUp,
      value: 45,
      label: 'Certified Guides',
      subtext: '4.8/5 avg rating',
      color: 'bg-orange-500',
    },
  ];

  const milestones = [
    { period: '90 Days', target: '100 schools, 5 cities, Marketplace launch' },
    { period: '12 Months', target: '2,000 schools, 500K athletes, ₹8.5Cr ARR' },
    { period: '36 Months', target: '15,000 schools, Break-even, Series A' },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-semibold mb-4 border border-green-500/30">
            Current Traction
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Building Momentum in Beta
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Validated product-market fit with strong early adoption signals
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center mb-4`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">
                <Counter from={0} to={metric.value} />
                {metric.value > 100 ? '+' : ''}
              </div>
              <div className="text-lg font-semibold mb-1">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Roadmap Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Growth Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.period} className="relative">
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                )}
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-purple-400 mb-3">{milestone.period}</div>
                  <p className="text-gray-300">{milestone.target}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
