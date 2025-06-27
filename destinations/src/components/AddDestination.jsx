import React, { useState } from "react";
import {addDestination,viewDestination} from "../Services/locService";
const AddDestination=({id})=>{
    // const destns=viewDestination();//newly added
    // const editLoc=destns.find(d=>d.id===id);
    const [formdata,setFormdata]=useState({
        location:"",
        no_of_visit:"",
        last_visit:"",
        rating:""
    });
    //editLoc?setFormdata(editLoc):setFormdata({location:"",no_of_visit:"",last_visit:"",rating:""});
    const [error,setError]=useState({});
    const validate=()=>{
        const errs={};
        if(!formdata.location){
            errs.location="location required";
        }
        if(!formdata.no_of_visit){
            errs.no_of_visit="number of visit required";
        }
        if(!formdata.rating){
            errs.rating="rating required";
        }
        if(!formdata.last_visit){
            errs.last_visit="last visit required";
        }
        else if(new Date(formdata.last_visit)>new Date()){
            errs.last_visit="no future date possible"
        }
        setError(errs);
        return Object.keys(errs).length===0;

    }
    const handleChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
             console.log(formdata);
            addDestination(formdata);
            let dests=viewDestination();
            console.log("the dets are:",dests);
            alert("submitted!!");
            setFormdata({location:"",no_of_visit:"",last_visit:"",rating:""});
        }  
    }
    return(
        <div>
            <h2>Adding location</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter the location"
                    name="location"
                    value={formdata.location}
                    onChange={handleChange}
                />
                {error&&<div>{error.location}</div>}
                <input
                    type="number"
                    placeholder="enter the no_of_visit"
                    name="no_of_visit"
                    value={formdata.no_of_visit}
                    onChange={handleChange}
                />
                {error&&<div>{error.no_of_visit}</div>}
                <input
                    type="date"
                    placeholder="enter the last_visit"
                    name="last_visit"
                    value={formdata.last_visit}
                    onChange={handleChange}
                />
                {error&&<div>{error.last_visit}</div>}
                <input
                    type="number"
                    placeholder="enter the rating"
                    name="rating"
                    value={formdata.rating}
                    onChange={handleChange}
                />
                {error&&<div>{error.rating}</div>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AddDestination;