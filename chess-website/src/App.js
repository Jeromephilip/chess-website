import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Cards from './Components/Card/Cards'
import About from './Components/AboutUs/about'
import Landing from './Components/Landing/landing'


function App() {
  return (
    <div className="body">
      <Router>
        <Navbar />
        <Landing/>
        <About/>
      </Router>
    </div>
    
  );
}

export default App;
