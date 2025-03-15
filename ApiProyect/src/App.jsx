import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Searcher } from "./Components/Searcher/Searcher";
import { CardMovie } from "./Components/CardMovie/CardMovie";
import { MovieDetails } from "./Components/CardMovie/MovieDetails/MovieDetails";
import { Recomendados } from "./Components/Recomendados/Recomendados";

export function App() {
  const [movie, setMovie] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.body.classList.toggle("dark-mode", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.body.classList.toggle("dark-mode", newTheme);
    localStorage.setItem("darkMode", newTheme);
  };

  return (
    <>
      <button onClick={toggleTheme}>
        {darkMode ? "Modo Claro ☀️" : "Modo Oscuro 🌙"}
      </button>

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





