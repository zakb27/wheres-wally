import React from "react";

const Render = ({image}) =>{

    return(
        <div className="game_container">
            <div className="game_image">
                <img src={image} alt="Wally image"/>
            </div>
        </div>

    )
}

export default Render;