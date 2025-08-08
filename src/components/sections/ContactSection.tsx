'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('https://formspree.io/f/xvgqgqlz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Formspree error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-jungle mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Have a question, collaboration idea, or just want to say hi? Reach out—we’d love to hear from you.
        </motion.p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 max-w-2xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="border border-gray-300 px-4 py-2 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-jungle text-white font-semibold px-6 py-2 rounded-md hover:bg-jungle/90 transition"
          >
            Send Message
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-600 font-medium">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 font-medium">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
