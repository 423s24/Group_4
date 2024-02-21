import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import LandingPage from './LandingPage';
import ConfirmationPage from './ConfirmationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;