import React, { useState} from 'react';
import { Link, BrowserRouter as Router} from "react-router-dom"
import Button from "./Button"
import "./Navbar.css"
import Dropdown from "./Dropdown"

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
        setDropdown(false)
    } else {
        setDropdown(true)
    }
}
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
        setDropdown(false)
    } else {
        setDropdown(false)
    }
}



    
    return(
        <>
    <nav className="navbar">
        <Link to="/" className="navbar-logo">
            <i class="fas fa-ticket-alt"></i>  INFO-FLIX
        </Link>
        <div className="menu-icon" onClick={handleClick}>
             <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                <Link to="/" className="nav-links" onCLick={closeMobileMenu}>
                    HOME
                </Link>       
            </li>
            <li className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Link to="/categories" className="nav-links" onCLick={closeMobileMenu}>
                    CATEGORIES < i className="fas fa-caret-down" />
                </Link> 
                {dropdown && <Dropdown />}      
            </li>
            <li className="nav-item">
                <Link to="/upcoming" className="nav-links" onCLick={closeMobileMenu}>
                    UPCOMING
                </Link>       
            </li>
            <li className="nav-item">
                <Link to="/toprated" className="nav-links" onCLick={closeMobileMenu}>
                    TOP RATED
                </Link>       
            </li>
            
        </ul>
    </nav>
        </>
    )
}

export default Navbar