'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useCart } from '../../components/CartContext.jsx';
import { ShoppingCart, Receipt, CheckCircle, Package, Mail, User, MapPin } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCart();
  const total = getTotal();
  const shipping = total > 50 ? 0 : 9.99;
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

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-[#080808]">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-20">
          <div className="bg-[#18181c] border border-[#dfe31d]/20 rounded-lg p-12 text-center flex flex-col items-center max-w-md">
            <div className="bg-[#dfe31d]/10 p-4 rounded-full mb-6">
              <CheckCircle className="w-16 h-16 text-[#dfe31d]" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white uppercase tracking-wide">Order Confirmed!</h1>
            <p className="text-gray-400 mb-2">Confirmation sent to:</p>
            <p className="text-[#dfe31d] font-semibold text-lg mb-6">{form.email}</p>
            <p className="text-gray-500 text-sm mb-8">Order #MP-{Date.now().toString().slice(-8)}</p>
            <a 
              href="/" 
              className="bg-[#dfe31d] text-[#080808] px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-[#dfe31d]/90 transition-all duration-200"
            >
              Continue Shopping
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
      <main className="flex-1 max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3 text-white uppercase tracking-wider">
          <Receipt className="w-8 h-8 text-[#dfe31d]" /> Checkout
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-[#18181c] rounded-lg p-8 border border-gray-800">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-white uppercase">
              <ShoppingCart className="w-6 h-6 text-[#dfe31d]" /> Order Summary
            </h2>
            
            {cart.length === 0 ? (
              <div className="text-gray-500 flex items-center gap-2 py-8">
                <Package className="w-5 h-5" /> Your cart is empty.
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
                        <p className="text-[#dfe31d] font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-gray-500 text-sm">${item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 pt-4 border-t border-gray-800">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-[#dfe31d]' : ''}>
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-gray-600">Free shipping on orders over $50</p>
                  )}
                  <div className="flex justify-between text-xl font-bold text-white pt-3 border-t border-gray-800">
                    <span>Total</span>
                    <span className="text-[#dfe31d]">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Checkout Form */}
          <div className="bg-[#18181c] rounded-lg p-8 border border-gray-800">
            <h2 className="text-xl font-bold mb-6 text-white uppercase">Shipping Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
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
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}