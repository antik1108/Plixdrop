'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { useCart } from '../../components/CartContext.jsx';
import { Search, Filter, X, ChevronDown, Grid3X3, Grid2X2, ShoppingCart, Check } from 'lucide-react';

// Demo products data
const demoProducts = [
  {
    id: 1,
    name: 'Stealth Black Pro',
    price: 49.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?w=800&h=800&fit=crop',
    category: 'gaming',
    rating: 5,
    reviews: 128,
    badge: 'SALE'
  },
  {
    id: 2,
    name: 'Minimal Code White',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&h=800&fit=crop',
    category: 'coding',
    rating: 5,
    reviews: 89,
    badge: 'NEW'
  },
  {
    id: 3,
    name: 'Sunset Gradient Wave',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop',
    category: 'aesthetic',
    rating: 4.5,
    reviews: 215,
    badge: 'POPULAR'
  },
  {
    id: 4,
    name: 'RGB Gaming Elite',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&h=800&fit=crop',
    category: 'gaming',
    rating: 5,
    reviews: 342
  },
  {
    id: 5,
    name: 'Ocean Blue Minimal',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=800&fit=crop',
    category: 'aesthetic',
    rating: 4.8,
    reviews: 156
  },
  {
    id: 6,
    name: 'Carbon Fiber Pro',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=800&fit=crop',
    category: 'gaming',
    rating: 5,
    reviews: 98
  },
  {
    id: 7,
    name: 'Zen Garden Desk Mat',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&h=800&fit=crop',
    category: 'aesthetic',
    rating: 4.7,
    reviews: 203
  },
  {
    id: 8,
    name: 'Developer Dark Mode',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=800&fit=crop',
    category: 'coding',
    rating: 5,
    reviews: 177
  },
  {
    id: 9,
    name: 'Neon Cyber Grid',
    price: 59.99,
    originalPrice: 69.99,
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
  const [priceRange, setPriceRange] = useState([0, 100]);
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
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-bold text-white mb-2">PRODUCTS</h1>
                <p className="text-gray-400">{filteredProducts.length} items available</p>
              </div>
              
              {/* Grid View Toggle - Desktop */}
              <div className="hidden lg:flex items-center gap-2 bg-[#080808] rounded-lg p-1">
                <button
                  onClick={() => setGridView(2)}
                  className={`p-2 rounded ${gridView === 2 ? 'bg-[#dfe31d] text-[#080808]' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid2X2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setGridView(3)}
                  className={`p-2 rounded ${gridView === 3 ? 'bg-[#dfe31d] text-[#080808]' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Search and Sort Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search mousepads..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#18181c] border border-transparent rounded-full pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#dfe31d] transition-all duration-200"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#18181c] text-white px-6 py-3 pr-12 rounded-full focus:outline-none focus:border-[#dfe31d] border border-transparent transition-all duration-200 cursor-pointer"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 bg-[#18181c] text-white px-6 py-3 rounded-full"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

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
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
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
              <div className={`grid grid-cols-1 md:grid-cols-2 ${gridView === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <a href={`/products/${product.id}`} className="block">
                      <div className="relative aspect-square bg-[#18181c] rounded-2xl overflow-hidden mb-4">
                        {product.badge && (
                          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-10                           ${
                            product.badge === 'SALE' ? 'bg-[#dfe31d] text-[#080808]' :
                            product.badge === 'NEW' ? 'bg-white text-[#080808]' :
                            'bg-[#dfe31d] text-[#080808]'
                          }`}>
                            {product.badge}
                          </div>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                          <span className="text-2xl font-bold text-white">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-500 line-through text-lg">${product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </a>
                    
                    {/* Add to Cart Button */}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className={`w-full py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        addedToCart[product.id]
                          ? 'bg-green-500 text-white'
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

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="bg-[#18181c] text-white px-8 py-3 rounded-full font-medium hover:bg-[#dfe31d] hover:text-[#080808] transition-all duration-200">
                  Load More Products
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {showFilters && (
          <div className="lg:hidden fixed inset-0 bg-[#080808] z-50 overflow-y-auto">
            <div className="sticky top-0 bg-[#080808] border-b border-[#18181c] p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">FILTERS</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-[#18181c] rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 tracking-wider">CATEGORIES</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => {
                        setCategory(cat.value);
                      }}
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
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
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
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}