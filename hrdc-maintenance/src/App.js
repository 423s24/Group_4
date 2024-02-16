import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Form from './Form';

function App() {
  return (
      <div className="App">
        <body>
          <Router>
            <div className="content">
              <Routes>
                <Route path="/" element={<Form />} />
              </Routes>
            </div>
          </Router>
        </body>
      </div>
  );
}

export default App;
