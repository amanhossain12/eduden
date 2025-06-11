'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full px-4 sm:px-6 lg:px-10 2xl:px-16 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Eduden Logo"
            width={180}
            height={60}
            className="w-[110px] sm:w-[140px] lg:w-[160px] 2xl:w-[180px] object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10 text-sm lg:text-base 2xl:text-lg font-medium">
      <Link href="#" className="hover:text-yellow-400 no-underline">Home</Link>

          <Link href="#" className="hover:text-yellow-400">About Us</Link>
          <div className="relative group">
            <Link href="#" className="hover:text-yellow-400 flex items-center gap-1">
              Courses <span className="text-xs">▼</span>
            </Link>
          </div>
          <div className="relative group">
            <Link href="#" className="hover:text-yellow-400 flex items-center gap-1">
              What’s New <span className="text-xs">▼</span>
            </Link>
          </div>
          <Link href="#" className="hover:text-yellow-400">Verify</Link>
          <Link href="#" className="hover:text-yellow-400">Contact Us</Link>
        </div>

        {/* Enroll Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black px-4 py-2 lg:px-6 lg:py-2.5 rounded-full text-sm lg:text-base transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-4 px-4 text-sm">
          <Link href="#" className="hover:text-yellow-400">Home</Link>
          <Link href="#" className="hover:text-yellow-400">About Us</Link>
          <Link href="#" className="hover:text-yellow-400">Courses</Link>
          <Link href="#" className="hover:text-yellow-400">What’s New</Link>
          <Link href="#" className="hover:text-yellow-400">Verify</Link>
          <Link href="#" className="hover:text-yellow-400">Contact Us</Link>
          <Link
            href="#"
            className="mt-2 border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black px-6 py-2 rounded-full transition text-sm"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
