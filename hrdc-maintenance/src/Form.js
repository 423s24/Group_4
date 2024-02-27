import React, { useState } from 'react';
import LandingPage from './LandingPage';
import ConfirmationPage from './ConfirmationPage';
import emailjs from '@emailjs/browser';

// Form component that handles form submission and conditional rendering
const Form = () => {
  // State to track whether the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const serviceId = 'service_ph5mhet';
    const templateId = 'template_50urqwe';
    const publicKey1 = 'vgmAdf6X-pKROAEsk';
  
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    };
  
    // Sending form data using emailjs library
    emailjs
      .sendForm(serviceId, templateId, event.target, {
        publicKey: publicKey1,
        name: formData.name,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true); // Set submitted to true when the form is successfully submitted
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
    event.target.reset();
  };

  // Conditional rendering based on form submission status
  return (
    <div className="form-container">
      {submitted ? (
        <ConfirmationPage />
      ) : (
        <>
          <LandingPage />
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="form">
            {/* Form fields */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                placeholder="Your message"
                name="message"
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;