"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-sm bg-[#f0ffff] fixed w-full z-10">
      <div className="max-w-[1240px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold text-gray-800">
            <Link href="/">logo&reg;</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/portfolio" className="text-gray-800 hover:text-green-600">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-green-600">
              About
            </Link>
            <Link href="/blog" className="text-gray-800 hover:text-green-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-green-600">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              MENU
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-gray-200 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-20`}>
        <div className="flex justify-between items-center p-4">
          <div className="text-lg font-bold text-gray-800">
            <Link href="/">logo</Link>
          </div>
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            CLOSE
          </button>
        </div>
        <div className="flex flex-col p-4">
          
          <Link href="/portfolio" onClick={toggleMenu} className="text-gray-800/50 py-2 hover:text-green-600/50">
            Portfolio
          </Link>
          <Link href="/about" onClick={toggleMenu} className="text-gray-800/50 py-2 hover:text-green-600/50">
            About
          </Link>
          <Link href="/blog" onClick={toggleMenu} className="text-gray-800/50 py-2 hover:text-green-600">
            Blog
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="text-gray-800/50 py-2 hover:text-green-600/50">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
