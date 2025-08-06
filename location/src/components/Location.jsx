import React, { useEffect, useState } from "react";

const Location=({locs})=>{
    const [locations,setLocations]=useState(locs);
    const [newLoc,setNewLoc]=useState("");
    const [error,setError]=useState("");

    // useEffect(()=>{
    //     console.log("Locations updated:", locations);
    // },[locations]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(locations.includes(newLoc)){
            setError("Can't add same Location!!");
        }
        else{
             setLocations([...locations,newLoc]);
             setError("");
        }
    }

    const handleDelete=(delLoc)=>{
        let deleted=locations.filter(loc=>loc!=delLoc);
        console.log("alfter deletde locs",deleted);
        setLocations(deleted);
        
    }
    return(
        <>
        <ul>
            {locations.map((loc,id)=>(
                <li 
                key={id}>{loc}
                <button onClick={()=>handleDelete(loc)}>Delete</button>
                </li>
                
            ))}
        </ul>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="newLoc"
                value={newLoc}
                onChange={(e)=>setNewLoc(e.target.value)}
                placeholder="Enter the new location"
            />
            <button type="submit">Add</button>
            {error&&<p>Can't add same Location!!that is {newLoc}</p>}
        </form>
        </>
    );
}
export default Location;



