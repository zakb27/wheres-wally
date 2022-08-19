import React,{useState,useEffect} from "react";
import {db,collection, query, getDocs, orderBy, limit} from '../firebase/fire'
import './highscore.css'

const HighScore = ({name,time,handleRestart}) =>{


    const getHighs = async() => {
        const q = query(collection(db, 'beach_times'), orderBy('time','asc'),limit(10));

        const querySnapshot = await getDocs(q);
        let item=[]

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            item.push({
                'id':doc.id,
                "name":doc.data().name ,
                "time":doc.data().time,
            })
        });


        return item;

    }




    return <div className="highscore_container">
        <div className="highscore_card">
            <div className='time_container'>
            <ul>
                {getHighs.map((item)=>{
                    return(<li key={item.id}>name:{item.name} time:</li>)
                })}
            </ul>
            </div>
        </div>
    </div>
}

export default HighScore;