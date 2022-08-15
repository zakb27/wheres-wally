import {useState} from "react";
import image from './images/beach-waldo.jpg';
import Carousel from './components/Carousel'
const App=() =>{
  const [item,changeItem] =useState(0)

  return (
    <div className="App">
      <Carousel />

    </div>
  );
}

export default App;
