'use client';

import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-6 lg:px-10 xl:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <Image src="/logo.png" alt="Eduden Logo" width={140} height={50} className="mb-2" />
          <p className="text-sm text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook"><Facebook className="text-yellow-400 hover:text-white w-5 h-5" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="text-yellow-400 hover:text-white w-5 h-5" /></Link>
            <Link href="#" aria-label="YouTube"><Youtube className="text-yellow-400 hover:text-white w-5 h-5" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="text-yellow-400 hover:text-white w-5 h-5" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-base sm:text-lg mb-4">Quick Link</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {['Home', 'About', 'Courses', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link href="#" className=''>▶ {item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Learning Platform */}
        <div>
          <h4 className="font-semibold text-base sm:text-lg mb-4">Learning Platform</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#" className="flex items-center gap-2"><Youtube className="w-4 h-4 text-yellow-400" /> YouTube</Link></li>
            <li><Link href="#" className="flex items-center gap-2"><Facebook className="w-4 h-4 text-yellow-400" /> Facebook</Link></li>
            <li><Link href="#" className="flex items-center gap-2"><Instagram className="w-4 h-4 text-yellow-400" /> Instagram</Link></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="font-semibold text-base sm:text-lg mb-4">Get In Touch</h4>
          <p className="text-sm text-gray-300">Phone:<br />01745349414</p>
          <p className="text-sm text-gray-300 mt-2">Email:<br />bd@eduden.com</p>
          <p className="text-sm text-gray-300 mt-2">Location:<br />Dhaka, Kallanpur, bridge er niche.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        Copyright © 2024 Edu Den. Powered by <span className="text-yellow-400">Ethical Den</span>
      </div>
    </footer>
  );
};

export default Footer;
