'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-jungle text-white py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Create Lasting Change?
        </h2>
        <p className="text-md md:text-lg mb-8 text-white/90">
          Join Hope for Community in empowering youth, promoting health and
          sustainability, and building a more inclusive future. Together, we
          can inspire transformation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/donate"
            className="bg-red text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-lightRed transition"
          >
            Donate
          </Link>
          <Link
            href="/#contact"
            className="bg-white text-jungle font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            Join Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
