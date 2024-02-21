import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
//npm install --save @emailjs/browser

const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const serviceId = 'service_ph5mhet';
    const templateId = 'template_50urqwe';
    const publicKey1 = 'vgmAdf6X-pKROAEsk';
  
    // Capture form data
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    };
  
    // Send form data along with EmailJS
    emailjs
      .sendForm(serviceId, templateId, event.target, {
        publicKey: publicKey1,
        name: formData.name, // Include the name here
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
    // Reset the form after submission
    event.target.reset();
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;

