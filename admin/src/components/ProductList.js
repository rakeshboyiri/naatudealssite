import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onRemoveProduct, onUpdateProduct }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem 
          key={product._id} 
          product={product} 
          onRemove={() => onRemoveProduct && onRemoveProduct(product._id)} 
          onUpdate={(updatedProduct) => onUpdateProduct && onUpdateProduct(updatedProduct)} 
        />
      ))}
    </div>
  );
};

export default ProductList;
