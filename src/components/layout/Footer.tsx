'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AiFillHeart } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-jungle text-white py-12 px-6">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo + Slogan */}
        <div>
          <h2 className="text-xl font-bold mb-2">Hope for Community</h2>
          <p className="text-sm">Connect! Inspire! Aspire.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="#about/who-we-are" className="hover:underline">About</Link></li>
            <li><Link href="#programs" className="hover:underline">Programs</Link></li>
            <li><Link href="#projects" className="hover:underline">Projects</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm">📧 h4cmombasa@gmail.com</p>
          <p className="text-sm">📞 0793997044 / 0758581191</p>
          <p className="text-sm mt-2">📍 Changamwe, Kipevu Ward, Mombasa</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <Link href="https://x.com/h4corganisation" target="_blank" aria-label="Twitter">
              <FaTwitter className="hover:text-red transition" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61557084148943" target="_blank" aria-label="Facebook">
              <FaFacebookF className="hover:text-red transition" />
            </Link>
            <Link href="https://www.instagram.com/hope_4_community_organization" target="_blank" aria-label="Instagram">
              <FaInstagram className="hover:text-red transition" />
            </Link>
            <Link href="#" target="_blank" aria-label="TikTok">
              <FaTiktok className="hover:text-red transition" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-10 text-white/80">
        &copy; {new Date().getFullYear()} Hope for Community. All rights reserved.
      </div>

      {/* Built with love */}
      <div className="text-center text-sm mt-2 text-white/70 flex justify-center items-center gap-1">
        Built with <AiFillHeart className="text-red inline" size={16} /> by{' '}
        <Link
          href="https://techit-eazy-svpi.vercel.app/"
          target="_blank"
          className="underline hover:text-white font-medium"
        >
          TechIT Eazy
        </Link>
      </div>
    </footer>
  );
}
