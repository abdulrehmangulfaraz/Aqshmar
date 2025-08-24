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
    // In a real application, you would send this to a backend API
    console.log('New Product Added:', newProduct);
    alert('Product added! Check the console for the new product data.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">Product Admin Dashboard</h1>
          <p className="text-lg text-indigo-600">Add new products to your inventory</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-semibold">Add New Product</h2>
            <p className="opacity-90">Fill in the details below to create a new product listing</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
            {/* Basic Information Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Basic Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={handleChange} 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Enter product name"
                  />
                </div>
                
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                  <input 
                    type="number" 
                    name="price" 
                    id="price" 
                    onChange={handleChange} 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image Filename</label>
                <input 
                  type="text" 
                  name="image" 
                  id="image" 
                  onChange={handleChange} 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="e.g., aqs-030.png"
                />
                <p className="mt-1 text-xs text-gray-500">Include the file extension (e.g., .jpg, .png)</p>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  name="description" 
                  id="description" 
                  onChange={handleChange} 
                  rows={3} 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter product description"
                ></textarea>
              </div>
            </div>
            
            {/* Specifications Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Specifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="sizes" className="block text-sm font-medium text-gray-700 mb-1">Sizes (comma-separated)</label>
                  <input 
                    type="text" 
                    name="sizes" 
                    id="sizes" 
                    onChange={handleArrayChange} 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="S, M, L, XL"
                  />
                </div>
                
                <div>
                  <label htmlFor="colors" className="block text-sm font-medium text-gray-700 mb-1">Colors (comma-separated)</label>
                  <input 
                    type="text" 
                    name="colors" 
                    id="colors" 
                    onChange={handleArrayChange} 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Red, Blue, Green"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fabric" className="block text-sm font-medium text-gray-700 mb-1">Fabric Material</label>
                  <input 
                    type="text" 
                    name="fabric" 
                    id="fabric" 
                    onChange={handleChange} 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="e.g., Cotton, Polyester"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select 
                    name="category" 
                    id="category" 
                    onChange={handleChange} 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option>Embroidered Collection</option>
                    <option>Matching Sets</option>
                    <option>Sweatshirts</option>
                    <option>Hoodies</option>
                    <option>Designer Collection</option>
                    <option>Activewear</option>
                    <option>Graphic Tees</option>
                    <option>Floral Collection</option>
                    <option>Special Editions</option>
                    <option>Kids Collection</option>
                    <option>Customized</option>
                    <option>Political Collection</option>
                    <option>Pop Culture</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Additional Information Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Additional Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
                  <input 
                    type="text" 
                    name="tags" 
                    id="tags" 
                    onChange={handleArrayChange} 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="summer, casual, trendy"
                  />
                </div>
                
                <div>
                  <label htmlFor="careInstructions" className="block text-sm font-medium text-gray-700 mb-1">Care Instructions (comma-separated)</label>
                  <input 
                    type="text" 
                    name="careInstructions" 
                    id="careInstructions" 
                    onChange={handleArrayChange} 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Machine wash cold, Tumble dry low"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center">
                  <div className="flex items-center h-5">
                    <input 
                      type="checkbox" 
                      name="featured" 
                      id="featured" 
                      onChange={handleChange} 
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <label htmlFor="featured" className="ml-2 block text-sm font-medium text-gray-700">Featured Product</label>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center h-5">
                    <input 
                      type="checkbox" 
                      name="isNew" 
                      id="isNew" 
                      onChange={handleChange} 
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                  </div>
                  <label htmlFor="isNew" className="ml-2 block text-sm font-medium text-gray-700">New Arrival</label>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3.5 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg shadow-md font-medium transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;