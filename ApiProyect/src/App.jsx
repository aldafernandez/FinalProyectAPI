import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Searcher } from "./Components/Searcher/Searcher";
import { CardMovie } from "./Components/CardMovie/CardMovie";
import { MovieDetails } from "./Components/CardMovie/MovieDetails/MovieDetails";
import { Recomendados } from "./Components/Recomendados/Recomendados";

export function App() {
  const [movie, setMovie] = useState("");
  
  return (
    <>

      <Searcher setMovie={setMovie} />
      
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              {!movie && <Recomendados />}
              <CardMovie movie={movie} />
            </>
          } 
        />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
      </Routes>
    </>
  );
}





