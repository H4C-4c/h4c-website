'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="/" className="text-xl font-bold text-jungle">
          Hope for Community
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center relative">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-jungle transition">
              About <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/about/who-we-are"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Who We Are
              </Link>
              <Link
                href="/about/team"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Our Team
              </Link>
            </div>
          </div>

          <Link href="/#programs" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
            Programs
          </Link>
          <Link href="/#projects" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
            Projects
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
            Blog
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
            Contact
          </Link>

          <Link
            href="/donate"
            className="bg-red text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-lightRed transition"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-jungle"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Dialog */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-40 bg-white p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-jungle">
              Hope for Community
            </Link>
            <button
              type="button"
              className="text-gray-700 hover:text-jungle"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
              Home
            </Link>
            <Link href="/about/who-we-are" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
              Who We Are
            </Link>
            <Link href="/about/team" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
              Our Team
            </Link>
            <Link href="/#programs" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
              Programs
            </Link>
            <Link href="/#projects" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
              Projects
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-700 hover:text-jungle transition">
              Contact
            </Link>
            <Link
              href="/donate"
              className="bg-red text-white text-sm px-4 py-2 rounded-full font-semibold hover:bg-lightRed transition w-fit"
            >
              Donate
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
