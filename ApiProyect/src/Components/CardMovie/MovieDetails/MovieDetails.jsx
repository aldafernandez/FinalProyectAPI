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
    <div className="flex column pad-3 gap-2">
      <Link className="btn w-80px f-sans color-1" to="/">Volver</Link>
      {movie && (
        <div className="grid-2">
          <>
            <img className="img-movie" src={movie.Poster} alt={movie.Title} />
          </>
          <div className="pad-3 flex column gap-1 f-sans">
            <h2>{movie.Title} ({movie.Year})</h2>
            <p><strong>Género:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actores:</strong> {movie.Actors}</p>
            <p><strong>Trama:</strong> {movie.Plot}</p>
          </div>  
        </div>
      ) }
    </div>
  );
}
