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
      message: event.target.message.value,
      options: event.target.options.value,
      category: event.target.category.value,
      urgency: event.target.urgency.value,
      keyIn: event.target.keyIn.value
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
          <hr></hr>
          <a href="https://github.com/423s24/Group_4/blob/main/ESOF%20423%20User%20Documentation.pdf" target="_blank" rel="noreferrer">
          <button id="user-doc-button" class="submit-btn">Need help filling out this form?</button>
          </a>
          <form onSubmit={handleSubmit} className="form">
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
            <div className="form-group">
              <label htmlFor="options">Select Your HRDC Property:</label>
              <select name="options" id="options" className="form-control">
              <option value="Select A Property">Select A Property</option>
                <option value="32. S Tracy (Bozeman Downtown Office)">32. S Tracy (Downtown Office) </option>
                <option value="Livingston Office">Livingston Office</option>
                <option value="Market Place">Market Place</option>
                <option value="Fork and Spoon">Fork and Spoon</option>
                <option value="Gallatin Valley Food Bank">Gallatin Valley Food Bank</option>
                <option value="Bozeman Head Start Center">Bozeman Head Start Center</option>
                <option value="Belgrade Head Start Center">Belgrade Head Start Center</option>
                <option value="Livingston Head Start Center">Livingston Head Start Center</option>
                <option value="Warming Center Bozeman">Warming Center Bozeman</option>
                <option value="Warming Center Livingston">Warming Center Livingston</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category">Maintenance Category:</label>
              <select name="category" id="category" className="form-control">
                <option value="Select a Category">Select A Category</option>
                <option value="Building (walls, doors, etc.)">Building (walls, doors, etc.) </option>
                <option value="Plumbing (showers, bathrooms, etc.)">Plumbing (showers, bathrooms, etc.)</option>
                <option value="Technology (phone, wifi, etc.)">Technology (phone, wifi, etc.)</option>
                <option value="Appliances (washers, dryers, etc.)">Appliances (washers, dryers, etc.)</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="urgency">Urgency:</label>
              <select name="urgency" id="urgency" className="form-control">
                <option value="Select Urgency">Select Urgency:</option>
                <option value="5 (Very High)">5 (Very High)</option>
                <option value="4 (High)">4 (High)</option>
                <option value="3 (Medium)">3 (Medium)</option>
                <option value="2 (Low)">2 (Low)</option>
                <option value="1 (Very Low)">1 (Very Low)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="keyIn">Permission for maintenance to key into your unit?</label>
              <select name="keyIn" id="keyIn" className="form-control">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="Permission not needed">Permission not needed (For HRDC Facilities)</option>
              </select>
            </div>
            <hr></hr>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
