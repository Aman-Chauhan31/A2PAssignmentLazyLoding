import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="bod">
      <div className="loading">
        <div className="circle cyan"></div>
        <div className="circle magenta"></div>
        <div className="circle yellow"></div>
        <p>Connecting to Record...</p>
      </div>
    </div>
  );
};

export default Loader;
