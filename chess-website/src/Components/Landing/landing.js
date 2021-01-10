import React from 'react'
import './landing.css'
import { Button } from '../Button/Button';
import Background from '../../Images/landing-chess.png'

function Landing () {
    return (
        <div className="contain" id="landing">
            <div className="App" style={{backgroundImage: `url(${Background})`}}>
                <div className="button-join">
                    <Button buttonStyle='btn--large'>Join Now</Button>
                </div>
                <div className="App-content">
                    <h2>Welcome to</h2>
                    <h1 className="Wci-chess">WCI CHESS</h1>
                </div>
            </div>
        </div>
        
    )
}

export default Landing