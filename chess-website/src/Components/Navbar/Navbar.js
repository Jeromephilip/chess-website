import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import Logo from '../../Images/logo.png'
import './Navbar.css'
import {Button} from '../Button/Button'
import {Link} from "react-scroll"

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
      <nav className="navbarr">
          <div className="navbar-container-div">
          <Link  
                onClick={closeMobileMenu}
                className="navbar-logo" 
                activeClass="active"
                to="landing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}> 
                <img src={Logo} alt="Logo" className="navbar-image"/>
                <div className='navbar-title'>WCI Chess Club</div>
                </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item-ul">
                <Link 
                  className='nav-links-li'
                  onClick={closeMobileMenu}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}> About Us </Link>
              </li>
              <li className="nav-item-ul">
                <Link 
                  className='nav-links-li'
                  onClick={closeMobileMenu}
                  activeClass="active"
                  to="/events"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}> Events </Link>
              </li>
              <li className="nav-item-ul">
                <Link 
                  className='nav-links-li'
                  onClick={closeMobileMenu}
                  activeClass="active"
                  to="/events"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}> Contact Us </Link>
              </li>
              <li>
                {/* Edit this later */}
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