import React from "react";
import logo from '../images/wally_logo.png'
import './navbar.css'
import Timer from "./Timer";

const Navbar = ({resetGame,hasStart,itemList}) =>{
    const show = itemList.filter((item) => !item.found).map((item) => (
        <li key={item.id}
            className='remaining'
        >
            <img src={item.image} alt={item.name}/>
            {item.name}
        </li>
    ));



    return(
        <nav>
            <img onClick={resetGame} src={logo} alt=""/>
            <Timer hasStart={hasStart}/>
            <div>{show.length}
                <ul>
                    {show}
                </ul>
            </div>

        </nav>
    )

}

export default Navbar;