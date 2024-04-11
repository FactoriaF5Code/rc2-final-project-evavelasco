import { useState } from "react";
import "./SearchPlantas.css";

const SearchPlantas = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query.trim());
      setErrorMessage("");
    }
  };
  // const handleKeyDown = (e) => {
  //   if (e.Key === "Enter") {
  //     handleSearch();
  //   }
  // };

  return (
    <form className="searchPlantas" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // onKeyDown={handleKeyDown}
        placeholder="Introduce tu planta"
        className="inputPlantas"
      />
      <button type="submit" className="buttonSearchPlantas">
        Buscar
      </button>
    </form>
  );
};

export default SearchPlantas;
