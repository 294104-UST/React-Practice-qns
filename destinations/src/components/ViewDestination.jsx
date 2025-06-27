import React, { useEffect, useState } from "react";
import { viewDestination,deleteDestination } from "../Services/locService";
import { useNavigate } from "react-router-dom";

const ViewDestination=()=>{
    const [dests,setDests]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        setDests(viewDestination());
    },[]);

    //to delete
    const handleDelete= async (id)=>{
        console.log("delete initiated!!");
        deleteDestination(id);
        console.log("after delete: ",viewDestination());
        setDests(viewDestination());
        
    }

    //to edit
    const handleEdit=(id)=>{
        console.log("edit initiated!!");
        navigate('/EditDestination',{state:{id}});
        // navigate(`/EditDestination/${id}`);
        
    }
    return(
        <ul>
        {dests.map(dest=>(
            <li key={dest.id}>
                <h3>{dest.location}</h3>
                No_Of_visits: {dest.no_of_visit}<br/>
                Last visit: {dest.last_visit}<br/>
                Rating :{dest.rating}<br/>
                <button onClick={()=>handleEdit(dest.id)}>Edit</button>
                <button onClick={()=>handleDelete(dest.id)}>Delete</button>
            </li>
        ))}
        </ul>
    );
}
export default ViewDestination;