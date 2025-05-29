import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DisplayName from './pages/DisplayName';
import DisplayFood from './pages/DisplayFood';
import DisplayVacation from './pages/DisplayVacation';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/display-name">Display Name</Link></li>
            <li><Link to="/display-food">Display Food</Link></li>
            <li><Link to="/display-vacation">Display Vacation</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/display-name" element={<DisplayName />} />
          <Route path="/display-food" element={<DisplayFood />} />
          <Route path="/display-vacation" element={<DisplayVacation />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
