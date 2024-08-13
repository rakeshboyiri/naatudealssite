import React, { useState } from 'react';
import axios from 'axios';
import './AddProductForm.css'; // Import the CSS file

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://naatudealssite-backend.onrender.com/api/products', {
        name,
        photo,
        link,
      });
      onAddProduct(response.data);
      setName('');
      setPhoto('');
      setLink('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='add-product-form'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
