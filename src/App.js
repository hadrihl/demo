import logo from './logo.svg';
import './MyStyle.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/Home";
import CarsComponent from './components/CarsComponent';

function App() {
  return (
    <div className="MyStyle">
      <CarsComponent />
    </div>
  );
}

export default App;
