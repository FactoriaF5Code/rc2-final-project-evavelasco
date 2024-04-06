import axios from "axios";
import { useEffect, useState } from "react";
import CardsRemedios from "../components/Cards/CardsRemedios";
import SearchDolencias from "../components/Search/SearchDolencias";

export const RemediosPage = () => {
  const [remedios, setRemedios] = useState([]);
  const [filtradoRemedios, setFiltradoRemedios] = useState([]);
  const [cartaVolteada, setCartaVolteada] = useState(null);
  const RemediosPorPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/dolencias")
      .then((response) => {
        setRemedios(response.data);
        setTotalPages(Math.ceil(response.data.length / RemediosPorPage));
        console.log(response);
        setFiltradoRemedios(response.data);
      })
      .catch((error) => {
        console.error("No existe", error);
      });
  }, []);

  const handleVoltearCarta = (index) => {
    setCartaVolteada(index === cartaVolteada ? null : index);
  };
  const handleSearchDolencias = (query) => {
    const filtrado = remedios.filter((remedio) =>
      remedio.dolencias.toLowerCase().includes(query.toLowerCase())
    );
    setFiltradoRemedios(filtrado);
    setCurrentPage(1);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * RemediosPorPage;
    const endIndex = startIndex + RemediosPorPage;
    return plantasFiltradas.slice(startIndex, endIndex);
  };

  return (
    <main>
      <div className="SearchDolencias">
        <SearchDolencias onSearch={handleSearchDolencias} />
      </div>
      <div className="cartaRemedios">
        {filtradoRemedios.map((remedio, index) => (
          <CardsRemedios
            key={remedio.id}
            remedio={remedio}
            onFlip={() => handleVoltearCarta(index)}
            isFlipped={cartaVolteada === index}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}
    </main>
  );
};
