import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export function MovieDetails() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=488037bb&i=${imdbID}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Error:", err));
  }, [imdbID]);

  return (
    <div>
      <Link to="/">Volver</Link>
      {movie ? (
        <>
          <h2>{movie.Title} ({movie.Year})</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p><strong>Género:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actores:</strong> {movie.Actors}</p>
          <p><strong>Trama:</strong> {movie.Plot}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
