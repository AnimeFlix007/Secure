import React from "react";
import { SiDatabricks } from "react-icons/si";
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import "./footer.css";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="logo-footer">
            <SiDatabricks className="icon" />
            <h2>Secured.</h2>
          </div>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navigation</h3>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/security'>Security</Link></p>
            <p><Link to='/recovery'>Recovery</Link></p>
            <p><Link to='/cloud'>Cloud</Link></p>
            <p><Link to='/contact'>Contact</Link></p>
          </div>
          <div className="col">
            <h3>My Account</h3>
            <p>Login</p>
            <p>My Data</p>
            <p><Link to='/cloud'>Cloud Security</Link> </p>
            <p>Importance</p>
          </div>
          <div className="col">
            <h3>Information</h3>
            <p>Membership</p>
            <p><Link to='/contact'>Contact Us</Link></p>
            <p><Link to='/security'>Data Security</Link></p>
            <p>Cloud Protocol</p>
            <p>Security Roles</p>
          </div>
          <div className="col">
            <h3>Legal</h3>
            <p>Policies</p>
            <p>Term & Conditions</p>
            <p><Link to='/security'>Securities</Link></p>
          </div>
          <form>
            <h3>Subscribe</h3>
            <input type="email" placeholder="Enter your email" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
              <FiGithub className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
