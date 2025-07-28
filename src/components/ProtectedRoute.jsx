'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext.jsx';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[#080808] items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#dfe31d] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-white">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return children;
} 