# Supabase Authentication Setup

This project has been integrated with Supabase for authentication. Here's what has been set up:

## Features Implemented

- ✅ Email/Password Authentication
- ✅ Google OAuth Authentication
- ✅ Password Reset Functionality
- ✅ Protected Routes
- ✅ User Session Management
- ✅ Sign In/Sign Up Pages
- ✅ User Profile Display in Navbar
- ✅ Sign Out Functionality

## Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://namnfsdmmduvqbbkvzdt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hbW5mc2RtbWR1dnFiYmt2emR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MzQ0NDgsImV4cCI6MjA2OTMxMDQ0OH0.5KebGTIm3N5NbbKmlYiLPGKlPtwnrnpiIU4pbmrxZwU
```

## Files Created/Modified

### New Files:
- `src/lib/supabase.js` - Supabase client configuration
- `src/components/AuthContext.jsx` - Authentication context provider
- `src/components/ProtectedRoute.jsx` - Route protection component
- `src/app/auth/callback/route.js` - OAuth callback handler
- `src/app/forgot-password/page.jsx` - Password reset page

### Modified Files:
- `src/app/layout.js` - Added AuthProvider wrapper
- `src/app/signin/page.jsx` - Integrated with Supabase auth
- `src/app/signup/page.jsx` - Integrated with Supabase auth
- `src/components/Navbar.jsx` - Added user profile and sign out

## Usage

### Using Authentication in Components

```jsx
import { useAuth } from '../components/AuthContext';

function MyComponent() {
  const { user, signIn, signOut, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
```

### Protecting Routes

```jsx
import ProtectedRoute from '../components/ProtectedRoute';

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <div>This content is only visible to authenticated users</div>
    </ProtectedRoute>
  );
}
```

## Supabase Dashboard Setup

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Settings
3. Configure your site URL and redirect URLs:
   - Site URL: `http://localhost:3000` (for development)
   - Redirect URLs: `http://localhost:3000/auth/callback`

### Google OAuth Setup (Optional)

1. In Supabase dashboard, go to Authentication > Providers
2. Enable Google provider
3. Add your Google OAuth credentials (Client ID and Secret)
4. Configure redirect URLs in Google Cloud Console

## Available Authentication Functions

- `signIn(email, password)` - Sign in with email/password
- `signUp(email, password, userData)` - Create new account
- `signInWithGoogle()` - Sign in with Google OAuth
- `signOut()` - Sign out current user
- `resetPassword(email)` - Send password reset email
- `updatePassword(password)` - Update user password

## User Object Properties

The user object contains:
- `user.id` - Unique user ID
- `user.email` - User's email address
- `user.user_metadata` - Additional user data (like full_name)
- `user.created_at` - Account creation timestamp

## Next Steps

1. Start the development server: `npm run dev`
2. Test the authentication flow
3. Configure additional OAuth providers if needed
4. Set up email templates in Supabase dashboard
5. Add user profile management features
6. Implement role-based access control if needed 