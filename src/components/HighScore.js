import React,{useState,useEffect} from "react";
import {db,collection,addDoc, query, getDocs, orderBy, limit} from '../firebase/fire'
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
                {score.name.toUpperCase()} {formatTime(score.time)}
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
                <ul>
                    {scoresList}
                </ul>
            </div>
            <div className="buttons">
                <button onClick={handleRestart}>Restart</button>

                <form onSubmit={submitScore}>
                    <label>Name: </label>
                    <input type="text" name='name' value={user} onChange={(e)=>{
                        handleChange(e)
                    }}/>
                    <input type="submit" value='submit'/>
                </form>
            </div>
        </div>
    </div>
}

export default HighScore;