'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useAuth } from '../../components/AuthContext.jsx';
import { UserPlus, LogIn, Mail, Lock, User, ArrowRight, CheckCircle, Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { signUp, signInWithGoogle } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Validate passwords match
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    // Validate password requirements
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters long');
      setIsLoading(false);
      return;
    }
    
    try {
      const { error } = await signUp(form.email, form.password, {
        full_name: form.name
      });
      
      if (error) {
        setError(error.message);
      } else {
        setSubmitted(true);
        setTimeout(() => {
          router.push('/signin');
        }, 3000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const { error } = await signInWithGoogle();
      if (error) {
        setError(error.message);
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
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome to the Family!</h1>
            <p className="text-gray-400 mb-8">Your account has been created successfully</p>
            <a 
              href="/signin" 
              className="bg-[#dfe31d] text-[#080808] px-8 py-3 rounded-full font-semibold hover:bg-[#dfe31d]/90 transition-all duration-200 flex items-center gap-2 group"
            >
              <LogIn className="w-5 h-5" />
              Sign In to Your Account
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
            <h1 className="text-4xl font-bold text-white mb-2">CREATE ACCOUNT</h1>
            <p className="text-gray-400">Join us and get exclusive deals on premium mousepads</p>
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
              
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#080808] border border-gray-800 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] focus:ring-1 focus:ring-[#dfe31d] transition-all duration-200"
                />
              </div>

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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#080808] border border-gray-800 rounded-lg pl-12 pr-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] focus:ring-1 focus:ring-[#dfe31d] transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                  )}
                </button>
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#080808] border border-gray-800 rounded-lg pl-12 pr-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] focus:ring-1 focus:ring-[#dfe31d] transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                  )}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="text-xs text-gray-500 space-y-1">
                <p className="flex items-center gap-2">
                  <span className={form.password.length >= 8 ? "text-[#dfe31d]" : ""}>•</span>
                  At least 8 characters
                </p>
                <p className="flex items-center gap-2">
                  <span className={/[A-Z]/.test(form.password) ? "text-[#dfe31d]" : ""}>•</span>
                  One uppercase letter
                </p>
                <p className="flex items-center gap-2">
                  <span className={/[0-9]/.test(form.password) ? "text-[#dfe31d]" : ""}>•</span>
                  One number
                </p>
              </div>

              {/* Terms and Conditions */}
              <label className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-5 h-5 mt-0.5 bg-[#080808] border-gray-800 rounded text-[#dfe31d] focus:ring-[#dfe31d] focus:ring-offset-0" 
                />
                <span className="text-sm text-gray-400">
                  I agree to the{' '}
                  <a href="/terms" className="text-[#dfe31d] hover:text-[#dfe31d]/80">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-[#dfe31d] hover:text-[#dfe31d]/80">Privacy Policy</a>
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !agreedToTerms}
                className="w-full bg-[#dfe31d] text-[#080808] py-4 rounded-full font-bold text-lg hover:bg-[#dfe31d]/90 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#080808] border-t-transparent rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    CREATE ACCOUNT
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

            {/* Social Sign Up Options */}
            <div className="space-y-3">
              <button 
                type="button"
                onClick={handleGoogleSignUp}
                disabled={isLoading}
                className="w-full bg-[#080808] border border-gray-800 rounded-lg py-3 px-4 text-white hover:border-gray-700 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </button>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Already have an account?{' '}
              <a href="/signin" className="text-[#dfe31d] hover:text-[#dfe31d]/80 font-semibold transition-colors inline-flex items-center gap-1 group">
                <LogIn className="w-4 h-4" />
                Sign In
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