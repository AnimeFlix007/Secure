import "./navbar.css";
import React, { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const showHandler = () => {
    setNav((prev) => !prev);
  };
  const title = nav ? "nav-menu active" : "nav-menu";
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <SiDatabricks className="icon" />
          <h1><Link to='/'>Security</Link></h1>
        </div>

        <ul className={title}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/security'>Security</Link></li>
          <li><Link to='/recovery'>Recovery</Link></li>
          <li><Link to='/cloud'>Cloud</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <div className="buttonSection">
            <button>Log In</button>
            <button id="second">Sign Up</button>
          </div>
        </ul>

        <div className="hamburger" onClick={showHandler}>
          {!nav && <FaBars />}
          {nav && <FaTimes />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
