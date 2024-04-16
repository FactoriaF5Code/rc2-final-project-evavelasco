import { useState } from "react";
import "./SearchDolencias.css";

const SearchDolencias = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query.trim());
      setQuery("");
    }
  };
  return (
    <form className="searchDolencias" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Introduce tu dolencia"
        className="inputDolencias"
      />
      <button type="submit" className="buttonSearchDolencias">
        Buscar
      </button>
    </form>
  );
};

export default SearchDolencias;
