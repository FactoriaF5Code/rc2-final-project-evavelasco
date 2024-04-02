import { useState } from "react";
import "./SearchPlantas.css";

const SearchPlantas = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="searchPlantas">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Introduce tu planta"
        className="inputPlantas"
      />
      <button onClick={handleSearch} className="buttonSeachPlantas">
        Buscar
      </button>
    </div>
  );
};

export default SearchPlantas;
