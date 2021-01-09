import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Carousel from './Components/Carousel/Carousel'
import Background from './Images/landing-chess.png'
import { Button } from './Components/Button/Button';
import Cards from './Components/Card/Cards'


function App() {
  return (
    <div className="body">
      <>
        <Router>
          <Navbar />
            <div className='contain'>
              <div className="App" style={{backgroundImage: `url(${Background})`}}>
                <div className="button-join">
                  <Button buttonStyle='btn--primary'>Join Now</Button>
                </div>
                <div className="App-content">
                  <h2>Welcome to</h2>
                  <h1 className="Wci-chess">WCI CHESS</h1>
                </div>
              </div>
              <div className="About-us-container">
                <div className="About-us-carousel">
                  <Carousel/>
                </div>
                <div className="About-us-text">
                  <h1 className="About-us-heading"><span className="headline">About Us</span></h1>
                  <div className="About-us-content-div">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id suscipit ipsum. 
                    Integer commodo, lorem ut tempor molestie, quam nulla tristique purus, id commodo nisl mi a arcu. 
                    Quisque ultricies egestas sem vitae vestibulum. Etiam sem nunc, maximus vitae erat vitae, tristique 
                    tempor elit. Nulla ligula massa, interdum non massa id, efficitur tristique velit. 
                    Nulla elementum, velit ut elementum laoreet, elit augue blandit mi, quis commodo 
                    nulla felis vel ligula. Phasellus volutpat diam id molestie imperdiet. Nullam vitae congue turpis, 
                    finibus aliquet eros. Vestibulum varius ac ex non mollis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-component-div">
                <Cards/>
              </div>
            </div>
          <Switch>
            <Route path='/' exact />
          </Switch>
        </Router>
      </>
      
    </div>
    
  );
}

export default App;
