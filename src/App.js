import {useState} from "react";
import image from './images/beach-waldo.jpg';
const App=() =>{
  const [item,changeItem] =useState(0)

  return (
    <div className="App">
      <img src={image} alt=""/>


    </div>
  );
}

export default App;
