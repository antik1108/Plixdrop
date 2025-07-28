'use client';

import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import CartItem from '../../components/CartItem.jsx';
import { useCart } from '../../components/CartContext.jsx';
import { ShoppingCart, CreditCard, ArrowLeft, Package } from 'lucide-react';
import { formatINR, convertUSDToINR } from '../../lib/currency.js';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotal, getItemCount } = useCart();
  const total = getTotal();
  const itemCount = getItemCount();
  const freeShippingThreshold = convertUSDToINR(50); // $50 USD = ₹1125 INR

  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-[#18181c] border-b border-[#18181c]">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">YOUR CART</h1>
                <p className="text-gray-400">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <Package className="w-6 h-6 text-[#dfe31d]" />
                <span className="text-white">Free shipping on orders over {formatINR(freeShippingThreshold)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-[#18181c] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
              <p className="text-gray-400 mb-8">Looks like you haven't added any items yet</p>
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-[#dfe31d] text-[#080808] px-8 py-3 rounded-full font-bold hover:bg-[#dfe31d]/90 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-[#18181c] rounded-2xl p-6">
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={item.id}>
                        <CartItem
                          item={item}
                          onRemove={removeFromCart}
                          onUpdateQuantity={updateQuantity}
                        />
                        {index < cart.length - 1 && (
                          <div className="border-b border-[#080808] mt-4" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Continue Shopping Link */}
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-[#dfe31d] mt-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Continue Shopping
                </a>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[#18181c] rounded-2xl p-6 sticky top-4">
                  <h2 className="text-xl font-bold text-white mb-6">ORDER SUMMARY</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>{formatINR(total)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Shipping</span>
                      <span className="text-[#dfe31d]">FREE</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Tax</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="border-t border-[#080808] pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-white">Total</span>
                      <span className="text-2xl font-bold text-[#dfe31d]">{formatINR(total)}</span>
                    </div>
                  </div>

                  <a
                    href="/checkout"
                    className="w-full bg-[#dfe31d] text-[#080808] py-4 rounded-full font-bold hover:bg-[#dfe31d]/90 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Proceed to Checkout
                  </a>

                  {/* Security Badge */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Secure checkout
                    </p>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="bg-[#18181c] rounded-2xl p-6 mt-4">
                  <h3 className="text-sm font-bold text-white mb-3 tracking-wider">PROMO CODE</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 bg-[#080808] border border-transparent rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] transition-all duration-200"
                    />
                    <button className="px-6 py-2 border border-[#dfe31d] text-[#dfe31d] rounded-lg hover:bg-[#dfe31d] hover:text-[#080808] transition-all duration-200 font-medium">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}