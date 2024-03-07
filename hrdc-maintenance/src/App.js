import React from 'react';
import './App.css'; // Import the CSS file for App component
import Form from './Form';

// Main App component rendering the Form component
function App() {
  return (
    <div className="App">
      <Form />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="footer-links">
                <li><a href="https://thehrdc.org/privacy-policy/">Privacy Policy</a></li>
                <li><a href="https://thehrdc.org/statement-of-non-discrimination/">Statement of Non-Discrimination</a></li>
                <li><a href="https://thehrdc.org/deia-policy/">Diversity, Equity, Inclusion, and Accessibility Policy</a></li>
                <li>HRDC is a “Nonprofit 501(c)(3) Organization”</li>
              </ul>
              <p>&copy; 2022 HRDC, Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;