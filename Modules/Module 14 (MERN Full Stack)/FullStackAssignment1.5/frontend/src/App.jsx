import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    height: '',
    weight: '',
    dietaryPreference: 'No preference'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          name: '',
          height: '',
          weight: '',
          dietaryPreference: 'No preference'
        });
        window.location.reload();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Add New User</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={formData.height}
          onChange={(e) => setFormData({...formData, height: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Weight (lbs):</label>
        <input
          type="number"
          value={formData.weight}
          onChange={(e) => setFormData({...formData, weight: e.target.value})}
          required
        />
      </div>
      <div>
        <label>Dietary Preference:</label>
        <select
          value={formData.dietaryPreference}
          onChange={(e) => setFormData({...formData, dietaryPreference: e.target.value})}
        >
          <option value="No preference">No preference</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <Link to={`/user/${user._id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserDetails() {
  const [user, setUser] = useState(null);
  const userId = window.location.pathname.split('/').pop();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Height:</strong> {user.height} cm</p>
      <p><strong>Weight:</strong> {user.weight} lbs</p>
      <p><strong>Dietary Preference:</strong> {user.dietaryPreference}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <h1>User Management System</h1>
              <UserForm />
              <UserList />
            </>
          } />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
