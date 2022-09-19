import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaSnapchatSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";



export default function Navbar(){

  const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <>
        <nav className="main-nav">
          <div className="logo">
          </div>
          <Router><div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <ul>
              <Route>
                <li>
                  <NavLink  to="/">Home</NavLink>
                </li>
              
                  <li>
                  <NavLink to="/about">About</NavLink>
                  </li>
              
                <li>
                  <NavLink to="/service">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </Route>
            </ul>
          </div>
          </Router>
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a
                  href="https://www.facebook.com/sudhan.poudel.94"
                  target="_poudeljatho">
                  <FaFacebookSquare className="facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sudhan_poudel/"
                  target="_poudeljatho">
                  <FaInstagramSquare className="instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.snapchat.com/8096be62-119b-5ab2-81d8-05808794e568"
                  target="_poudeljatho">
                  <FaSnapchatSquare className="snapchat" />
                </a>
              </li>
            </ul>
            <div className="hamburger-menu" >
              <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
        
        </>
    );
  }


