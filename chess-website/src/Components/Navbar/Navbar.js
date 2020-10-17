import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../Images/logo.png'
import './Navbar.css'
import {Button} from '../Button/Button'

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 1006) {
        setButton(false)
      } else {
        setButton(true);
      }
    }

    
    
    useEffect(() => {
      showButton()
    }, [])

    window.addEventListener('resize', showButton) // Window is a known JS object

    return (
    <>
      <nav className="navbar">
          <div className="navbar-container">
            {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} alt="Logo" className="navbar-image"></img>
                <div className="navbar-title">Waterloo C.I Chess Club</div>
            </Link> */}

            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={Logo} alt="Logo" className="navbar-image"/>
                <div className='navbar-title'>Vikings Chess</div>
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Events" className='nav-links' onClick={closeMobileMenu}>
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className='nav-links' onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to='/Join Us' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Join Now
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Join Now</Button>}
          </div>
      </nav>
    </>
    )
}

export default Navbar