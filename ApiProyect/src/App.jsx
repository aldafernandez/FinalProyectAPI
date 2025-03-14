import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Searcher } from "./Components/Searcher/Searcher";
import { CardMovie } from "./Components/CardMovie/CardMovie";
import { Movie } from './Components/CardMovie/Movie/Movie';


export function App() {
  
  let [movie, setMovie] = useState("");
  
  let sendMovie = (value) => { setMovie(value);}
  

  return (
    <> 

      <Searcher sendMovie={sendMovie} /> 
      
      <Routes>
        <Route path='/' element={ <CardMovie movie={movie}/> } />
        <Route path='/movie/:imdbID' element={ <Movie/> } />
      </Routes>
    
    </>
    
  );
}



