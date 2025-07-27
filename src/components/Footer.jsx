'use client';

import { Zap, Twitter, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'All Mousepads', href: '/products' },
      { label: 'Gaming Series', href: '/products?category=gaming' },
      { label: 'Desk Mats', href: '/products?category=desk-mats' },
      { label: 'RGB Collection', href: '/products?category=rgb' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Shipping Info', href: '/shipping' },
      { label: 'Returns', href: '/returns' }
    ],
    social: [
      { label: 'Twitter', href: '#', icon: Twitter },
      { label: 'Instagram', href: '#', icon: Instagram },
      { label: 'Email', href: 'mailto:hello@plixdrop.com', icon: Mail }
    ]
  };

  return (
    <footer className="relative bg-[#080808] border-t border-[#18181c] mt-20">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#dfe31d]/50 to-transparent" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#dfe31d] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#080808]" />
              </div>
              <h3 className="text-2xl font-black text-white tracking-wider">PLIXDROP</h3>
            </div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
              Premium mousepads engineered for peak performance and aesthetic excellence.
            </p>
            {/* Newsletter */}
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Get updates"
                className="w-full px-4 py-3 bg-[#18181c] rounded-lg text-white placeholder-[#a0a0a0] text-sm focus:outline-none focus:ring-2 focus:ring-[#dfe31d]/50 transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#dfe31d] rounded-md hover:bg-white transition-all duration-300 group">
                <ArrowUpRight className="w-4 h-4 text-[#080808]" />
              </button>
            </div>
          </div>

          {/* Products Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-[#a0a0a0] hover:text-[#dfe31d] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#dfe31d] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-[#a0a0a0] hover:text-[#dfe31d] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#dfe31d] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Connect</h4>
            <div className="flex gap-3 mb-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-[#18181c] rounded-lg flex items-center justify-center hover:bg-[#dfe31d] group transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#a0a0a0] group-hover:text-[#080808] transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-[#a0a0a0] text-sm">Support Hours:</p>
              <p className="text-white text-sm font-medium">Mon-Fri 9AM-6PM EST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#18181c]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[#a0a0a0] text-sm">
              © {currentYear} Plixdrop. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-[#a0a0a0] hover:text-[#dfe31d] text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#a0a0a0] hover:text-[#dfe31d] text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#dfe31d]/5 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;