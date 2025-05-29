import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DisplayName from './pages/DisplayName';
import DisplayFood from './pages/DisplayFood';
import DisplayVacation from './pages/DisplayVacation';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext';

function Navigation() {
  const { isAuthenticated } = useAuth();
  
  return (
    <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/display-name">Display Name</Link></li>
        <li><Link to="/display-food">Display Food</Link></li>
        <li><Link to="/display-vacation">Display Vacation</Link></li>
        {!isAuthenticated ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li><Link to="/dashboard">Dashboard</Link></li>
        )}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/display-name" element={<DisplayName />} />
            <Route path="/display-food" element={<DisplayFood />} />
            <Route path="/display-vacation" element={<DisplayVacation />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
