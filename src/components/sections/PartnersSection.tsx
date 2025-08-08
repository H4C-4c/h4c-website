'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Rabai Voices', logo: '/partners/Rabai_voices.jpg' },
  { name: 'She Forward', logo: '/partners/she_forward.jpg' },
  { name: 'Mama Amina Abdalla', logo: '/partners/mama_amina.jpg' },
  { name: 'TechIT Eazy', logo: '/partners/TechIT Eazy logo.jpg' },
  { name: 'Department of Youth – Mombasa County', logo: '/partners/dept_of_youth.jpg' },
  { name: 'Department of Environment – Mombasa County', logo: '/partners/DoEWE.jpg' },
  { name: 'GROOTS Kenya', logo: '/partners/groots_kenya.jpg' },

  { name: 'Swahilipot', logo: '/partners/swahilipot.jpg' },
  { name: 'Mombasa County Youth Leaders Association', logo: '/partners/youthleaders.jpg' },
  { name: 'Mombasa Women', logo: '/partners/mombasa_women.jpg' },
  { name: 'Transparency International', logo: '/partners/transparency_international.jpg' },
  { name: 'YMCA', logo: '/partners/ymca_mombasa.jpg' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-jungle mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
