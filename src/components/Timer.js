import React, { Fragment, useEffect, useState } from 'react';
import {formatTime} from "../utils/formatTime";
import './timer.css'
const Timer = ({hasStart}) =>{
    const [timer, setTimer] = useState(0);
    useEffect(()=>{
        let time;

        if(hasStart){
            time = setInterval(()=>{setTimer((timer)=> timer+1);},1000);
            }
        else if(!hasStart){
            clearInterval(time);
            setTimer(0);
        }
        return () => {
            clearInterval(time);
        };
        },[[hasStart]]
    )

    return( <p className={'timer'}>{formatTime(timer)}</p>);
}

export default Timer;