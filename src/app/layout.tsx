// app/layout.tsx

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hope for Community | Connect! Inspire! Aspire!',
  description:
    'Empowering youth in Mombasa through leadership, health advocacy, and climate action.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
