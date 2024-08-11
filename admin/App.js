import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';
import './App.css';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
