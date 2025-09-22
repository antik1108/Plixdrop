'use client';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Star, ArrowRight, ShoppingBag, Truck, Shield, RefreshCw } from 'lucide-react';
import { formatINR } from '../lib/currency.js';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#dfe31d]/10 via-transparent to-[#dfe31d]/5"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                PREMIUM
                <span className="block text-[#dfe31d]">MOUSEPADS</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Elevate your gaming and coding experience with our premium collection of high-quality mousepads
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/products"
                  className="bg-[#dfe31d] text-[#080808] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#dfe31d]/90 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/about"
                  className="border border-[#dfe31d] text-[#dfe31d] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#dfe31d] hover:text-[#080808] transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-[#18181c]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#dfe31d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-[#dfe31d]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Free Shipping</h3>
                <p className="text-gray-400">On orders over ₹1125</p>
              </div>
              <div className="text-center">
                <div className="bg-[#dfe31d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#dfe31d]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Secure Payment</h3>
                <p className="text-gray-400">100% secure checkout</p>
              </div>
              <div className="text-center">
                <div className="bg-[#dfe31d]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-8 h-8 text-[#dfe31d]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-400">30-day return policy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">FEATURED</h2>
              <p className="text-gray-400">Best selling mousepads</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product Card 1 */}
              <a href="/products/1" className="group">
                <div className="aspect-square bg-[#18181c] rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?w=600&h=600&fit=crop" 
                    alt="Gaming Mousepad" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">RGB Gaming Pro XL</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-[#dfe31d]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">(128)</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{formatINR(1125)}</p>
                  </div>
                  <span className="bg-[#dfe31d] text-[#080808] text-xs font-bold px-3 py-1 rounded-full">SALE</span>
                </div>
              </a>

              {/* Product Card 2 */}
              <a href="/products/2" className="group">
                <div className="aspect-square bg-[#18181c] rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=600&fit=crop" 
                    alt="Minimal Desk Setup" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Minimal Code Black</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-[#dfe31d]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">(89)</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{formatINR(787)}</p>
                </div>
              </a>

              {/* Product Card 3 */}
              <a href="/products/3" className="group">
                <div className="aspect-square bg-[#18181c] rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop" 
                    alt="Aesthetic Mousepad" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Sunset Gradient Wave</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-[#dfe31d]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">(215)</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{formatINR(967)}</p>
                </div>
              </a>
            </div>

            <div className="text-center mt-12">
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-[#18181c] text-white px-8 py-4 rounded-full font-bold hover:bg-[#dfe31d] hover:text-[#080808] transition-all duration-200"
              >
                <ShoppingBag className="w-5 h-5" />
                View All Products
              </a>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-[#18181c]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">SHOP BY CATEGORY</h2>
              <p className="text-gray-400">Find the perfect mousepad for your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="/products?category=gaming" className="group">
                <div className="aspect-square bg-[#080808] rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?w=600&h=600&fit=crop" 
                    alt="Gaming" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-2xl mb-1">GAMING</h3>
                    <p className="text-gray-300">High-performance gaming mousepads</p>
                  </div>
                </div>
              </a>

              <a href="/products?category=coding" className="group">
                <div className="aspect-square bg-[#080808] rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=600&fit=crop" 
                    alt="Coding" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-2xl mb-1">CODING</h3>
                    <p className="text-gray-300">Perfect for developers and programmers</p>
                  </div>
                </div>
              </a>

              <a href="/products?category=aesthetic" className="group">
                <div className="aspect-square bg-[#080808] rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop" 
                    alt="Aesthetic" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-2xl mb-1">AESTHETIC</h3>
                    <p className="text-gray-300">Beautiful designs for your setup</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}