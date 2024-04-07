import { useState } from "react";
import "./SearchDolencias.css";

const SearchDolencias = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query.trim());
    }
  };

  return (
    <div className="searchDolencias">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Introduce tu dolencia"
        className="inputDolencias"
      />
      <button onClick={handleSearch} className="buttonSearchDolencias">
        Buscar
      </button>
    </div>
  );
};

export default SearchDolencias;
