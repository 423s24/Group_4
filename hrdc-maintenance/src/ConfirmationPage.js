import React, { useEffect } from 'react';
import './ConfirmationPage.css'; // Import the CSS file for ConfirmationPage styling

// Component for rendering confirmation message after successful form submission
const ConfirmationPage = () => {
  useEffect(() => {
    // Apply background color directly to the body element
    document.body.style.backgroundColor = '#003e52';

    // Clean up effect
    return () => {
      document.body.style.backgroundColor = ''; // Reset background color
    };
  }, []);

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h1>Thank You!</h1>
        <p>Your maintenance request form has been submitted successfully.</p>
        <p>We'll review your request and get back to you soon.</p>
        <p>An email confirmation will be sent to you shortly.</p>
      </div>
    </div>
  );
};

export default ConfirmationPage;