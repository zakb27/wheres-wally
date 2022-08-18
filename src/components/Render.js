import React,{useState} from "react";
import './render.css'
import Dropdown from "./Dropdown";
const Render = ({image}) =>{

    const [menuOpen, toggleMenuOpen] = useState(false);
    const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });


    const drop =(event)=>{
        event.preventDefault();
        const { pageX: x, pageY: y } = event;
        setMenuCoords({ x, y });
        toggleMenuOpen(!menuOpen);
        console.log(menuOpen);
    }
    const handleDropdown = (item, x, y)=>{
        alert('item found' + item.name + 'At' +x.toString()+y.toString())
        toggleMenuOpen(!menuOpen);
    }
    return(
        <div className="game_container" onClick={drop}>
            <div className="game_image">
                {menuOpen && (
                    <Dropdown itemList={image.itemList}
                              x={menuCoords.x}
                              y={menuCoords.y}
                              handleDropdown={handleDropdown}/>
                )}
                <img src={image.image} alt="Wally image"/>
            </div>
        </div>

    )
}

export default Render;