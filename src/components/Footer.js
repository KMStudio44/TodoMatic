import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    textAlign: "center",
    padding: "10px",
    /* backgroundColor: '#222222', */
    color: "#ffffff",
    fontSize: "14px",
    opacity: 0.8,
  };

  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
  };
  return (
    <footer style={footerStyle}>
      &copy; {currentYear}{" "}
      <a
        href="https://kmaar.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Abhishek Kumar
      </a>
      . All rights reserved. | Powered by{" "}
      <a
        href="https://kmstudio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        KMaar Miscellaneous Studio
      </a>
    </footer>
  );
};

export default Footer;
