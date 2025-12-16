// components/investors/MarketOpportunity.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Target, Rocket } from 'lucide-react';

export default function MarketOpportunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const markets = [
    {
      icon: TrendingUp,
      label: 'TAM',
      title: 'Total Addressable Market',
      value: '₹2.3B',
      details: ['1.5M schools', '260M students', '450K coaches'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      label: 'SAM',
      title: 'Serviceable Addressable',
      value: '₹890M',
      details: ['420K schools', '95M students', '180K coaches'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      label: 'SOM',
      title: 'Serviceable Obtainable (Y3)',
      value: '₹156M',
      details: ['15K schools', '4.2M athletes', '18K coaches'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Massive Market Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing just 1% of Indian schools represents ₹156M opportunity by Year 3
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {markets.map((market, index) => (
            <motion.div
              key={market.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${market.color} rounded-xl flex items-center justify-center mb-6`}>
                  <market.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {market.label}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{market.title}</h3>
                
                <div className={`text-5xl font-bold bg-gradient-to-br ${market.color} bg-clip-text text-transparent mb-6`}>
                  {market.value}
                </div>
                
                <div className="space-y-2">
                  {market.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Why Now? Market Tailwinds</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'NEP 2020 Mandate',
                desc: 'Government policy requires increased sports focus in schools',
              },
              {
                title: 'Parental Anxiety',
                desc: 'Rising concern about screen time and mental health crisis',
              },
              {
                title: 'Outcome-Based Education',
                desc: 'Growing demand for measurable ROI on school fees',
              },
            ].map((driver, index) => (
              <motion.div
                key={driver.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-bold text-xl mb-3">{driver.title}</h4>
                <p className="text-blue-100">{driver.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
