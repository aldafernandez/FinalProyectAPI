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
    <div className="grid-4">
      {movies.length > 0 && (
        movies.map((m) => (
          <div className="card " key={m.imdbID}>
            <img className="img-movie" src={m.Poster} alt={m.Title} />
            <div className="flex column center-center gap-1">
              <h3 className="">{m.Title}</h3>
              <Link className="btn color-1" to={`/movie/${m.imdbID}`}>+ Info</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
