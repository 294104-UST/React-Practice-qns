import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import searchlogo from './search.svg'

function App() {
  const [movie,setMovie]=useState([]);
  const [search,setSearch]=useState('');
  const api='http://www.omdbapi.com?apikey=b6003d8a'

   const searchMovies=async (search)=>{
      const movie1= await fetch(`${api}&s=${search}`);
      const res= await movie1.json();
        setMovie(res.Search);
      
    }
  
  useEffect(()=>{
    searchMovies(search);
  },[search])

  return (
    <div className='app'>
    <h1>movie pakaalamaa!!</h1>
    <div className='search'>
      <input
        type='text'
        placeholder='search movies'
        name='search'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
      />

      <img src={searchlogo} onClick={()=>{searchMovies(search)}}/>
    </div>
    <div className='container'>
        {movie&&movie.map((mov)=>(<Moviecard mov={mov}/>))}
      </div>
    </div>
  );
}

export default App;
