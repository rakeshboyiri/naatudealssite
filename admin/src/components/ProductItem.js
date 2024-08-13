import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../App.css';

const ProductItem = ({ product, onRemove }) => {
  const handleClick = () => {
    window.location.href = product.link;
  };

  return (
    <div className="product-item">
      <img src={product.photo} alt={product.name} onClick={handleClick} />
      <p>{product.name}</p>
     
      {onRemove && (
        <button onClick={onRemove} className='remove-button'>Remove</button>
      )}
    </div>
  );
};

export default ProductItem;
