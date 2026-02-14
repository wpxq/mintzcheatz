'use client';

export default function Footer() {

  return (
    <footer className="border-t border-white/5 py-10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-white font-bold tracking-tight">MINTZ<span className="text-purple-500">CHEATZ</span></span>. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-gray-400 font-medium">
          <a href="https://discord.gg/57pr8zTuvk" target="blank_" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Discord</a>
          <a href="https://github.com/wpxq" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Web Dev Github</a>
        </div>
      </div>
    </footer>
  );
}
