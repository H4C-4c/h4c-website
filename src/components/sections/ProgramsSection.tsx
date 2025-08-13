'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Program {
  imageUrl: string;
  title: string;
  description: string;
}

export default function ProgramsSection({ programs }: { programs: Program[] }) {
  return (
    <section id="programs" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-jungle text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h2>

        <motion.p
          className="text-gray-600 text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At Hope for Community, our programs are designed to create lasting change by focusing on the most pressing issues facing youth and communities today.
        </motion.p>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src={program.imageUrl}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-jungle mb-2">{program.title}</h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
