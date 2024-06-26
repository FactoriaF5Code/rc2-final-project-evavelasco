import { useState } from "react";
import "./SearchPlantas.css";

function SearchPlantas({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <form className="searchPlantas" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Introduce tu planta"
        className="inputPlantas"
      />
      <button type="submit" className="buttonSearchPlantas">
        Buscar
      </button>
    </form>
  );
}

export default SearchPlantas;
