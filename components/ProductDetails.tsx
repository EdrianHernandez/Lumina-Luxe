
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => {
    setIsAdding(true);
    onAddToCart();
    setTimeout(() => setIsAdding(false), 2000);
  };

  return (
    <div className="flex flex-col">
      {/* Title & Price */}
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">{product.name}</h1>
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-slate-500 font-medium">(428 Customer Reviews)</span>
        </div>
        <div className="flex items-baseline space-x-4">
          <span className="text-3xl font-bold text-slate-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xl text-slate-400 line-through">${product.originalPrice}</span>
          )}
          <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full uppercase">Save 15%</span>
        </div>
      </div>

      <p className="text-slate-600 leading-relaxed mb-8 text-lg">
        {product.description}
      </p>

      {/* Selectors */}
      <div className="space-y-8 mb-10">
        {/* Colors */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Color: {selectedColor.name}</h3>
          <div className="flex space-x-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border-2 p-0.5 transition-all duration-200 ${
                  selectedColor.name === color.name ? 'border-indigo-600 ring-2 ring-indigo-100 ring-offset-2' : 'border-transparent'
                }`}
              >
                <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }} />
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Select Size</h3>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors underline underline-offset-4">Size Guide</button>
          </div>
          <div className="flex space-x-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 py-3 px-6 rounded-xl border-2 font-bold transition-all duration-200 ${
                  selectedSize === size 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                    : 'border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button 
          onClick={handleAddClick}
          disabled={isAdding}
          className={`flex-1 btn-primary py-5 rounded-2xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center space-x-2 ${isAdding ? 'opacity-90' : ''}`}
        >
          {isAdding ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Added!</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Add to Cart</span>
            </>
          )}
        </button>
        <button className="p-5 rounded-2xl border-2 border-slate-200 text-slate-400 hover:text-rose-500 hover:border-rose-100 transition-all active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-3 text-sm text-slate-500 font-medium">
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span>Free Shipping</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-slate-500 font-medium">
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span>2 Year Warranty</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
