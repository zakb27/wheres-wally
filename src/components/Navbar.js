import React, {useRef,useEffect, useState} from "react";
import logo from '../images/wally_logo.png'
import './navbar.css'
import Timer from "./Timer";

const Navbar = ({resetGame,hasStart,itemList}) =>{
    const [open, toggleOpen] = useState(false);
    const navRef = useRef();
    const show = itemList.filter((item) => !item.found).map((item) => (
        <li key={item.id}
            className='remaining'
        >
            <img src={item.image} alt={item.name}/>
              {item.name}
        </li>
    ));

    useEffect(()=>{
        switch(show.length){
            case(3):
                navRef.current.style.backgroundColor='#e84040'
                break
            case(2):
                navRef.current.style.backgroundColor='#e77d16'
                break
            case(1):
                navRef.current.style.backgroundColor='#64e840'
        }
    },[itemList]);

    return(
        
        <nav>
            <img onClick={resetGame} src={logo} alt=""/>

                <Timer hasStart={hasStart}/>

            <div className={'dropdown_div'}>
                <button className='dropdown-btn' ref={navRef} onClick={(e) => {
                    toggleOpen(!open)
                }}>
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