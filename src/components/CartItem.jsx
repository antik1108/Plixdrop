'use client';

import { ShoppingCart } from 'lucide-react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => (
  <div className="flex items-center gap-4 py-4 border-b border-[#080808] bg-[#18181c]">
    <ShoppingCart className="w-6 h-6 text-[#dfe31d]" />
    <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded" />
    <div className="flex-1">
      <div className="font-semibold text-lg text-white">{item.name}</div>
      <div className="text-gray-400">${item.price.toFixed(2)}</div>
      <div className="flex items-center mt-2 gap-2">
        <button
          className="px-2 py-1 bg-[#080808] rounded hover:bg-[#dfe31d] hover:text-[#080808] transition"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="px-2 text-white">{item.quantity}</span>
        <button
          className="px-2 py-1 bg-[#080808] rounded hover:bg-[#dfe31d] hover:text-[#080808] transition"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
    <div className="w-24 text-right font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</div>
    <button
      className="ml-4 text-[#dfe31d] hover:text-white font-bold"
      onClick={() => onRemove(item.id)}
      title="Remove"
    >
      ×
    </button>
  </div>
);

export default CartItem; 