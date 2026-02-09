
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-[#4F6D44]">Bodhi Tree</span>
            <span className="hidden sm:inline text-sm uppercase tracking-[0.2em] text-[#8A9A5B]">Yoga Studio</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(item.path) ? 'text-[#4F6D44] border-b-2 border-[#4F6D44]' : 'text-[#636E72] hover:text-[#4F6D44]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#4F6D44] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#3D5535] transition-all duration-300 shadow-sm"
            >
              Free Trial
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4F6D44] p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E5E1DA] animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-base font-medium ${
                  isActive(item.path) ? 'text-[#4F6D44] bg-[#4F6D44]/5' : 'text-[#636E72]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#4F6D44] text-white px-3 py-4 rounded-lg font-semibold mt-4"
            >
              Claim Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
