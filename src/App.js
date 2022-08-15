import React,{useState} from "react";
import image from './images/beach-waldo.jpg';
import Render from './components/Render'
import Carousel from './components/Carousel'
import Navbar from "./components/Navbar";
import './App.css'
const App=() =>{
    const [currentGame,changeGame] =useState(null);
    const [gameStart, toggleStart] = useState(false);
    const startGame = (image)=>{
        changeGame(image);
        toggleStart(true);
    }

    const resetGame = () =>{
        toggleStart(false);
    }

    return (
        <div className="App">
            <Navbar resetGame={resetGame} />
            {gameStart && <Render image={currentGame}/>}

            {(!gameStart) &&
            <Carousel startGame={startGame}/>
                }
        </div>
    );
}

export default App;
