import React,{useState} from "react";
import logo from '../images/wally_logo.png'
import './navbar.css'
import Timer from "./Timer";

const Navbar = ({resetGame,hasStart,itemList}) =>{
    const [open, toggleOpen] = useState(false);

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
            <div>
                <button className='dropdown-btn' onClick={(e)=>{toggleOpen(!open)}}>
                    {show.length}
                </button>
                {open && <ul>
                    {show}
                        </ul>}

            </div>

        </nav>
    )

}

export default Navbar;