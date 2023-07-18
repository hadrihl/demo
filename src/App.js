import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import CarsComponent from './components/CarsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Router>
          <Routes>
            <Route path="/" element={<CarsComponent />} />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
