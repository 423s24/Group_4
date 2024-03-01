import React from 'react';
import emailjs from '@emailjs/browser';

const Form = ({ history }) => {
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
          console.log('SUCCESS');
          history.push('/confirmation');
        },
        (error) => {
          console.log('FAILED', error.text);
        },
      );
  
    event.target.reset();
  };

  return (
    <div className="form-container">
      <h2>Let Us Know About Your Issue</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Preferred Email:</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Maintenance Request:</label>
          <textarea
            id="message"
            placeholder='Your message'
            name="message"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="options">Select Your Property:</label>
          <select name="options" id="options" className="form-control">
            <option value="Option 1">Property 1</option>
            <option value="Option 2">Property 2</option>
            <option value="Option 3">Property 3</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
