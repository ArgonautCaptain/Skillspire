import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  // For demo purposes, we'll use localStorage to simulate authentication
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="home-container">
      <h1>Welcome back!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home; 