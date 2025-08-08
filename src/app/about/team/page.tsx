'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Patrick Gathogo',
    role: 'CEO & Founder',
    image: '/team/patrick.jpg',
  },
  {
    name: 'Nasib Mohamed',
    role: 'Chairman',
    image: '/team/nasib2.jpg',
  },
  {
    name: 'Kibibi Suleiman',
    role: 'Vice Chair',
    image: '/team/kibibi.jpg',
  },
  {
    name: 'Dennis Katana',
    role: 'Finance Officer',
    image: '/team/dennis.jpg',
  },
  {
    name: 'Gloria Aroyo',
    role: 'Health Officer',
    image: '/team/gloria.jpg',
  },
  {
    name: 'Hellen Jumwa',
    role: 'Climate Change Officer',
    image: '/team/hellen.jpg',
  },
  
];

export default function TeamPage() {
  return (
    <section className="bg-white py-20 px-4 font-body">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold font-heading text-jungle mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h1>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hope for Community is powered by passionate individuals committed to driving change across health, leadership, and climate justice in Mombasa and beyond.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-[center_15%]"
                  style={{ transform: 'scale(0.97)', transformOrigin: 'center' }}
                />
              </div>
              <h3 className="text-lg font-semibold text-jungle">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
