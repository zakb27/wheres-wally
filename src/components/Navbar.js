import React from "react";
import logo from '../images/wally_logo.png'
import './navbar.css'
const Navbar = ({resetGame}) =>{

    return(
        <nav>
            <img onClick={resetGame} src={logo} alt=""/>
            <p>0:00:00</p>
            <p>3</p>
        </nav>
    )

}

export default Navbar;