import React from 'react';
import './404Error.css'; // Create a separate CSS file for styling

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">
        <span className="first">4</span>
        <span className="second">0</span>
        <span className="third">4</span>
        <span className="error">ERROR</span>
      </h1>
      <h2 className="error-title">
        <span className="ohno"> OH NO!</span> <span className="error-subtitle">But that’s okay!</span>
      </h2>
      <p className="error-message">Access denied unauthorized user</p>
      <button className="error-button" onClick={() => window.location.href = '/'}>
        Back to home
      </button>
    </div>
  );
};

export default Error404;
