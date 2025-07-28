'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useCart } from '../../components/CartContext.jsx';
import { Search, Filter, X, ChevronDown, Grid3X3, Grid2X2, ShoppingCart, Check } from 'lucide-react';
import { formatINR, convertUSDToINR } from '../../lib/currency.js';

// Demo products data with INR pricing
const demoProducts = [
  {
    id: 1,
    name: 'Stealth Black Pro',
    price: 1125, // 49.99 USD * 22.5 = 1124.78 ≈ 1125 INR
    originalPrice: 1350, // 59.99 USD * 22.5 = 1349.78 ≈ 1350 INR
    image: 'https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?w=800&h=800&fit=crop',
    category: 'gaming',
    rating: 5,
    reviews: 128,
    badge: 'SALE'
  },
  {
    id: 2,
    name: 'Minimal Code White',
    price: 787, // 34.99 USD * 22.5 = 787.28 ≈ 787 INR
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&h=800&fit=crop',
    category: 'coding',
    rating: 5,
    reviews: 89,
    badge: 'NEW'
  },
  {
    id: 3,
    name: 'Sunset Gradient Wave',
    price: 967, // 42.99 USD * 22.5 = 967.28 ≈ 967 INR
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop',
    category: 'aesthetic',
    rating: 4.5,
    reviews: 215,
    badge: 'POPULAR'
  },
  {
    id: 4,
    name: 'RGB Gaming Elite',
    price: 1800, // 79.99 USD * 22.5 = 1799.78 ≈ 1800 INR
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&h=800&fit=crop',
    category: 'gaming',
    rating: 5,
    reviews: 342
  },
  {
    id: 5,
    name: 'Ocean Blue Minimal',
    price: 900, // 39.99 USD * 22.5 = 899.78 ≈ 900 INR
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=800&fit=crop',
    category: 'aesthetic',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 6,
    name: 'Carbon Fiber Pro',
    price: 1237, // 54.99 USD * 22.5 = 1237.28 ≈ 1237 INR
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=800&fit=crop',
    category: 'gaming',
    rating: 5,
    reviews: 98
  },
  {
    id: 7,
    name: 'Zen Garden Desk Mat',
    price: 1012, // 44.99 USD * 22.5 = 1012.28 ≈ 1012 INR
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=800&fit=crop',
    category: 'aesthetic',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 8,
    name: 'Developer Dark Mode',
    price: 832, // 36.99 USD * 22.5 = 832.28 ≈ 832 INR
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=800&fit=crop',
    category: 'coding',
    rating: 5,
    reviews: 177
  },
  {
    id: 9,
    name: 'Neon Cyber Grid',
    price: 1350, // 59.99 USD * 22.5 = 1349.78 ≈ 1350 INR
    originalPrice: 1575, // 69.99 USD * 22.5 = 1574.78 ≈ 1575 INR
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&h=800&fit=crop',
    category: 'gaming',
    rating: 4.9,
    reviews: 421,
    badge: 'SALE'
  }
];

