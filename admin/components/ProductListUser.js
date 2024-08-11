import React from 'react';
import './ProductListUser.css'; // Import the CSS file if you have specific styles for this component

const ProductListUser = ({ products, onProductClick }) => {
  return (
    <div className='product-list'>
      {products.map(product => (
        <div key={product._id} className='product-item'>
          <img src={product.photo} alt={product.name} />
          <h3>{product.name}</h3>
          <a href="#" onClick={() => onProductClick(product.link)}>Buy Now</a>
        </div>
      ))}
    </div>
  );
};

export default ProductListUser;
