import React from 'react';
import './App.css'; // Import the app.css file to apply the styles

const ConfirmationPage = () => {
  return (
    <div className="confirmation-background">
      <div className="confirmation-container">
        <h1 className="confirmation-heading">Thank You!</h1>
        <p className="confirmation-paragraph">Your maintenance request form has been submitted successfully.</p>
        <p className="confirmation-paragraph">We'll review your request and get back to you soon.</p>
      
        <button className="confirmation-button" onClick={() => window.open("https://thehrdc.org/housing/")}>Visit HRDC Website</button>
        <p className="confirmation-paragraph">You can close this tab.</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;