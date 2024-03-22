import React, { useState } from 'react';
import LandingPage from './LandingPage';
import ConfirmationPage from './ConfirmationPage';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
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
      emailjs
      .sendForm(serviceId, templateId, event.target, {
        publicKey: publicKey1,
        name: formData.name,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  
    event.target.reset();
  };

  return (
    <div className="form-container">
      {submitted ? (
        <ConfirmationPage />
      ) : (
        <>
          <LandingPage />
          <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label class="field-title" htmlFor="email">Contact Info:</label>
                <input type="text" id="inputBox" placeholder="Phone Number or Email Address" class="form-control"/>
              </div>
              <div className="form-group">
                <label class="field-title" htmlFor="name">Name:</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label class="field-title" htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  name="message"
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="options">Select Your HRDC Property:</label>
                <select name="options" id="options" className="form-control">
                <option value="Option 1">Select A Property</option>
                  <option value="Option 2">32. S Tracy (Downtown Office) </option>
                  <option value="Option 3">Market Place</option>
                  <option value="Option 4">Fork and Spoon</option>
                  <option value="Option 5">Gallatin Valley Food Bank</option>
                  <option value="Option 6">Warming Center Bozeman</option>
                  <option value="Option 7">Warming Center Livingston</option>
                  <option value="Option 8">Bozeman Head Start Center</option>
                  <option value="Option 9">Belgrade Head Start Center</option>
                  <option value="Option 10">Livingston Head Start Center</option>
                  <option value="Option 11">Livingston Office</option>

                </select>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
            <hr></hr>
          <a href="https://github.com/423s24/Group_4/blob/main/ESOF%20423%20User%20Documentation.pdf" target="_blank" rel="noopener noreferrer" className="help-link">Need Help Filling it Out?</a>
        </>
      )}
    </div>
  );
};

export default Form;
