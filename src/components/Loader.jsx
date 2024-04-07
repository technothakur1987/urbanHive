import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='LoaderPage d-flex justify-content-center align-items-center container-fluid'>
      <div className="spinner-border " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
