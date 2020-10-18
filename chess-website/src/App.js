import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Carousel from './Components/Carousel/Carousel'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          {/* <Carousel/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
