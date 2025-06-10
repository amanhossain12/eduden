'use client'; // ✅ Required for useState

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // ✅ Uncommented for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black pt-5 text-white px-6 py-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Eduden Logo"
            width={150}
            height={55}
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#" className="hover:text-yellow-400">Home</Link>
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
            className="border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black px-6 py-2 rounded-full text-sm transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-4 px-4">
          <Link href="#" className="hover:text-yellow-400">Home</Link>
          <Link href="#" className="hover:text-yellow-400">About Us</Link>
          <Link href="#" className="hover:text-yellow-400">Courses</Link>
          <Link href="#" className="hover:text-yellow-400">What’s New</Link>
          <Link href="#" className="hover:text-yellow-400">Verify</Link>
          <Link href="#" className="hover:text-yellow-400">Contact Us</Link>
          <Link
            href="#"
            className="mt-2 border border-yellow-400 text-white hover:bg-yellow-500 hover:text-black px-6 py-2 rounded-full text-sm transition"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
