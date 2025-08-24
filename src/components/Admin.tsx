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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
              <input type="text" name="name" id="name" onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
              <input type="number" name="price" id="price" onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image Filename</label>
            <input type="text" name="image" id="image" onChange={handleChange} placeholder="e.g., aqs-030.png" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" id="description" onChange={handleChange} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="sizes" className="block text-sm font-medium text-gray-700">Sizes (comma-separated)</label>
              <input type="text" name="sizes" id="sizes" onChange={handleArrayChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="colors" className="block text-sm font-medium text-gray-700">Colors (comma-separated)</label>
              <input type="text" name="colors" id="colors" onChange={handleArrayChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fabric" className="block text-sm font-medium text-gray-700">Fabric</label>
              <input type="text" name="fabric" id="fabric" onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select name="category" id="category" onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
              <input type="text" name="tags" id="tags" onChange={handleArrayChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="careInstructions" className="block text-sm font-medium text-gray-700">Care Instructions (comma-separated)</label>
              <input type="text" name="careInstructions" id="careInstructions" onChange={handleArrayChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input type="checkbox" name="featured" id="featured" onChange={handleChange} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">Featured</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="isNew" id="isNew" onChange={handleChange} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              <label htmlFor="isNew" className="ml-2 block text-sm text-gray-900">New</label>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;