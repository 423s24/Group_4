import React from 'react';

const ConfirmationPage = () => {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.paragraph}>Your maintenance request form has been submitted successfully.</p>
        <p style={styles.paragraph}>We'll review your request and get back to you soon.</p>
        <button style={styles.button} onClick={() => window.open("https://thehrdc.org/housing/", "_blank")}>Visit HRDC Website</button>
      </div>
    </div>
  );
};

const styles = {
  background: {
    background: 'white',
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
    border: '2px solid #2ecc71',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    maxWidth: '80%',
    backgroundColor: '#fff',
    maxHeight: '80vh',
    overflow: 'auto',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#107178',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#107178',
  },
  button: {
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '20px',
  },
};

export default ConfirmationPage;