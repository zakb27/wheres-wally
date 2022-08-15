import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image from '../images/beach-waldo.jpg'
import image2 from '../images/snow-waldo.jpg'
import './carousel.css'
const Carousel = ({startGame}) =>{
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };

    let item =[];
    item.push(
        <div className='card'>
            <div className="card_container">
                <img src={image} alt=""/>
                <h1>Welcome to beach wally</h1>
                <button onClick={() => startGame(image)}>Start</button>
            </div>

        </div>
    )
    item.push(
        <div className='card'>
            <div className="card_container">
                <img src={image2} alt=""/>
                <h1>Welcome to snow wally</h1>
            </div>
            <button onClick={() => startGame(image2)}>Start</button>

        </div>
    )

    return(<div className='carousel_container'>
        <AliceCarousel
            infinite
            mouseTracking

            items={item}
            responsive={responsive}

            />
    </div>)
}

export default Carousel;