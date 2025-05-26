import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from './Components/HomePage';
import ElementRenderer from './Components/ElementRenderer';
import Counter from './Components/Counter';
import RandomNumberGenerator from './Components/RandomNumberGenerator';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>React Exam 2</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/elementrenderer">Part One (Element Renderer)</NavLink>
              </li>
              <li>
                <NavLink to="/counter">Part Two (Counter)</NavLink>
              </li>
              <li>
                <NavLink to="/randomnumber">Part Three (Random Number Generator)</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/elementrenderer" element={<ElementRenderer />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/randomnumber" element={<RandomNumberGenerator />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div >
  );
}

export default App;
