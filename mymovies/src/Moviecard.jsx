import React from 'react';

const Moviecard=({mov})=>{
    return(
        <div className='movie'>
            <p>{mov.Year}</p>
            <img src={mov.Poster}/>
            <span>{mov.Type}</span>
            <h3>{mov.Title}</h3>
        </div>
    )
}
export default Moviecard;