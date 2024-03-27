import React from 'react';

const ConfirmationPage = () => {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.paragraph}>Your maintenance request form has been submitted successfully.</p>
        <p style={styles.paragraph}>We'll review your request and get back to you soon.</p>
      
        <button style={styles.button} onClick={() => window.open("https://thehrdc.org/housing/")}>Visit HRDC Website</button>
        <p style={styles.paragraph}>You can close this tab.</p>
      </div>
    </div>
  );
};

const styles = {
  background: {
    background: '#fff', // Match background color from App.css
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', 
  },
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #008000', // Match border color from App.css
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    maxWidth: '80%',
    backgroundColor: '#fff', // Set background color to white
    maxHeight: '80vh',
    overflow: 'auto',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#107178', // Match heading color from App.css
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#107178', // Match paragraph color from App.css
  },
  button: {
    backgroundColor: '#107178', // Set button background color to match paragraph color
    color: '#fff', // Set button text color to white
    padding: '10px 20px',
    borderRadius: '5px',
    border: '2px solid #107178', // Match button border color from App.css
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Add color transition
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '20px',
  },
};

export default ConfirmationPage;