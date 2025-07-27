import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { ArrowRight, Zap, Shield, Truck, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <h1 className="text-6xl sm:text-8xl font-bold text-white mb-6 tracking-tight">
                PREMIUM<br />
                <span className="text-[#dfe31d]">MOUSEPADS</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-xl">
                Ultra-smooth surfaces for precision tracking and productivity.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="/products" 
                  className="inline-flex items-center gap-2 bg-[#dfe31d] text-[#080808] px-8 py-4 rounded-full font-bold hover:bg-[#dfe31d]/90 transition-colors"
                >
                  SHOP NOW
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/bestsellers" 
                  className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
                >
                  BESTSELLERS
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="border-y border-[#18181c]">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#dfe31d]" />
                <span className="text-gray-400">FREE SHIPPING OVER $50</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#dfe31d]" />
                <span className="text-gray-400">2-YEAR WARRANTY</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#dfe31d]" />
                <span className="text-gray-400">SAME-DAY PROCESSING</span>
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
              <a href="/product/1" className="group">
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
                    <p className="text-2xl font-bold text-white">$49.99</p>
                  </div>
                  <span className="bg-[#dfe31d] text-[#080808] text-xs font-bold px-3 py-1 rounded-full">SALE</span>
                </div>
              </a>

              {/* Product Card 2 */}
              <a href="/product/2" className="group">
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
                  <p className="text-2xl font-bold text-white">$34.99</p>
                </div>
              </a>

              {/* Product Card 3 */}
              <a href="/product/3" className="group">
                <div className="aspect-square bg-[#18181c] rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop" 
                    alt="Aesthetic Gradient" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Sunset Gradient Wave</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-[#dfe31d]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'fill-none stroke-current'}`} />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">(215)</span>
                  </div>
                  <p className="text-2xl font-bold text-white">$42.99</p>
                </div>
              </a>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/products" 
                className="inline-flex items-center gap-2 text-[#dfe31d] hover:text-white transition-colors"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-[#18181c]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">CATEGORIES</h2>
              <p className="text-gray-400">Find your perfect mousepad</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <a href="/products?category=coding" className="group">
                <div className="bg-[#080808] rounded-lg p-8 hover:bg-[#080808]/80 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">CODING</h3>
                  <p className="text-gray-400 mb-4">Minimalist designs for focused work</p>
                  <span className="text-[#dfe31d] group-hover:text-white transition-colors">
                    Explore →
                  </span>
                </div>
              </a>
              
              <a href="/products?category=gaming" className="group">
                <div className="bg-[#080808] rounded-lg p-8 hover:bg-[#080808]/80 transition-colors relative">
                  <div className="absolute top-4 right-4 bg-[#dfe31d] text-[#080808] text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                  <h3 className="text-xl font-bold text-white mb-2">GAMING</h3>
                  <p className="text-gray-400 mb-4">High-performance surfaces</p>
                  <span className="text-[#dfe31d] group-hover:text-white transition-colors">
                    Explore →
                  </span>
                </div>
              </a>
              
              <a href="/products?category=aesthetic" className="group">
                <div className="bg-[#080808] rounded-lg p-8 hover:bg-[#080808]/80 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">AESTHETIC</h3>
                  <p className="text-gray-400 mb-4">Beautiful designs to inspire</p>
                  <span className="text-[#dfe31d] group-hover:text-white transition-colors">
                    Explore →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">REVIEWS</h2>
              <p className="text-gray-400">What our customers say</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex text-[#dfe31d] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"Best mousepad I've ever owned. The surface is incredibly smooth."</p>
                <p className="text-white font-semibold">Sarah Chen</p>
                <p className="text-gray-500 text-sm">Verified Buyer</p>
              </div>

              <div>
                <div className="flex text-[#dfe31d] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"Perfect size, great tracking, and the quality is amazing!"</p>
                <p className="text-white font-semibold">Marcus Johnson</p>
                <p className="text-gray-500 text-sm">Verified Buyer</p>
              </div>

              <div>
                <div className="flex text-[#dfe31d] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"Love the minimal design! Fits perfectly with my setup."</p>
                <p className="text-white font-semibold">Emily Rodriguez</p>
                <p className="text-gray-500 text-sm">Verified Buyer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 border-t border-[#18181c]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">NEWSLETTER</h2>
              <p className="text-gray-400 mb-8">Get 10% off your first order</p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-b border-gray-800 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] transition-colors"
                />
                <button
                  type="submit"
                  className="text-[#dfe31d] font-bold hover:text-white transition-colors"
                >
                  SUBSCRIBE →
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}