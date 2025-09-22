'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useAuth } from '../../components/AuthContext.jsx';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const { error } = await resetPassword(email);
      if (error) {
        setError(error.message);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-[#080808]">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-20 px-4">
          <div className="bg-[#18181c] border border-[#dfe31d]/20 rounded-2xl p-12 text-center flex flex-col items-center max-w-md w-full">
            <div className="w-20 h-20 bg-[#dfe31d]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-[#dfe31d]" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Check Your Email</h1>
            <p className="text-gray-400 mb-8">
              We've sent a password reset link to <strong className="text-white">{email}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Click the link in your email to reset your password. The link will expire in 24 hours.
            </p>
            <button 
              onClick={() => router.push('/signin')}
              className="bg-[#dfe31d] text-[#080808] px-8 py-3 rounded-full font-semibold hover:bg-[#dfe31d]/90 transition-all duration-200 flex items-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </button>
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
            <h1 className="text-4xl font-bold text-white mb-2">RESET PASSWORD</h1>
            <p className="text-gray-400">Enter your email to receive a password reset link</p>
          </div>

          {/* Form Container */}
          <div className="bg-[#18181c] rounded-2xl p-8 shadow-2xl border border-[#18181c]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#080808] border border-gray-800 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] focus:ring-1 focus:ring-[#dfe31d] transition-all duration-200"
                />
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
                    Sending Reset Link...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    SEND RESET LINK
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Back to Sign In Link */}
          <div className="text-center mt-8">
            <button 
              onClick={() => router.push('/signin')}
              className="text-[#dfe31d] hover:text-[#dfe31d]/80 font-semibold transition-colors inline-flex items-center gap-1 group"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 