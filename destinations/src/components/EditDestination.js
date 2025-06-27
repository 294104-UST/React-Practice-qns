import React from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { editDestination,viewDestination } from "../Services/locService";
export const EditDestination=()=>{
    const navigate=useNavigate();
    const location = useLocation();
    const id = location.state?.id;
    //const {id}=useParams();
    console.log("id fetchd is : ",id);
    const dests=viewDestination();
    const editLoc=dests.find(d=>d.id===id);
   //const[location,no_of_visit,last_visit,rating]=editLoc;
    const [formdata,setFormdata]=useState({
            location:editLoc.location,
            no_of_visit:editLoc.no_of_visit,
            last_visit:editLoc.last_visit,
            rating:editLoc.rating
        });
    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
            e.preventDefault();
            editDestination(formdata,id);
            console.log("the updated dests are : ",viewDestination());
            navigate('/');
        }

    return(
        <div>
            <h2>Editing location</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="location"
                    value={formdata.location}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="no_of_visit"
                    value={formdata.no_of_visit}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    name="last_visit"
                    value={formdata.last_visit}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="rating"
                    value={formdata.rating}
                    onChange={handleChange}
                />

                <button type="submit">Update</button>
            </form>
        </div>
    );

}