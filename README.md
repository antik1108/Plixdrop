# Plixdrop - Mousepad E-commerce Website

A modern, responsive e-commerce website for premium mousepads built with Next.js 15, React 19, and Tailwind CSS.

## Features

### ✅ Working Functionality
- **Product Catalog**: Browse mousepads with filtering, sorting, and search
- **Shopping Cart**: Add/remove items, update quantities, persistent cart state
- **Product Details**: Individual product pages with add to cart functionality
- **Checkout Process**: Complete checkout flow with order confirmation
- **Responsive Design**: Mobile-first design with dark theme
- **Cart Context**: Global state management for cart functionality

### 🎨 Design Features
- Dark theme with lime green accents
- Smooth animations and transitions
- Modern UI with hover effects
- Responsive grid layouts
- Professional typography

## Fixed Issues

### Cart Functionality
- ✅ Integrated CartContext properly across all pages
- ✅ Fixed add to cart functionality on products page
- ✅ Added quantity selection on product detail pages
- ✅ Implemented cart persistence and state management
- ✅ Added cart clearing after successful checkout

### UI/UX Improvements
- ✅ Fixed CartItem component styling to match dark theme
- ✅ Updated product images to use proper URLs
- ✅ Added success feedback for cart interactions
- ✅ Improved product detail page layout and functionality
- ✅ Added proper navigation between pages

### Technical Fixes
- ✅ Removed conflicting local cart state
- ✅ Added helper functions for cart calculations
- ✅ Fixed product routing and links
- ✅ Added proper error handling for missing products
- ✅ Implemented proper form handling in checkout

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── products/          # Product catalog and detail pages
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout process
│   └── layout.js          # Root layout with CartProvider
├── components/            # Reusable React components
│   ├── CartContext.jsx    # Global cart state management
│   ├── CartItem.jsx       # Individual cart item component
│   ├── Navbar.jsx         # Navigation with cart indicator
│   └── ProductCard.jsx    # Product display component
└── data/                  # Static data
    └── products.js        # Product catalog data
```

## Key Components

### CartContext
- Global state management for shopping cart
- Functions: `addToCart`, `removeFromCart`, `updateQuantity`, `getTotal`, `getItemCount`, `clearCart`
- Persistent across page navigation

### Product Pages
- **Products Page**: Grid layout with filtering, sorting, and search
- **Product Detail**: Individual product view with quantity selection
- **Add to Cart**: Real-time feedback and cart updates

### Cart & Checkout
- **Cart Page**: Item management with quantity controls
- **Checkout**: Order summary and shipping information
- **Order Confirmation**: Success page with order details

## Technologies Used

- **Next.js 15** - React framework with app router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JavaScript** - Programming language

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The application uses:
- **Turbopack** for fast development builds
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **Tailwind CSS** for styling

## License

This project is for demonstration purposes.
