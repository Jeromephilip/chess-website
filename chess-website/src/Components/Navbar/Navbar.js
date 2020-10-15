import React, {useState} from 'react'
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
      if(window.innerWidth <= 960) {
        setButton(false)
      } else {
        setButton(true);
      }
    }
    
    window.addEventListener('resize', showButton)

    return (
    <>
      <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            <img src={Logo} alt="Logo" className="navbar-image"></img>
                Waterloo C.I Chess Club
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-bars' : 'fas fa-bars' } />
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
            </ul>
            {button && <Button buttonStyle='btn--outline'>Join Now</Button>}
          </div>
      </nav>
    </>
    )
}

export default Navbar