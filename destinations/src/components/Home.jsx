import React, { useEffect, useState } from "react";
import AddDestination from "./AddDestination";
import { useNavigate } from 'react-router-dom';
import { viewDestination } from "../Services/locService";

const Home=()=>{
    const navigate=useNavigate();
    const [toggle,setToggle] =useState(false);
    const[ratedLoc,setRatedLoc]=useState([]);
    const [searchTerm,setSearchTerm] =useState("");
    const[searchedLoc,setsearchedLoc]=useState([]);

    useEffect(()=>{
        const dests=viewDestination();
        const ratlocs=dests.filter(dest=>dest.rating>=5);
        setRatedLoc(ratlocs);
    },[toggle])

    useEffect(()=>{
        initSearch(searchTerm);
    },[searchTerm])

    const addDest=()=>{
        console.log("clicked!!");
        setToggle(!toggle);//added new
        navigate('/AddDestination');
    }

    const seeDest=()=>{
        navigate('/viewDestn')
    }


    const initSearch=(searchTerm)=>{
            const dests=viewDestination();
            let inclDest=dests.filter(d=>d.location.includes(searchTerm));
            console.log("the included dests: ",inclDest);
            setsearchedLoc(inclDest);
            console.log("the searched loc: ",searchedLoc);
    }
    
    return(
        <div>
            <h1>Welcome To Destination Selections!!!</h1>

            {/* searchBar */}
            <section>
                <div>
                    <input type="text" 
                    placeholder="search your Destination"
                    name="searchTerm"
                    value={searchTerm}
                    onChange={(e)=>{setSearchTerm(e.target.value)}}
                    />
                    <button onClick={()=>initSearch(searchTerm)}>Search</button>
                    {searchTerm? (<ul>
                        {searchedLoc.map(dest=>(
                            <li key={dest.id}>
                                <h3>{dest.location}</h3>
                                No_Of_visits: {dest.no_of_visit}<br/>
                                Last visit: {dest.last_visit}<br/>
                                Rating :{dest.rating}<br/>
                            </li>
                        ))}
                    </ul>):<></>}
                </div>
            </section>

            <button onClick={addDest}>ADD</button>
            <button onClick={seeDest}>VIEW DESTINATIONS</button>
            <h3>Most Rated destinations!!</h3>
            <ul>
            {
                ratedLoc.length==0?<p>coming Soon!!</p>:
                ratedLoc.map(dest=>(
                <li key={dest.id}>
                <h3>{dest.location}</h3>
                No_Of_visits: {dest.no_of_visit}<br/>
                Last visit: {dest.last_visit}<br/>
                Rating :{dest.rating}<br/>
            </li>
                ))
            }
            </ul>
        </div>
    );
}
export default Home;