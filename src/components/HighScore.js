import React,{useState,useEffect} from "react";
import './highscore.css'
import GetTimes from '../utils/GetTimes'
import {formatTime} from "../utils/formatTime";
import {AddTime} from "../utils/AddTime";
const HighScore = ({name,time,handleRestart}) =>{
    const [scores] = GetTimes(name+'_times')
    const [user,setUser] = useState('')
    const scoresList =
        scores !== null &&
        scores.map((score) => (
            <li key={score.id}>
                <span className='name'>{score.name.toUpperCase()}</span> <span className='time'>{formatTime(score.time) }</span>
                <br/>
            </li>
        ));

    const handleChange=(event)=>{
        setUser(event.target.value)
        event.preventDefault();
    }

    const submitScore = async(e) =>{
        e.preventDefault();
        await AddTime({user},time,name+'_times');
        setUser('')
    }



    return <div className="highscore_container">
        <div className="highscore_card">
            <div className='time_container'>
                <h1>High Scores!</h1>
                <ul>
                    {scoresList}
                </ul>

                <div className="buttons">


                    <form onSubmit={submitScore}>
                        <label >Name: </label>
                        <input type="text" name='name'maxlength="3" minLength='2' value={user} onChange={(e)=>{
                            handleChange(e)
                        }}/>

                        <input type="submit" value='Submit'/>
                    </form>
                    <button onClick={handleRestart}>Restart</button>
                </div>

            </div>

        </div>
    </div>
}

export default HighScore;