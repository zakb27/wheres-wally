import React,{useEffect} from "react";
import {db,collection,setDoc,doc,addDoc} from '../firebase/fire'


export const AddTime = async (user, time, docName)=>{

    const newTime = (time.end-time.start)/1000;
    try {
        const docRef = await addDoc(collection(db, docName), {
            name: user.user,
            time: newTime,
        });
        console.log(docRef.id)
    }
    catch (e) {
        console.error(e);
    }


}
