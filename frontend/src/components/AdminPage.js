import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://naatudealssite-backend.onrender.com');
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filtered products
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const removeProduct = async (id) => {
    try {
      await axios.delete(`https://naatudealssite-backend.onrender.com/${id}`);
      setProducts(products.filter(product => product._id !== id));
      setFilteredProducts(filteredProducts.filter(product => product._id !== id)); // Update filtered products
    } catch (err) {
      console.error(err);
    }
  };

  const searchProducts = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredProducts(results);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchProducts(query);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <AddProductForm onAddProduct={(product) => {
        setProducts([...products, product]);
        setFilteredProducts([...products, product]); // Update filtered products
      }} />
      <ProductList products={filteredProducts} onRemoveProduct={removeProduct} />
    </div>
  );
};

export default AdminPage;
