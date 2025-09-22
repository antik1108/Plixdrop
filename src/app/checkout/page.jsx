'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useCart } from '../../components/CartContext.jsx';
import { ShoppingCart, Receipt, CheckCircle, Package, Mail, User, MapPin } from 'lucide-react';
import { formatINR, convertUSDToINR } from '../../lib/currency.js';

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCart();
  const total = getTotal();
  const freeShippingThreshold = convertUSDToINR(50); // $50 USD = ₹1125 INR
  const shipping = total > freeShippingThreshold ? 0 : convertUSDToINR(9.99); // $9.99 USD = ₹225 INR
  const finalTotal = total + shipping;
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Clear the cart after successful order
    clearCart();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-[#18181c] border-b border-[#18181c]">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">CHECKOUT</h1>
                <p className="text-gray-400">Complete your purchase</p>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <Package className="w-6 h-6 text-[#dfe31d]" />
                <span className="text-white">Free shipping on orders over {formatINR(freeShippingThreshold)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#18181c] rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Receipt className="w-6 h-6 text-[#dfe31d]" />
                  ORDER SUMMARY
                </h2>
                
                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-800">
                          <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
                            <img 
                              src={`https://via.placeholder.com/80x80/18181c/dfe31d?text=${item.name.charAt(0)}`} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{item.name}</h3>
                            <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#dfe31d] font-bold">{formatINR(item.price * item.quantity)}</p>
                            <p className="text-gray-500 text-sm">{formatINR(item.price)} each</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t border-gray-800">
                      <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span>{formatINR(total)}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Shipping</span>
                        <span className={shipping === 0 ? 'text-[#dfe31d]' : ''}>
                          {shipping === 0 ? 'FREE' : formatINR(shipping)}
                        </span>
                      </div>
                      {shipping > 0 && (
                        <p className="text-xs text-gray-600">Free shipping on orders over {formatINR(freeShippingThreshold)}</p>
                      )}
                      <div className="flex justify-between text-xl font-bold text-white pt-3 border-t border-gray-800">
                        <span>Total</span>
                        <span className="text-[#dfe31d]">{formatINR(finalTotal)}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-1">
              <div className="bg-[#18181c] rounded-2xl p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Order Confirmed!</h2>
                    <p className="text-gray-400 mb-6">Thank you for your purchase. You will receive a confirmation email shortly.</p>
                    <a
                      href="/products"
                      className="inline-block bg-[#dfe31d] text-[#080808] px-6 py-3 rounded-full font-bold hover:bg-[#dfe31d]/90 transition-colors"
                    >
                      Continue Shopping
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-xl font-bold text-white mb-6">SHIPPING INFORMATION</h2>
                    
                    <div className="relative">
                      <User className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#080808] border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#080808] border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
                      <textarea
                        name="address"
                        placeholder="Shipping Address"
                        value={form.address}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#080808] border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] transition-colors resize-none"
                        rows={3}
                      />
                    </div>

                    <div className="bg-[#080808] border border-gray-700 rounded-lg p-4 mt-6">
                      <p className="text-gray-400 text-sm mb-2">Payment Method</p>
                      <p className="text-white font-semibold">Demo Mode - No payment required</p>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#dfe31d] text-[#080808] py-4 rounded-full font-bold uppercase tracking-wide hover:bg-[#dfe31d]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={cart.length === 0}
                    >
                      Place Order
                    </button>
                    
                    <p className="text-gray-500 text-xs text-center mt-4">
                      By placing this order, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}