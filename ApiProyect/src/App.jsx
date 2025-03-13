import { useState } from 'react';
import { Searcher } from "./Components/Searcher/Searcher";
import { CardMovie } from "./Components/CardMovie/CardMovie";

export function App() {
  
  let [movie, setMovie] = useState("");
  
  let sendMovie = (value) => { setMovie(value);}

 

  

  return (
    <> 
      <Searcher sendMovie={sendMovie} /> 
      <CardMovie movie={movie}/>
    </>
    
  );
}

