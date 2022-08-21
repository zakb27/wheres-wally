import React,{useEffect} from "react";
import {db,setDoc,doc} from '../firebase/fire'


const addTime = ({name,time,docName})=>{

    useEffect(() =>{
        const addItem = async()=>{
            await setDoc(doc(db,docName),{
                name:name,
                time:time
            });
        }

        return()=> addItem();
    },[name]);

}

export default addTime;