import React from 'react';
import hrdcLogo from './hrdc-logo.png'; // Import the HRDC logo

// Component for rendering landing page with form instructions
const LandingPage = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', marginRight: '10px' }}>
        <img src={hrdcLogo} alt="HRDC Logo" style={{ height: '75px' }} />
      </div>
      <div style={{ maxWidth: '80%', padding: '10px', margin: '0 auto', marginTop: '0px', marginBottom: '0px', paddingBottom: '-100px'}}>
        <h1 className="landingPageText"> 
          HRDC Maintenance Request Form
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;