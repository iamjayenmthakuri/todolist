import {BrowserRouter as Router, Route , NavLink} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <nav className='main-nav'>
      <div className='title'>
        <span>p</span>ersonal
      </div>
      <Router>
      <div className="menu-link">
       
       
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li><NavLink to="/about">About Me</NavLink>
            </li>
            <li><NavLink to="/contact">Contact</NavLink>
            </li>

          </div>
        </Router>
     

    </nav>
     
    </>
  );
}

export default App;
