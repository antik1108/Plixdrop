'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { LogIn, UserPlus, Mail, Lock, ArrowRight } from 'lucide-react';

export default function SignInPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-[#080808]">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
          <div className="bg-[#18181c] border border-[#dfe31d]/20 rounded-2xl p-12 text-center flex flex-col items-center max-w-md w-full">
            <div className="w-20 h-20 bg-[#dfe31d]/10 rounded-full flex items-center justify-center mb-6">
              <LogIn className="w-10 h-10 text-[#dfe31d]" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome Back!</h1>
            <p className="text-gray-400 mb-8">You've successfully signed in to your account</p>
            <a 
              href="/" 
              className="bg-[#dfe31d] text-[#080808] px-8 py-3 rounded-full font-semibold hover:bg-[#dfe31d]/90 transition-all duration-200 flex items-center gap-2 group"
            >
              Continue Shopping 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">SIGN IN</h1>
            <p className="text-gray-400">Access your account to continue shopping</p>
          </div>

          {/* Form Container */}
          <div className="bg-[#18181c] rounded-2xl p-8 shadow-2xl border border-[#18181c]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#080808] border border-gray-800 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] focus:ring-1 focus:ring-[#dfe31d] transition-all duration-200"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#080808] border border-gray-800 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] focus:ring-1 focus:ring-[#dfe31d] transition-all duration-200"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 bg-[#080808] border-gray-800 rounded text-[#dfe31d] focus:ring-[#dfe31d] focus:ring-offset-0" />
                  <span className="ml-2 text-sm text-gray-400">Remember me</span>
                </label>
                <a href="/forgot-password" className="text-sm text-[#dfe31d] hover:text-[#dfe31d]/80 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#dfe31d] text-[#080808] py-4 rounded-full font-bold text-lg hover:bg-[#dfe31d]/90 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#080808] border-t-transparent rounded-full animate-spin" />
                    Signing In...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    SIGN IN
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#18181c] text-gray-500">OR</span>
              </div>
            </div>

            {/* Social Login Options */}
            <div className="space-y-3">
              <button className="w-full bg-[#080808] border border-gray-800 rounded-lg py-3 px-4 text-white hover:border-gray-700 transition-all duration-200 flex items-center justify-center gap-3">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Continue with Google
              </button>
              <button className="w-full bg-[#080808] border border-gray-800 rounded-lg py-3 px-4 text-white hover:border-gray-700 transition-all duration-200 flex items-center justify-center gap-3">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
                Continue with Facebook
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <a href="/signup" className="text-[#dfe31d] hover:text-[#dfe31d]/80 font-semibold transition-colors inline-flex items-center gap-1 group">
                <UserPlus className="w-4 h-4" />
                Sign Up
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}