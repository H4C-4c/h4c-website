'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaUsers, FaRegLightbulb, FaHandsHelping } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUsers className="text-4xl text-jungle" />,
    label: 'Youth Reached',
    count: 1800,
  },
  {
    icon: <FaRegLightbulb className="text-4xl text-jungle" />,
    label: 'Projects Implemented',
    count: 23,
  },
  {
    icon: <FaHandsHelping className="text-4xl text-jungle" />,
    label: 'Volunteers Engaged',
    count: 130,
  },
];

export default function ImpactStatsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-jungle mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Impact in Numbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-3xl font-extrabold text-jungle mb-1">
                <CountUp end={stat.count} duration={2.5} separator="," />
              </h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
