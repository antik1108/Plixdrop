'use client';
import { useState } from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import { useCart } from '../../../components/CartContext.jsx';
import { ShoppingCart, Check, ArrowLeft } from 'lucide-react';
import products from '../../../data/products';

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
      price: 49.99,
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
      <main className="flex-1 max-w-6xl mx-auto py-12 px-4">
        {/* Back Button */}
        <a
          href="/products"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#dfe31d] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </a>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-[#18181c] rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            {product.badge && (
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-10 ${
                product.badge === 'SALE' ? 'bg-[#dfe31d] text-[#080808]' :
                product.badge === 'NEW' ? 'bg-white text-[#080808]' :
                'bg-[#dfe31d] text-[#080808]'
              }`}>
                {product.badge}
              </div>
            )}
          </div>
          
          {/* Product Details */}
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
              <span className="text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-xl">${product.originalPrice.toFixed(2)}</span>
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
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </>
              )}
            </button>
            
            {/* Product Features */}
            <div className="bg-[#18181c] rounded-lg p-6">
              <h3 className="text-white font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Premium tracking surface</li>
                <li>• Anti-slip rubber base</li>
                <li>• Machine washable</li>
                <li>• Multiple sizes available</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 