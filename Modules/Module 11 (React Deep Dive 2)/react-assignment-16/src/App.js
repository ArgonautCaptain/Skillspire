import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
