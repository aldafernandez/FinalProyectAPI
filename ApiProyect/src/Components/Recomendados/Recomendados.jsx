import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Recomendados() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=488037bb&s=batman`) 
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2 className="t-align mar-top-2 f-sans">Recomendados</h2>
      <div className="grid-4">
        {movies.slice(0, 4).map((m) => ( 
          <div className="card" key={m.imdbID}>
            <img className="img-movie" src={m.Poster} alt={m.Title} />
            <div className="flex column center-center gap-1">
              <h3 >{m.Title}</h3>
              <Link className="btn color-1" to={`/movie/${m.imdbID}`}>+ Info</Link>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
