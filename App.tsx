
import React, { useState } from 'react';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import { MOCK_PRODUCT } from './constants';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Header cartCount={cartCount} />
      
      <main className="flex-grow pt-20">
        <div className="container-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Shop</a></li>
              <li><span className="mx-2">/</span></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">{MOCK_PRODUCT.category}</a></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-slate-900 font-semibold">{MOCK_PRODUCT.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24">
            <ProductGallery images={MOCK_PRODUCT.images} />
            <ProductDetails 
              product={MOCK_PRODUCT} 
              onAddToCart={handleAddToCart} 
            />
          </div>

          {/* Product Specifications Section */}
          <section className="mt-24 pt-16 border-t border-slate-100">
            <h2 className="text-3xl font-bold mb-12">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {MOCK_PRODUCT.specs.map((spec, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl">
                  <dt className="text-sm font-medium text-slate-500 mb-1">{spec.label}</dt>
                  <dd className="text-lg font-semibold text-slate-900">{spec.value}</dd>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <GeminiAssistant product={MOCK_PRODUCT} />
    </div>
  );
};

export default App;
