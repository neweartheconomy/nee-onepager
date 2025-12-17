import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-deep-teal/95 backdrop-blur-md py-3 shadow-lg'
      : 'bg-transparent py-5'
  }`;

  const linkClasses = `text-sm uppercase tracking-widest hover:text-sand transition-colors duration-200 ${
    isScrolled ? 'text-white' : 'text-white'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/nee_logo.svg"
            alt="New Earth Economy"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#problem" className={linkClasses}>The Problem</a>
          <a href="#video" className={linkClasses}>Video</a>
          <a href="#solution" className={linkClasses}>The Solution</a>
          <a href="#about" className={linkClasses}>About</a>
          <a href="#testimonials" className={linkClasses}>Stories</a>
          <a
            href="#booking"
            className="px-6 py-2 bg-sand text-deep-teal font-semibold rounded-full hover:bg-white hover:text-deep-teal transition-all duration-300 transform hover:scale-105"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-deep-teal/95 backdrop-blur-md border-t border-forest-green py-6 px-6 flex flex-col space-y-4 shadow-xl">
           <a href="#problem" className="text-white hover:text-sand block py-2" onClick={() => setIsMobileMenuOpen(false)}>The Problem</a>
           <a href="#video" className="text-white hover:text-sand block py-2" onClick={() => setIsMobileMenuOpen(false)}>Video</a>
           <a href="#solution" className="text-white hover:text-sand block py-2" onClick={() => setIsMobileMenuOpen(false)}>The Solution</a>
           <a href="#about" className="text-white hover:text-sand block py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
           <a href="#testimonials" className="text-white hover:text-sand block py-2" onClick={() => setIsMobileMenuOpen(false)}>Stories</a>
           <a
            href="#booking"
            className="block text-center px-6 py-3 bg-sand text-deep-teal font-bold rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;