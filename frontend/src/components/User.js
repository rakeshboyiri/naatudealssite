import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductListUser from './ProductListUser';
import '../App.css';
import Shimmer from './Shimmer';

const User = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://naatudealssite-backend.onrender.com/api/products');
          setProducts(response.data);
          setFilteredProducts(response.data); // Initialize filtered products
        } catch (err) {
          console.error(err);136541
        }
      };
  
      fetchProducts();
    }, []);
  
  
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
  
    const handleProductClick = (link) => {
      window.location.href = link; // Redirect to the product link
    };
  
    return products.length === 0 ? <Shimmer /> : (
      <div className='user-page'>
        <div className='search-bar-div'>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery} 
          onChange={handleSearchChange} className='search-bar'
        />
        </div>
        <ProductListUser products={filteredProducts} onProductClick={handleProductClick} />
    
      </div>
      
    );
  };
  
  export default User;