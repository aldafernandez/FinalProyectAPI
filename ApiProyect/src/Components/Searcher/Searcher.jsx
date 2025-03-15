import { useState } from "react";

export function Searcher({ setMovie }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setMovie(search);
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
    </form>
  );
}



