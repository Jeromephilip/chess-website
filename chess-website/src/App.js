import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Carousel from './Components/Carousel/Carousel'
import Background from './Images/landing-chess.png'
import { Button } from './Components/Button/Button';


function App() {
  return (
    <div className="container">
      <>
        <Router>
          <Navbar />
          <div className="App" style={{backgroundImage: `url(${Background})`}}>
            <div className="button-join">
              <Button buttonStyle='btn--primary'>Join Now</Button>
            </div>
            <div className="App-content">
              <h2>Welcome to</h2>
              <h1 className="Wci-chess">WCI CHESS</h1>
            </div>
          </div> 
          <Switch>
            <Route path='/' exact />
          </Switch>
        </Router>
        <div>
          hello
        </div>
      </>
      
    </div>
    
  );
}

export default App;
