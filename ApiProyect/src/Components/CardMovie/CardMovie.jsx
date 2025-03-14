import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CardMovie({ movie }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!movie) return;

    fetch(`https://www.omdbapi.com/?apikey=488037bb&s=${movie}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search || []))
      .catch((err) => console.error("Error:", err));
  }, [movie]);

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((m) => (
          <div key={m.imdbID}>
            <img src={m.Poster} alt={m.Title} />
            <h3>{m.Title}</h3>
            <Link to={`/movie/${m.imdbID}`}>Ver detalles</Link>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}
