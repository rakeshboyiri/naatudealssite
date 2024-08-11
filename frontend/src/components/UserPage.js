import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductListUser from './ProductListUser';
import '../App.css'; // Import the CSS file
import logo from './logo.jpeg'; // Import the logo image

const UserPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://naatudealssite-backend.onrender.com'+'/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filtered products
      } catch (err) {
        console.error(err);
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

  return (
    <div className='user-page'>
      <div className='user-header'>
        <div className='logo-div'>
          <img src={logo} alt='logo' className='logo-image'/> <br></br>
          <h1>Naatu Deals</h1>
          <h3>Join Our Telegram Channel & Grap the Deals</h3>
          <a href="https://t.me/NaatuDeals" target="_blank" rel="noopener noreferrer">Join Our Channel</a>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ProductListUser products={filteredProducts} onProductClick={handleProductClick} />
    </div>
  );
};

export default UserPage;
