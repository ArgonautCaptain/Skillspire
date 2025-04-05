import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from './Components/HomePage';
import UserProfile from './Components/UserProfile';
import ButtonPage from './Components/ButtonPage';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>React Exam</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/partOneTwo">Part One & Two</NavLink>
              </li>
              <li>
                <NavLink to="/partThree">Part Three</NavLink>
              </li>
              <li>
                <NavLink to="/partFourFive">Part Four & Five</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partOneTwo" element={<UserProfile />} />
            <Route path="/partThree" element={<ButtonPage />} />
            <Route path="/partFourFive" element={<TodoList />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div >
  );
}

export default App;
