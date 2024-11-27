import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import EditProductPage from './components/EditProductForm';
import AddProductPage from './components/AddProductForm';
import './App.css';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/edit-product/:id" element={<EditProductPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
