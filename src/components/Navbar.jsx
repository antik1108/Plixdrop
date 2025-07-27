'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext.jsx';
import { ShoppingCart, User, Search, Menu, X, Zap, Phone, Info, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const { cart, getItemCount } = useCart();
  const cartCount = getItemCount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { 
      href: '/about', 
      label: 'ABOUT', 
      icon: Info,
      badge: null 
    },
    { 
      href: '/contact', 
      label: 'CONTACT', 
      icon: Phone,
      badge: null
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#080808]/95 backdrop-blur-2xl shadow-[0_20px_40px_rgba(223,227,29,0.05)]' 
          : 'bg-[#080808]'
      }`}>
        {/* Top accent line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#dfe31d] to-transparent opacity-50" />
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-12">
              <Link 
                href="/" 
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-[#dfe31d]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#dfe31d] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-[#080808]" />
                  </div>
                  <h1 className="text-2xl font-black text-white tracking-wider uppercase">
                    PLIXDROP
                  </h1>
                </div>
              </Link>
              
              {/* Catalog Button - Desktop */}
              <Link 
                href="/products" 
                className="hidden lg:flex items-center gap-2.5 px-6 py-3 bg-[#dfe31d] text-[#080808] font-black uppercase tracking-wide rounded-lg hover:bg-white hover:shadow-[0_0_30px_rgba(223,227,29,0.6)] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Menu className="w-5 h-5 relative z-10" />
                <span className="relative z-10">CATALOG</span>
              </Link>
            </div>

            {/* Center Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group relative"
                >
                  <div className="flex items-center gap-2">
                    <span className={`font-bold tracking-wider text-sm transition-all duration-300 ${
                      hoveredLink === link.href ? 'text-white' : 'text-[#a0a0a0]'
                    }`}>
                      {link.label}
                    </span>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-[#dfe31d] transition-all duration-300 ${
                    hoveredLink === link.href ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Search - Desktop */}
              <div className="hidden sm:block relative">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    isSearchOpen 
                      ? 'bg-[#18181c] border-[#dfe31d]/50 text-[#dfe31d]' 
                      : 'bg-transparent border-[#18181c] text-[#a0a0a0] hover:text-white hover:border-[#a0a0a0]/30'
                  }`}
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {/* Search Dropdown */}
                <div className={`absolute right-0 top-full mt-4 w-80 transition-all duration-500 ${
                  isSearchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}>
                  <div className="bg-[#18181c] rounded-xl border border-[#dfe31d]/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="p-4">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a0a0a0]" />
                        <input 
                          type="text" 
                          placeholder="Search for mousepads..."
                          className="w-full pl-12 pr-4 py-3 bg-[#080808] rounded-lg text-white placeholder-[#a0a0a0] focus:outline-none focus:ring-2 focus:ring-[#dfe31d]/50 transition-all duration-300"
                          autoFocus={isSearchOpen}
                        />
                      </div>
                    </div>
                    <div className="px-4 pb-4">
                      <p className="text-xs text-[#a0a0a0] uppercase tracking-wider mb-2">Popular Searches</p>
                      <div className="flex flex-wrap gap-2">
                        {['Gaming', 'RGB', 'Extended'].map((term) => (
                          <button key={term} className="px-3 py-1 bg-[#080808] text-[#dfe31d] text-sm rounded-lg hover:bg-[#dfe31d] hover:text-[#080808] transition-all duration-300">
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart */}
              <Link 
                href="/cart" 
                className="relative p-3 rounded-lg border border-[#18181c] text-[#a0a0a0] hover:text-white hover:border-[#a0a0a0]/30 transition-all duration-300 group"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <>
                    <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-[24px] h-6 px-1.5 bg-[#dfe31d] text-[#080808] text-xs font-black rounded-full animate-pulse-scale">
                      {cartCount}
                    </span>
                    <div className="absolute -top-2 -right-2 min-w-[24px] h-6 bg-[#dfe31d] rounded-full animate-ping opacity-30" />
                  </>
                )}
              </Link>

              {/* User - Desktop */}
              <Link 
                href="/signin" 
                className="hidden sm:block p-3 rounded-lg border border-[#18181c] text-[#a0a0a0] hover:text-white hover:border-[#a0a0a0]/30 transition-all duration-300"
              >
                <User className="w-5 h-5" />
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-3 rounded-lg border border-[#18181c] text-[#a0a0a0] hover:text-white hover:border-[#a0a0a0]/30 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${isMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100'}`} />
                  <X className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#080808]/90 backdrop-blur-md z-40 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <aside className={`lg:hidden fixed top-0 right-0 w-full max-w-sm h-screen bg-[#080808] border-l border-[#18181c] z-50 transition-transform duration-500 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#18181c]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#dfe31d] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#080808]" />
              </div>
              <span className="text-xl font-black text-white tracking-wider">PLIXDROP</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 rounded-lg hover:bg-[#18181c] transition-colors duration-300"
            >
              <X className="w-6 h-6 text-[#a0a0a0]" />
            </button>
          </div>

          {/* Mobile Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Search - Mobile */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a0a0a0]" />
                <input 
                  type="text" 
                  placeholder="Search mousepads..."
                  className="w-full pl-12 pr-4 py-3 bg-[#18181c] rounded-lg text-white placeholder-[#a0a0a0] focus:outline-none focus:ring-2 focus:ring-[#dfe31d]/50"
                />
              </div>
            </div>

            {/* Navigation - Mobile */}
            <nav className="space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-lg transition-all duration-300 group bg-[#18181c] hover:bg-[#18181c]/80"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <link.icon className="w-5 h-5 text-[#a0a0a0]" />
                    <span className="font-bold tracking-wider text-white">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#a0a0a0]" />
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#18181c] to-transparent" />

            {/* User Actions - Mobile */}
            <div className="space-y-4">
              <Link
                href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 p-4 bg-[#18181c] rounded-lg text-white hover:bg-[#18181c]/80 transition-all duration-300"
              >
                <User className="w-5 h-5 text-[#a0a0a0]" />
                <span className="font-medium">Account</span>
              </Link>

              {/* CTA Button */}
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="relative flex items-center justify-center gap-2 w-full p-4 bg-[#dfe31d] text-[#080808] font-black uppercase tracking-wider rounded-lg overflow-hidden group"
              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Menu className="w-5 h-5 relative z-10" />
                <span className="relative z-10">BROWSE CATALOG</span>
              </Link>
            </div>

            {/* Bottom Section - Mobile */}
            <div className="mt-8 p-4 bg-[#18181c] rounded-lg">
              <p className="text-xs text-[#a0a0a0] uppercase tracking-wider mb-3">Featured</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">Gaming Mousepads</span>
                  <span className="text-[#dfe31d] font-bold">NEW</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white">RGB Mousepads</span>
                  <span className="text-[#dfe31d] font-bold">HOT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      <style jsx>{`
        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        nav[class*="space-y"] > * {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;