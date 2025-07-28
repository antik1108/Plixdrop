'use client';

import Link from 'next/link';
import { MousePointerClick } from 'lucide-react';
import { formatINR } from '../lib/currency.js';

const ProductCard = ({ product }) => (
  <div className="bg-brand-white rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-center transition border border-brand-dark/10">
    <MousePointerClick className="w-6 h-6 text-brand-lime mb-2" />
    <img
      src={product.image}
      alt={product.name}
      className="w-32 h-32 object-contain mb-4"
    />
    <h3 className="text-lg font-semibold mb-2 text-center text-brand-dark">{product.name}</h3>
    <p className="text-brand-dark/70 mb-2 text-center">{formatINR(product.price)}</p>
    <Link
      href={`/products/${product.id}`}
      className="mt-auto inline-block bg-brand-lime text-brand-black px-4 py-2 rounded-full font-medium hover:bg-brand-dark hover:text-brand-white transition"
    >
      View Details
    </Link>
  </div>
);

export default ProductCard; 