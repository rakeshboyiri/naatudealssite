import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate

const EditProductPage = () => {
  const { id } = useParams(); // Get the product ID from URL
  const navigate = useNavigate(); // Use navigate for navigation
  const [product, setProduct] = useState({ name: '', photo: '', link: '' });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://naatudealssite-backend.onrender.com/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://naatudealssite-backend.onrender.com/api/products/${id}`, product);
      navigate('/admin'); // Redirect to admin page after successful edit
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="photo"
          value={product.photo}
          onChange={handleChange}
          placeholder="Product Photo URL"
          required
        />
        <input
          type="text"
          name="link"
          value={product.link}
          onChange={handleChange}
          placeholder="Product Link"
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProductPage;
