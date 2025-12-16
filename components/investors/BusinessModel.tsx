// components/investors/BusinessModel.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, ShoppingBag, Video, Sparkles } from 'lucide-react';

export default function BusinessModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'School Subscriptions',
      percentage: 45,
      amount: '₹25K-₹85K/year',
      description: 'Tiered pricing based on school size. Full platform access, evaluation tools, match coordination',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingBag,
      title: 'Marketplace Commissions',
      percentage: 28,
      amount: '8-12% commission',
      description: 'Equipment sales, coach bookings, venue rentals. ₹450 AOV, 2.3 orders/student annually',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Video,
      title: 'Content Platform',
      percentage: 18,
      amount: '15% revenue share',
      description: 'Creator earnings from subscriptions, tips, ads. ₹120 annual revenue per creator',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'Premium Services',
      percentage: 9,
      amount: '20% of earnings',
      description: 'Talent management, advanced analytics, AI coaching, white-label solutions',
      color: 'from-orange-500 to-red-500',
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Diversified Revenue Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four revenue streams creating resilient, high-margin business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${stream.color} rounded-xl flex items-center justify-center`}>
                  <stream.icon className="w-7 h-7 text-white" />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-br ${stream.color} bg-clip-text text-transparent`}>
                  {stream.percentage}%
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stream.title}</h3>
              <div className="text-lg font-semibold text-gray-700 mb-4">{stream.amount}</div>
              <p className="text-gray-600 leading-relaxed">{stream.description}</p>
              
              {/* Progress bar */}
              <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${stream.percentage}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                  className={`h-full bg-gradient-to-r ${stream.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unit Economics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Unit Economics (Year 2)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Avg Revenue/School', value: '₹48K/yr' },
              { label: 'Customer CAC', value: '₹8.2K' },
              { label: 'Lifetime Value', value: '₹288K' },
              { label: 'LTV:CAC Ratio', value: '35:1' },
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-lg text-gray-300">
              <span className="font-bold text-green-400">68% gross margins</span> by Year 3 • 
              <span className="font-bold text-purple-400"> Path to profitability in 24 months</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
