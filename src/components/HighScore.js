import React,{useState,useEffect} from "react";
import {db,collection, query, getDocs, orderBy, limit} from '../firebase/fire'
import './highscore.css'
import GetTimes from '../utils/GetTimes'
import {formatTime} from "../utils/formatTime";
const HighScore = ({name,time,handleRestart}) =>{

    const [scores] = GetTimes({name}+'_times')

    const scoresList =
        scores !== null &&
        scores.map((score) => (
            <li key={score.id}>
                {score.name.toUpperCase()} {formatTime(score.time)}
            </li>
        ));

    console.log(scoresList);
    return <div className="highscore_container">
        <div className="highscore_card">
            <div className='time_container'>
                <ul>
                    {scoresList}
                </ul>
            </div>
        </div>
    </div>
}

export default HighScore;