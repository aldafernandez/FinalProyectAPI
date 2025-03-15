import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Recomendados() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=488037bb&s=batman`) // Películas predefinidas
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Recomendados</h2>
      <div>
        {movies.slice(0, 4).map((m) => ( // Muestra solo 4 películas
          <div key={m.imdbID}>
            <img src={m.Poster} alt={m.Title} />
            <h3>{m.Title}</h3>
            <Link to={`/movie/${m.imdbID}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
