import React from 'react';

// Component for rendering confirmation message after successful form submission
const ConfirmationPage = () => {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.paragraph}>Your maintenance request form has been submitted successfully.</p>
        <p style={styles.paragraph}>We'll review your request and get back to you soon.</p>
      </div>
      <a href="https://thehrdc.org/housing/" target="_blank" rel="noopener noreferrer" className="help-link">HRDC Website</a>

    </div>
  );
};


const styles = {
  background: {
    background: 'linear-gradient(135deg, #2ecc71, #27ae60)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'bgAnimation 20s ease infinite',
  },
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #2ecc71',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#555',
  },
  '@keyframes bgAnimation': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  },
};

export default ConfirmationPage;
