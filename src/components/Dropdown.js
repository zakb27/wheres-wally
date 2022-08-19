import React,{useEffect} from "react";
import './dropdown.css'
function Dropdown({itemList,x,y,handleDropdown,handleWin}){

    const show = itemList.filter((item) => !item.found).map((item) => (
        <li key={item.id}
            className='finders'
            onClick={(e) => {
                e.stopPropagation();
                handleDropdown(item, x, y);
            }}
        >
            {item.name}
        </li>

    ));




    return(
        <div className="dropdown_container" style={{ top: `calc(${y}px)`, left: `${x}px` }}>
            <ul className='dropdown'>{show}</ul>
        </div>
    );
}

export default Dropdown;