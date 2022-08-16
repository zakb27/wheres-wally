import React from "react";
import './render.css'
const Render = ({image}) =>{

    const drop =(event)=>{
        let wally={x:1857,y:747}
        event.preventDefault();
        const { pageX: x, pageY: y } = event;

        console.log(x);
        if(Math.abs(wally.x-x)<=50 && Math.abs(wally.y-y)<=50){
            alert('wally found')
        }




    }

    return(
        <div className="game_container" onClick={drop}>
            <div className="game_image">
                <img src={image} alt="Wally image"/>
            </div>
        </div>

    )
}

export default Render;