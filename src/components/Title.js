import React from "react";
import logo from "../todologo.jpg";

const Title = () => {
  const containerStyle = {
    padding: "10px",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const logoStyle = {
    width: "60px",
    height: "60px",
    marginRight: "10px",
  };

  const headingStyle = {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "48px",
    letterSpacing: "-0.2px",
    /* fontFamily: "Merriweather", serif; */
  };

  const textStyle = {
    maxWidth: "50rem",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px",
    color: "#ffffff",
    fontSize: "18px",
    letterSpacing: "1px",
    wordSpacing: "2px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <img src={logo} alt="Logo" className="logo" style={logoStyle} />
        <h2 style={headingStyle}>Todo Matic</h2>
      </div>
      <p style={textStyle}>
        Introducing TodoMatic: an intuitive and stylish task management
        solution. Stay organized, boost productivity, and prioritize tasks with
        ease. Experience the power of modern design and seamless functionality.
      </p>
    </div>
  );
};

export default Title;
