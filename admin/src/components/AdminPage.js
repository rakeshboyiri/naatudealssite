import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';
import logo from './logo.jpeg';

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://naatudealssite-backend.onrender.com/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const removeProduct = async (id) => {
    try {
      await axios.delete(`https://naatudealssite-backend.onrender.com/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
      setFilteredProducts(filteredProducts.filter(product => product._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map(product =>
      product._id === updatedProduct._id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <div>
      <div className='user-header'>
        <div className='logo-div'>
          <img src={logo} alt='logo' className='logo-image'/> <br />
          <div className='header-text'>
            <h1>Naatu Deals</h1>
            <h3>💥Admin Page 💥</h3>
          </div>
        </div>
      </div>
      
      <AddProductForm onAddProduct={(product) => {
        setProducts([...products, product]);
        setFilteredProducts([...products, product]);
      }} />
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className='search-bar'
      />
      
      <ProductList 
        products={filteredProducts} 
        onRemoveProduct={removeProduct} 
        onUpdateProduct={updateProduct} 
      />
    </div>
  );
};

export default AdminPage;
