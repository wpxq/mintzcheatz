"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 
                      bg-black/60 backdrop-blur-md border border-white/10 
                      rounded-2xl shadow-2xl relative">
        
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Mintz<span className="text-white">Cheatz</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <Link href="#home" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link href="#products" className="hover:text-purple-400 transition-colors">Products</Link>
          <Link href="#faq" className="hover:text-purple-400 transition-colors">FAQ</Link>
          <Link href="https://discord.gg/57pr8zTuvk" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Support</Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col gap-4 text-center md:hidden animate-in fade-in zoom-in duration-200">
            <Link href="#home" onClick={() => setIsOpen(false)} className="text-white py-2">Home</Link>
            <Link href="#products" onClick={() => setIsOpen(false)} className="text-white py-2">Products</Link>
            <Link href="#faq" onClick={() => setIsOpen(false)} className="text-white py-2">FAQ</Link>
            <Link href="https://discord.gg/57pr8zTuvk" onClick={() => setIsOpen(false)} className="text-purple-400 py-2 font-bold">Support</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
