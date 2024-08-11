import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onRemoveProduct }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem 
          key={product._id} 
          product={product} 
          onRemove={() => onRemoveProduct && onRemoveProduct(product._id)} 
        />
      ))}
    </div>
  );
};

export default ProductList;
