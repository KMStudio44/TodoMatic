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

  return (
    <footer style={footerStyle}>
      &copy; {currentYear} Abhishek Kumar. All rights reserved. | Powered by
      KMaar Miscellaneous Studio
    </footer>
  );
};

export default Footer;
