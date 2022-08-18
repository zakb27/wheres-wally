import React,{useState} from "react";
import './dropdown.css'
const Dropdown = ({itemList,x,y,handleDropdown}) =>{

    const show = itemList.filter((item) => !item.found).map((item) => (
        <li key={item.id}
            className='finders'
            onClick={(e) => {
                e.stopPropagation();
                handleDropdown(item, x, y);
            }}
        >
            {item.name}</li>

    ));
    console.log(show);
    return(
        <div className="dropdown_container" style={{ top: `calc(${y}px)`, left: `${x}px` }}>
            <ul className='dropdown'>{show}</ul>
</div>
    );
}

export default Dropdown