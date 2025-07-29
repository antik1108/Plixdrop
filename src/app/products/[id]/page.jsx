'use client';
import { useState } from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import { useCart } from '../../../components/CartContext.jsx';
import { ShoppingCart, Check, ArrowLeft } from 'lucide-react';
import products from '../../../data/products';
import { formatINR } from '../../../lib/currency.js';

export default function ProductDetailsPage({ params }) {
  const { id } = params;
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  // Find product from both data sources
  const product = products.find((p) => p.id === id) || 
    // Fallback to demo products if not found in data file
    {
      id: parseInt(id),
      name: 'Stealth Black Pro',
      description: 'A premium gaming mousepad with exceptional tracking and comfort.',
      price: 1125, // 49.99 USD * 22.5 = 1124.78 ≈ 1125 INR
      image: 'https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?w=800&h=800&fit=crop',
      category: 'gaming',
      rating: 5,
      reviews: 128,
      badge: 'SALE'
    };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    
    // Reset the success state after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-[#080808]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500 text-xl">Product not found.</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-[#18181c] border-b border-[#18181c]">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <a
                href="/products"
                className="text-gray-400 hover:text-[#dfe31d] transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </a>
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">PRODUCT DETAILS</h1>
                <p className="text-gray-400">Explore our premium mousepads</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="lg:col-span-1">
              <div className="aspect-square bg-[#18181c] rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
                  <p className="text-gray-400 text-lg">{product.description}</p>
                </div>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#dfe31d]">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : i < product.rating ? 'fill-current opacity-50' : 'fill-none stroke-current'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500">({product.reviews} reviews)</span>
                  </div>
                )}
                
                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-white">{formatINR(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-xl">{formatINR(product.originalPrice)}</span>
                  )}
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="text-white font-medium">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-10 h-10 bg-[#18181c] border border-[#080808] rounded-lg text-white hover:bg-[#dfe31d] hover:text-[#080808] transition-colors"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-white font-medium">{quantity}</span>
                    <button
                      className="w-10 h-10 bg-[#18181c] border border-[#080808] rounded-lg text-white hover:bg-[#dfe31d] hover:text-[#080808] transition-colors"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    addedToCart
                      ? 'bg-green-500 text-white'
                      : 'bg-[#dfe31d] text-[#080808] hover:bg-[#dfe31d]/90'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-6 h-6" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-6 h-6" />
                      Add to Cart - {formatINR(product.price * quantity)}
                    </>
                  )}
                </button>
                
                {/* Product Features */}
                <div className="bg-[#18181c] rounded-lg p-6">
                  <h3 className="text-white font-bold text-lg mb-4">PRODUCT FEATURES</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#dfe31d] rounded-full"></div>
                      <span className="text-gray-400">Premium Material</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#dfe31d] rounded-full"></div>
                      <span className="text-gray-400">Anti-Slip Base</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#dfe31d] rounded-full"></div>
                      <span className="text-gray-400">Water Resistant</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#dfe31d] rounded-full"></div>
                      <span className="text-gray-400">Washable</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="bg-[#18181c] rounded-lg p-6">
                  <h3 className="text-white font-bold text-lg mb-4">SHIPPING & RETURNS</h3>
                  <div className="space-y-3 text-gray-400">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#dfe31d] rounded-full"></div>
                      <span>Free shipping on orders over ₹1125</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#dfe31d] rounded-full"></div>
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#dfe31d] rounded-full"></div>
                      <span>Secure payment processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 