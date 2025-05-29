import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="profile-container">
      <h2>Welcome, {username}!</h2>
      <p>This is your profile page.</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default UserProfile; 