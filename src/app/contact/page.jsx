'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { Mail, Send, CheckCircle, Phone, MapPin, Clock, MessageSquare, Zap, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "itsantikmondal143@gmail.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8101108711",
      subtext: "Mon-Fri 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "NST",
      subtext: "Sonipat"
    }
  ];

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-[#080808]">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-20 bg-[#dfe31d]/20 blur-3xl animate-pulse" />
            
            <div className="relative bg-[#18181c] border border-[#dfe31d]/30 rounded-2xl p-12 text-center max-w-md shadow-[0_20px_40px_rgba(223,227,29,0.1)]">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-[#dfe31d] rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce-once">
                <CheckCircle className="w-10 h-10 text-[#080808]" />
              </div>
              
              <h1 className="text-3xl font-black text-white mb-4 uppercase tracking-wide">
                Message Sent!
              </h1>
              <p className="text-[#a0a0a0] mb-2">
                We'll get back to you at
              </p>
              <p className="text-[#dfe31d] font-bold text-lg mb-8">
                {form.email}
              </p>
              
              <a 
                href="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#dfe31d] text-[#080808] font-black uppercase tracking-wider rounded-lg hover:bg-white transition-all duration-300 group"
              >
                Back to Home
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#dfe31d]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dfe31d]/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#18181c] border border-[#dfe31d]/20 rounded-full mb-8">
            <MessageSquare className="w-4 h-4 text-[#dfe31d]" />
            <span className="text-sm font-bold text-[#dfe31d] uppercase tracking-wider">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Let's Talk
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
            Have a question about our mousepads? Need help with your order? 
            We're here to help and typically respond within 24 hours.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-6xl mx-auto py-12 px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#18181c] rounded-2xl p-8 border border-[#18181c] hover:border-[#dfe31d]/20 transition-all duration-500">
              <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-wide">
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-[#080808] border border-[#080808] rounded-lg text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#dfe31d]/50 transition-all duration-300"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#dfe31d] transition-all duration-300 ${
                    focusedField === 'name' ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-[#080808] border border-[#080808] rounded-lg text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#dfe31d]/50 transition-all duration-300"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#dfe31d] transition-all duration-300 ${
                    focusedField === 'email' ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-[#080808] border border-[#080808] rounded-lg text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#dfe31d]/50 transition-all duration-300 resize-none"
                    rows={5}
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#dfe31d] transition-all duration-300 ${
                    focusedField === 'message' ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full px-8 py-4 bg-[#dfe31d] text-[#080808] font-black uppercase tracking-wider rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(223,227,29,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Quick Contact Cards */}
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-[#18181c] rounded-2xl p-6 border border-[#18181c] hover:border-[#dfe31d]/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#080808] rounded-xl flex items-center justify-center group-hover:bg-[#dfe31d] transition-all duration-300">
                    <info.icon className="w-6 h-6 text-[#dfe31d] group-hover:text-[#080808] transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-1">
                      {info.title}
                    </h3>
                    <p className="text-[#dfe31d] font-medium text-lg mb-1">
                      {info.content}
                    </p>
                    <p className="text-[#a0a0a0] text-sm">
                      {info.subtext}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ Prompt */}
            <div className="bg-gradient-to-br from-[#dfe31d]/10 to-transparent rounded-2xl p-6 border border-[#dfe31d]/20">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-[#dfe31d]" />
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">
                  Quick Answers
                </h3>
              </div>
              <p className="text-[#a0a0a0] text-sm mb-4">
                Check out our FAQ section for instant answers to common questions about shipping, returns, and product care.
              </p>
              <a 
                href="/faq" 
                className="inline-flex items-center gap-2 text-[#dfe31d] font-bold text-sm hover:gap-3 transition-all duration-300"
              >
                Visit FAQ
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes bounce-once {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce-once {
          animation: bounce-once 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}