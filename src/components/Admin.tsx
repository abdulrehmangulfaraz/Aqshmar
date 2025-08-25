import React, { useState } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

const Admin: React.FC = () => {
  const [product, setProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    image: '',
    description: '',
    sizes: [],
    colors: [],
    fabric: '',
    category: '',
    featured: false,
    isNew: false,
    tags: [],
    careInstructions: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value.split(',').map(item => item.trim())
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: `aqs-${String(products.length + 1).padStart(3, '0')}`,
      ...product
    };
    console.log('New Product Added:', newProduct);
    alert('Product added! Check the console for the new product data.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-purple-50 p-8 md:p-12 lg:p-16 font-sans">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-rose-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-amber-900 mb-4 tracking-wide leading-tight">Aqshmar Admin Masterpiece Hub</h1>
        <p className="text-xl md:text-2xl text-amber-700 opacity-90 max-w-3xl mx-auto leading-relaxed">Elevate Your Brand • Curate Timeless Handcrafted Elegance with Every New Creation</p>
        <div className="mt-6 w-40 h-1.5 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full shadow-inner"></div>
      </header>
      
      <main className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-amber-200/30 p-6 md:p-10 lg:p-12 transform hover:shadow-3xl transition-all duration-300">
          {/* Form Header */}
          <div className="bg-gradient-to-br from-amber-700 to-purple-800 p-10 md:p-12 lg:p-14 text-white relative overflow-hidden rounded-t-3xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg viewBox="0 0 200 200" className="w-full h-full text-white">
                <path d="M20 100 Q70 20 120 100 T180 100" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M30 110 Q80 30 130 110 T190 110" stroke="currentColor" strokeWidth="1" fill="none" />
                <path d="M10 90 Q60 10 110 90 T170 90" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold relative z-10 mb-4 leading-tight">Craft Your Next Legacy</h2>
            <p className="text-lg md:text-xl opacity-90 relative z-10 max-w-2xl leading-relaxed">Unleash the artistry of Aqshmar with every stitch, blending heritage and innovation for the world to admire.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-10 lg:p-12 space-y-10">
            {/* Basic Information Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-3 h-12 bg-gradient-to-b from-amber-500 to-rose-500 rounded-full shadow-md"></div>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-amber-900">Core Craft Details</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-sm md:text-base font-medium text-amber-800">Product Title</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={handleChange} 
                    className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                    placeholder="e.g., The Celestial Embroidery Dress"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="price" className="block text-sm md:text-base font-medium text-amber-800">Price (USD)</label>
                  <input 
                    type="number" 
                    name="price" 
                    id="price" 
                    onChange={handleChange} 
                    className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                    placeholder="99.99"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="image" className="block text-sm md:text-base font-medium text-amber-800">Image Filename</label>
                <input 
                  type="text" 
                  name="image" 
                  id="image" 
                  onChange={handleChange} 
                  className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                  placeholder="e.g., celestial-dress-001.jpg"
                />
                <p className="text-xs md:text-sm text-amber-600 opacity-80">Upload to assets folder with .jpg, .png, or .webp extension.</p>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="description" className="block text-sm md:text-base font-medium text-amber-800">Narrative Description</label>
                <textarea 
                  name="description" 
                  id="description" 
                  onChange={handleChange} 
                  rows={5} 
                  className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                  placeholder="Weave a story of inspiration, craftsmanship, and cultural significance..."
                ></textarea>
              </div>
            </section>
            
            {/* Specifications Section */}
            <section className="space-y-8 pt-10 border-t border-amber-200/20">
              <div className="flex items-center gap-5">
                <div className="w-3 h-12 bg-gradient-to-b from-amber-500 to-rose-500 rounded-full shadow-md"></div>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-amber-900">Artisan Specifications</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="sizes" className="block text-sm md:text-base font-medium text-amber-800">Size Options (comma-separated)</label>
                  <input 
                    type="text" 
                    name="sizes" 
                    id="sizes" 
                    onChange={handleArrayChange} 
                    className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                    placeholder="XS, S, M, L, XL, XXL"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="colors" className="block text-sm md:text-base font-medium text-amber-800">Color Palette (comma-separated)</label>
                  <input 
                    type="text" 
                    name="colors" 
                    id="colors" 
                    onChange={handleArrayChange} 
                    className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                    placeholder="Emerald Green, Saffron Gold, Midnight Navy"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="fabric" className="block text-sm md:text-base font-medium text-amber-800">Fabric Essence</label>
                  <input 
                    type="text" 
                    name="fabric" 
                    id="fabric" 
                    onChange={handleChange} 
                    className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                    placeholder="e.g., Handwoven Silk with Organic Cotton Blend"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="category" className="block text-sm md:text-base font-medium text-amber-800">Collection Category</label>
                  <select 
                    name="category" 
                    id="category" 
                    onChange={handleChange} 
                    className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md appearance-none"
                  >
                    <option value="">Select a Prestigious Category</option>
                    <option>Embroidered Heritage</option>
                    <option>Matching Ensembles</option>
                    <option>Luxury Sweatshirts</option>
                    <option>Premium Hoodies</option>
                    <option>Designer Couture</option>
                    <option>Active Elegance</option>
                    <option>Graphic Masterpieces</option>
                    <option>Floral Symphony</option>
                    <option>Limited Editions</option>
                    <option>Kids' Treasures</option>
                    <option>Bespoke Creations</option>
                    <option>Political Statements</option>
                    <option>Pop Culture Icons</option>
                  </select>
                </div>
              </div>
            </section>
            
            {/* Additional Information Section */}
            <section className="space-y-8 pt-10 border-t border-amber-200/20">
              <div className="flex items-center gap-5">
                <div className="w-3 h-12 bg-gradient-to-b from-amber-500 to-rose-500 rounded-full shadow-md"></div>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-amber-900">Refined Touches</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="tags" className="block text-sm md:text-base font-medium text-amber-800">Discovery Tags (comma-separated)</label>
                  <input 
                    type="text" 
                    name="tags" 
                    id="tags" 
                    onChange={handleArrayChange} 
                    className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                    placeholder="handcrafted, luxury, ethnic-chic, seasonal-trends"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="careInstructions" className="block text-sm md:text-base font-medium text-amber-800">Care Rituals (comma-separated)</label>
                  <input 
                    type="text" 
                    name="careInstructions" 
                    id="careInstructions" 
                    onChange={handleArrayChange} 
                    className="w-full px-6 py-4 rounded-2xl border border-amber-200/40 focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all bg-white/70 shadow-md placeholder-amber-400/50"
                    placeholder="Hand wash with care, Dry flat, Steam iron gently"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-5">
                <label className="flex items-center cursor-pointer space-x-4">
                  <input 
                    type="checkbox" 
                    name="featured" 
                    id="featured" 
                    onChange={handleChange} 
                    className="w-5 h-5 text-amber-600 border-amber-300 rounded focus:ring-amber-400 sr-only peer"
                  />
                  <div className="w-5 h-5 mr-3 border-2 border-amber-300 rounded bg-white peer-checked:bg-amber-600 peer-checked:border-transparent transition-all flex items-center justify-center">
                    <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium text-amber-800">Highlight as Featured</span>
                </label>
                
                <label className="flex items-center cursor-pointer space-x-4">
                  <input 
                    type="checkbox" 
                    name="isNew" 
                    id="isNew" 
                    onChange={handleChange} 
                    className="w-5 h-5 text-amber-600 border-amber-300 rounded focus:ring-amber-400 sr-only peer"
                  />
                  <div className="w-5 h-5 mr-3 border-2 border-amber-300 rounded bg-white peer-checked:bg-amber-600 peer-checked:border-transparent transition-all flex items-center justify-center">
                    <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium text-amber-800">Mark as New Arrival</span>
                </label>
              </div>
            </section>
            
            {/* Submit Button */}
            <div className="pt-12 border-t border-amber-200/20 flex justify-center">
              <button 
                type="submit" 
                className="group px-14 py-5 text-lg md:text-xl text-white bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 hover:from-amber-700 hover:via-rose-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-amber-300/50 rounded-2xl shadow-lg font-serif font-semibold transition-all duration-300 flex items-center gap-4 transform hover:scale-105 hover:shadow-xl"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Launch This Masterpiece
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <footer className="mt-20 text-center text-amber-700 text-lg md:text-xl opacity-90">
          <p className="italic font-serif">"Where every thread sings a song of heritage, and every stitch crafts a legacy."</p>
          <p className="mt-3 font-serif text-xl md:text-2xl">— The Vision of Aqshmar</p>
        </footer>
      </main>
    </div>
  );
};

export default Admin;