const categories = [
  { label: 'ALL PRODUCTS', value: '', count: 9 },
  { label: 'CODING', value: 'coding', count: 2 },
  { label: 'GAMING', value: 'gaming', count: 4 },
  { label: 'AESTHETIC', value: 'aesthetic', count: 3 },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [gridView, setGridView] = useState(3);
  const [priceRange, setPriceRange] = useState([0, 2250]); // Updated to INR range (0-2250 INR)
  const [addedToCart, setAddedToCart] = useState({});

  const filteredProducts = demoProducts
    .filter((p) => {
      const matchesCategory = category ? p.category === category : true;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          if (a.badge === 'NEW' && b.badge !== 'NEW') return -1;
          if (a.badge !== 'NEW' && b.badge === 'NEW') return 1;
          return b.id - a.id;
        case 'featured':
        default:
          if (a.badge && !b.badge) return -1;
          if (!a.badge && b.badge) return 1;
          return 0;
      }
    });

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    
    // Add to cart using CartContext
    addToCart(product, 1);
    
    // Show success state
    setAddedToCart({ ...addedToCart, [product.id]: true });
    
    // Reset the success state after 2 seconds
    setTimeout(() => {
      setAddedToCart({ ...addedToCart, [product.id]: false });
    }, 2000);
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
                <h1 className="text-2xl font-bold text-white mb-2">ALL PRODUCTS</h1>
                <p className="text-gray-400">
                  {filteredProducts.length} of {demoProducts.length} products
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Grid3X3 
                    className={`w-5 h-5 cursor-pointer transition-colors ${gridView === 3 ? 'text-[#dfe31d]' : 'text-gray-500'}`}
                    onClick={() => setGridView(3)}
                  />
                  <Grid2X2 
                    className={`w-5 h-5 cursor-pointer transition-colors ${gridView === 2 ? 'text-[#dfe31d]' : 'text-gray-500'}`}
                    onClick={() => setGridView(2)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#18181c] border border-transparent rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-[#18181c] border border-transparent rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#dfe31d] transition-all duration-200 appearance-none pr-10"
              >
                <option value="">All Categories</option>
                {categories.slice(1).map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label} ({cat.count})
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#18181c] border border-transparent rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#dfe31d] transition-all duration-200 appearance-none pr-10"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-[#18181c] border border-transparent rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#dfe31d] transition-all duration-200 flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden bg-[#18181c] rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 tracking-wider">PRICE RANGE</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-gray-400">
                    <span>{formatINR(priceRange[0])}</span>
                    <span>{formatINR(priceRange[1])}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2250"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#dfe31d]"
                  />
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 tracking-wider">SIZE</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-[#18181c] rounded-lg text-gray-400 hover:border-[#dfe31d] hover:text-[#dfe31d] transition-all duration-200"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 tracking-wider">FEATURES</h3>
                <div className="space-y-2">
                  {['Anti-slip', 'Waterproof', 'RGB', 'Wireless'].map((feature) => (
                    <label key={feature} className="flex items-center gap-2 text-gray-400">
                      <input type="checkbox" className="accent-[#dfe31d]" />
                      {feature}
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Filters Button */}
              <div className="pt-4">
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-[#dfe31d] text-[#080808] py-4 rounded-full font-bold hover:bg-[#dfe31d]/90 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-72 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 tracking-wider">CATEGORIES</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={`group flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200 ${
                        category === cat.value
                          ? 'bg-[#dfe31d] text-[#080808]'
                          : 'text-gray-400 hover:text-white hover:bg-[#18181c]'
                      }`}
                    >
                      <span className="font-medium">{cat.label}</span>
                      <span className={`text-sm ${category === cat.value ? 'text-[#080808]/70' : 'text-gray-500'}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 tracking-wider">PRICE RANGE</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-gray-400">
                    <span>{formatINR(priceRange[0])}</span>
                    <span>{formatINR(priceRange[1])}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2250"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#dfe31d]"
                  />
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 tracking-wider">SIZE</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border border-[#18181c] rounded-lg text-gray-400 hover:border-[#dfe31d] hover:text-[#dfe31d] transition-all duration-200"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 tracking-wider">FEATURES</h3>
                <div className="space-y-3">
                  {['Water Resistant', 'Anti-Slip Base', 'Machine Washable', 'RGB Lighting'].map((feature) => (
                    <label key={feature} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-600 bg-transparent checked:bg-[#dfe31d] checked:border-[#dfe31d] focus:ring-0 focus:ring-offset-0"
                      />
                      <span className="text-gray-400 group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className={`grid gap-6 ${
                gridView === 3 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              }`}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <a href={`/products/${product.id}`} className="block">
                      <div className="aspect-square bg-[#18181c] rounded-lg overflow-hidden mb-4 relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.badge && (
                          <span className="absolute top-3 left-3 bg-[#dfe31d] text-[#080808] text-xs font-bold px-2 py-1 rounded-full">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#dfe31d] transition-colors">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex text-[#dfe31d]">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : i < product.rating ? 'fill-current opacity-50' : 'fill-none stroke-current'}`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm">({product.reviews})</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl font-bold text-white">{formatINR(product.price)}</span>
                          {product.originalPrice && (
                            <span className="text-gray-500 line-through text-lg">{formatINR(product.originalPrice)}</span>
                          )}
                        </div>
                      </div>
                    </a>
                    
                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className={`w-full py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                        addedToCart[product.id]
                          ? 'bg-black text-white border border-white'
                          : 'bg-[#dfe31d] text-[#080808] hover:bg-[#dfe31d]/90'
                      }`}
                    >
                      {addedToCart[product.id] ? (
                        <>
                          <Check className="w-5 h-5" />
                          Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <div className="bg-[#18181c] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">No products found</h2>
                  <p className="text-gray-400 mb-8">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={() => {
                      setSearch('');
                      setCategory('');
                      setPriceRange([0, 2250]);
                    }}
                    className="bg-[#dfe31d] text-[#080808] px-8 py-3 rounded-full font-bold hover:bg-[#dfe31d]/90 transition-all duration-200"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}