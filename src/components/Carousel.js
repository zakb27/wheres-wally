import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './carousel.css'

const Carousel = ({wallyList,startGame,itemList}) =>{
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };






    const item = wallyList.map((image)=>(
        <div className="card">
            <div className="card_container">
                <img src={image.image} alt="Wally game"/>
                <div className="text_container">
                <h1>{image.name}</h1>
                <ul>
                    {itemList.map((image,index)=> {
                        return(
                            <li key={index}>
                                <img src={image.image} alt="Item to be found"/>
                                <p>{image.name}</p>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => startGame(image)}>Start</button>
                </div>
            </div>
        </div>
        )

    )

    return(<div className='carousel_container'>
        <AliceCarousel
            infinite
            mouseTracking

            keyboardNavigation
            items={item}
            responsive={responsive}

            />
    </div>)
}

export default Carousel;