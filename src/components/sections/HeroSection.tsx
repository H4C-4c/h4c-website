'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/images/hope_a.jpg',
  '/images/hope_b.jpg',
  '/images/hope_c.jpg',
  '/images/hope_d.jpg',
  '/images/hope_e.jpg',
  '/images/hope_f.jpg',
  '/images/hope_g.jpg',
  '/images/hope_h.jpg',
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen text-white flex items-center justify-center px-4 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`Hero Slide ${currentImage + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <motion.div
        className="text-center max-w-2xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Connect. Inspire. Aspire.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Empowering youth and communities for sustainable change in health, leadership, and climate action.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="#volunteer"
            className="bg-white text-jungle px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Get Involved
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
