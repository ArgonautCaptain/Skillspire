import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '50px auto', 
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Dashboard</h2>
        <button
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>Welcome, Admin!</h3>
        <p>This is your protected dashboard page.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e9ecef', 
          borderRadius: '8px' 
        }}>
          <h4>Profile Information</h4>
          <p>Username: admin</p>
          <p>Role: Administrator</p>
        </div>
        
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#e9ecef', 
          borderRadius: '8px' 
        }}>
          <h4>Recent Activity</h4>
          <p>Last login: {new Date().toLocaleString()}</p>
          <p>Status: Active</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 