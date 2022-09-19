import { BrowserRouter as Router, Routes, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <span>p</span>ersonal
        </div>
        <Router>

          <div className="menu-link">
            <ul>
              <Routes>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li><NavLink to="/about">About Me</NavLink>
                </li>
                <li><NavLink to="/contact">Contact</NavLink>
                </li>

              </Routes>
            </ul>

          </div>
        </Router>
      </nav>

    </>
  );
}

export default App;
