import React, { useEffect } from 'react';
import './App.css'; // Import the app.css file to apply the styles


const ConfirmationPage = () => {

  useEffect(() => {
    console.log("LOADING BAR...")
    var progressBar = document.getElementById("progress");
    var width = 0;
    var interval = setInterval(function() {
      if (width >= 115) {
        showConfrimationText()
        clearInterval(interval);
      } else {
        width += 10;
        progressBar.style.width = width + '%';
      }
    }, 200); // Adjust this value to control the animation speed
  });

  const showConfrimationText = () => {
    var progressBar = document.getElementById("loadingBarContainer");
    progressBar.style.display = "none";
    var confrimationTextContainer = document.getElementById("confrimationTextContainer");
    confrimationTextContainer.style.display = "block";

  }


  return (
    <div className="confirmation-background">
      <div className="confirmation-container" id="confrimationTextContainer" style={{display: 'none'}}>
        <h1 className="confirmation-heading">Thank You!</h1>
        <p className="confirmation-paragraph">Your maintenance request form has been submitted successfully.</p>
        <p className="confirmation-paragraph">We'll review your request and get back to you soon.</p>
      
        <button className="confirmation-button" onClick={() => window.open("https://thehrdc.org/housing/")}>Visit HRDC Website</button>
        <p className="confirmation-paragraph">You can close this tab.</p>
        </div>
        <div id="loadingBarContainer">
          <h2 className="confirmation-paragraph">Processing Your Maintenance Request...</h2>
          <div id="progress-bar">
            <div id="progress"></div>
          </div>
        </div>
    </div>
  );
};

export default ConfirmationPage;