
import React, { useState } from 'react';
import { ProductImage } from '../types';

interface ProductGalleryProps {
  images: ProductImage[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col space-y-4">
      {/* Main Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-slate-100 group">
        <img 
          src={images[activeIndex].url} 
          alt={images[activeIndex].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-4 overflow-x-auto scroll-hide py-2">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(idx)}
            className={`relative flex-shrink-0 w-24 aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              activeIndex === idx ? 'border-indigo-600 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
