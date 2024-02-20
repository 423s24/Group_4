//import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
//npm install --save @emailjs/browser

const Form = () => {
  // Define state variables for form fields
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // Handle form field changes
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // Handle form submission
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Here you can perform validation or submit data to server

  //   const serviceId = 'service_ph5mhet';
  //   const templateId = 'template_50urqwe';
  //   const publicKey1 = 'vgmAdf6X-pKROAEsk';

  //   emailjs
  //     .sendForm(serviceId, templateId, event.target, {
  //       publicKey: publicKey1,
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  //     event.target.reset()
    
  //   //console.log(formData); // For demonstration purpose, log form data to console
  // };

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
    <div>
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder ="Name"
            name="name"
            //value={formData.name}
            //onChange={handleInputChange}
            //required
          />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            placeholder ="Email"
            name="email"
            //value={formData.name}
            //onChange={handleInputChange}
            //required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder='Your message'
            name="message"
            //value={formData.message}
            //onChange={handleInputChange}
            //required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
