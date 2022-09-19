import { BrowserRouter as Router, Routes, NavLink } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <nav className='main-nav'>
        <div className='title'>
          <span>p</span>ersonal
        </div>

        <div className="menu-link">
          <Router>
            <Routes>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li><NavLink to="/about">About Me</NavLink>
              </li>
              <li><NavLink to="/contact">Contact</NavLink>
              </li>

            </Routes>

          </Router>
        </div>

      </nav>

    </>
  );
}

export default App;
