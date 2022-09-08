import React,{useState,useRef,useEffect} from "react";
import {db,doc,getDoc} from '../firebase/fire'
import './render.css'
import Dropdown from "./Dropdown";
const Render = ({image,itemList,handleWin,foundOne}) =>{

    const [menuOpen, toggleMenuOpen] = useState(false);
    const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 });
    const imgRef = useRef();

    const drop =(event)=>{
        event.preventDefault();
        const { pageX: x, pageY: y } = event;
        setMenuCoords({ x, y });
        toggleMenuOpen(!menuOpen);
    }

    useEffect(
        ()=>{
            console.log('i am here');
            const win = itemList.every((item)=> item.found);
            if(win){
                handleWin();
            }
        },[itemList,handleWin]
    );

    const handleDropdown = async (item, x, y)=>{
        const width = imgRef.current.scrollWidth;
        const height = imgRef.current.scrollHeight;

        const relX = x / width;
        const relY = (y-60)/height;
        console.log('width is : '+relX.toString())
        console.log('height is : '+relY.toString())

        const coords_ref = doc(db, "coords", item.id);
        const docSnap = await getDoc(coords_ref);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

        if (Math.abs(docSnap.data().relX-relX)<0.02&&
            Math.abs(docSnap.data().relY-relY)<0.04){
            alert(item.name + " has been found");
            foundOne(item);

        }

        toggleMenuOpen(!menuOpen);
    }
    return(
        <div className="game_container" onClick={drop} ref={imgRef}>
            <div className="game_image"  >
                {menuOpen && (
                    <Dropdown itemList={itemList}
                              x={menuCoords.x}
                              y={menuCoords.y}
                              handleDropdown={handleDropdown}
                              handleWin={handleWin}
                    />
                )}
                <img src={image.image} alt="Wally image"/>
            </div>
        </div>

    )
}

export default Render;