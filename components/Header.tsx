
import React from 'react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tighter text-indigo-600">LUMINA</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="nav-link text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors uppercase tracking-widest">Store</a>
            <a href="#" className="nav-link text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors uppercase tracking-widest">New Arrivals</a>
            <a href="#" className="nav-link text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors uppercase tracking-widest">Collections</a>
            <a href="#" className="nav-link text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors uppercase tracking-widest">Outlet</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className="p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
