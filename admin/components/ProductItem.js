import React from 'react';

const ProductItem = ({ product, onRemove }) => {
  const handleClick = () => {
    window.location.href = product.link;
  };

  return (
    <div className="product-item">
      <img src={product.photo} alt={product.name} onClick={handleClick} />
      <p>{product.name}</p>
      {onRemove && (
        <button onClick={onRemove}>Remove</button>
      )}
    </div>
  );
};

export default ProductItem;
