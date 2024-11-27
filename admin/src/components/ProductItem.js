import React, { useState } from 'react';
import axios from 'axios';

const ProductItem = ({ product, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false); // Toggle between view/edit modes
  const [editedProduct, setEditedProduct] = useState(product); // Local copy for edits
  const [error, setError] = useState('');

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(
        `https://naatudealssite-backend.onrender.com/api/products/${product._id}`,
        editedProduct
      );
      setIsEditing(false); // Exit editing mode
    } catch (err) {
      console.error('Error updating product:', err);
      setError('Failed to update product.');
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false); // Cancel editing mode
    setEditedProduct(product); // Revert to original product data
  };

  return (
    <div className="product-item">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            name="photo"
            value={editedProduct.photo}
            onChange={handleChange}
            placeholder="Product Photo URL"
            required
          />
          <input
            type="text"
            name="link"
            value={editedProduct.link}
            onChange={handleChange}
            placeholder="Product Link"
            required
          />
          <button onClick={handleSaveClick} className="save-button">
            Save
          </button>
          <button onClick={handleCancelClick} className="cancel-button">
            Cancel
          </button>
        </>
      ) : (
        <>
          <img src={product.photo} alt={product.name} />
          <p>{product.name}</p>
          <button onClick={handleEditClick} className="edit-button">
            Edit
          </button>
          {onRemove && (
            <button onClick={onRemove} className="remove-button">
              Remove
            </button>
          )}
        </>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProductItem;
