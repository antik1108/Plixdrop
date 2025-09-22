'use client';

import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { MousePointerClick, Star, Rocket, Zap, Shield, Palette, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Engineered with cutting-edge materials for ultra-smooth tracking and military-grade durability.",
      stats: "10M+ Clicks Tested"
    },
    {
      icon: Rocket,
      title: "Performance First",
      description: "Optimized surface texture for pixel-perfect precision whether you're gaming or designing.",
      stats: "0.1mm Accuracy"
    },
    {
      icon: Palette,
      title: "Aesthetic Excellence",
      description: "From minimalist designs to RGB-ready surfaces, express your unique style.",
      stats: "50+ Designs"
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Water-resistant coating and reinforced edges that withstand years of intensive use.",
      stats: "5 Year Warranty"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#dfe31d]/5 to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#dfe31d]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#dfe31d]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#18181c] border border-[#dfe31d]/20 rounded-full mb-8">
            <Zap className="w-4 h-4 text-[#dfe31d]" />
            <span className="text-sm font-bold text-[#dfe31d] uppercase tracking-wider">About Plixdrop</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            ELEVATE YOUR
            <span className="block text-[#dfe31d] mt-2">DESK SETUP</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#a0a0a0] max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform workspaces with premium mousepads engineered for 
            <span className="text-white font-bold"> coders</span>, 
            <span className="text-white font-bold"> gamers</span>, and 
            <span className="text-white font-bold"> creators</span> who demand excellence.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative bg-[#18181c] border border-[#18181c] rounded-2xl p-8 transition-all duration-500 hover:border-[#dfe31d]/30 hover:shadow-[0_20px_40px_rgba(223,227,29,0.1)]"
              >
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#dfe31d]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#080808] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#dfe31d] transition-all duration-500">
                    <feature.icon className={`w-7 h-7 transition-all duration-500 ${
                      hoveredFeature === index ? 'text-[#080808]' : 'text-[#dfe31d]'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-[#a0a0a0] leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] rounded-lg">
                    <div className="w-2 h-2 bg-[#dfe31d] rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-[#dfe31d]">{feature.stats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-[#18181c]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase">
            Why We Started
          </h2>
          <p className="text-xl text-[#a0a0a0] leading-relaxed mb-12">
            We noticed that while everyone invests in powerful hardware, the humble mousepad often gets overlooked. 
            Yet it's the surface you interact with for hours every day. We decided to change that by creating mousepads 
            that match the quality and aesthetics of your premium setup.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-[#dfe31d] mb-2">50K+</div>
              <div className="text-sm text-[#a0a0a0] uppercase tracking-wider">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#dfe31d] mb-2">4.9★</div>
              <div className="text-sm text-[#a0a0a0] uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#dfe31d] mb-2">2021</div>
              <div className="text-sm text-[#a0a0a0] uppercase tracking-wider">Founded</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase">
            Ready to Upgrade?
          </h2>
          <p className="text-lg text-[#a0a0a0] mb-10">
            Join thousands of professionals who've transformed their workspace with Plixdrop.
          </p>
          
          <a 
            href="/products" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#dfe31d] text-[#080808] font-black uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(223,227,29,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <MousePointerClick className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Browse Collection</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}