import {useState} from "react";
import image from './images/beach-waldo.jpg';
import Render from './components/Render'
import Carousel from './components/Carousel'
const App=() =>{
  const [currentGame,changeGame] =useState(null);
    const startGame = (image)=>{
      changeGame(image);

    }
  return (
    <div className="App">
        <Render image={currentGame}/>
        <Carousel startGame={startGame}/>
    </div>
  );
}

export default App;
