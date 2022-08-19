import React,{useState} from "react";
import image from './images/beach-waldo.jpg';
import Render from './components/Render'
import Carousel from './components/Carousel'
import Navbar from "./components/Navbar";
import HighScore from "./components/HighScore";
import {wallyList} from './utils/wallyList'

import './App.css'
const App=() =>{
    const [currentGame,changeGame] =useState(wallyList[0]);
    const [gameStart, toggleStart] = useState(false);
    const[highScoreShow,toggleScore] = useState(false);
    const [time, setTime] = useState({ start: 0, end: 0 });

    const startGame = (image)=>{
        changeGame(image);
        setTime({ ...time, start: Date.now() });
        toggleStart(true);
    }

    const resetGame = () =>{
        setTime({ start: 0, end: 0 });
        toggleStart(false);
    }

    const handleWin = () =>{
        if(gameStart){
            console.log('Game won');
            setTime({ ...time, end: Date.now() });
            toggleStart(false);
            toggleScore(true);
            changeGame(wallyList[0]);
        }
    }

    const foundOne = (change) =>{
        const test =({
            ...currentGame,
            itemList: currentGame.itemList.map((item)=>{
                if(item.id===change.id){
                    return{...item,found:true};
                }else{
                    return item;
                }
        })
    });
        changeGame(test);
    };


    return (
        <div className="App">
            <Navbar resetGame={resetGame} hasStart={gameStart} itemList={currentGame.itemList}/>
            {gameStart && <Render image={currentGame} itemList={currentGame.itemList} handleWin={handleWin} foundOne={foundOne}/>}

            {(!gameStart) &&(
                <div>
            {highScoreShow ?(
                <HighScore name={currentGame.id} time={time} handleRestart={resetGame} />
                ):(
                    <Carousel wallyList ={wallyList} startGame={startGame}/>)}
                </div>
           )
                }
        </div>
    );
}

export default App;
