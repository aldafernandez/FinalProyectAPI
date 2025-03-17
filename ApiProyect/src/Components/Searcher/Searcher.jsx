import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export function Searcher({ setMovie }) {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setMovie(search);
  };

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
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Buscar película..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Buscar</button>
      <button onClick={toggleTheme}>
        {darkMode ? <FaSun/> : <FaMoon/> }
      </button>
    </form>
  );
}



