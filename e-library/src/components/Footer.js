import React from "react";
import "./Footer.css"; // Optional: for styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} E-Library. All rights reserved.</p>
        <div className="links">
          <a href="/privacy-policy">Privacy Policy</a> | 
          <a href="/terms-of-service">Terms of Service</a> | 
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
