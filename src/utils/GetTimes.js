import React,{useState,useEffect} from "react";
import {db,collection, query, getDocs, orderBy, limit} from '../firebase/fire'

const GetTimes = (name)=>{
    const [docs, setDocs] = useState(null);

    useEffect( () => {

        const getHighs = async() => {
        const q = query(collection(db, name), orderBy('time','asc'),limit(10));

        const querySnapshot = await getDocs(q);
        let item=[]

        querySnapshot.forEach((doc) => {
            item.push({
                'id':doc.id,
                "name":doc.data().name ,
                "time":doc.data().time,
            })
        });

        setDocs(item)
        return item;

    }

    return () => getHighs();
        },
        [name]
    );

    return [docs];
}

export default GetTimes;