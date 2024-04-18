import axios from "axios";
import { useEffect, useState } from "react";
import RemedioCard from "../components/Cards/RemedioCard.jsx";
import SearchDolencias from "../components/Search/SearchDolencias";
import imagenRemedio from "../../../public/assets/taza.jpeg";

export const RemediosPage = () => {
  const [remedios, setRemedios] = useState([]);
  const [filtradoRemedios, setFiltradoRemedios] = useState([]);
  const [cartaVolteada, setCartaVolteada] = useState(null);
  const RemediosPorPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [busquedaActiva, setBusquedaActiva] = useState(false);

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
    const filtradoRemedios = remedios.filter((remedio) =>
      remedio.dolencia.toLowerCase().includes(query.toLowerCase())
    );
    setFiltradoRemedios(filtradoRemedios);
    setCurrentPage(1);
    setBusquedaActiva(true);
    setNombreDolencia("");
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * RemediosPorPage;
    const endIndex = startIndex + RemediosPorPage;
    console.log(filtradoRemedios);
    return filtradoRemedios.slice(startIndex, endIndex);
  };

  return (
    <main>
      <div className="SearchDolencias">
        <SearchDolencias onSearch={handleSearchDolencias} />
      </div>
      <div className="cartaRemedios">
        {getPaginatedData().map((remedio, index) => (
          <RemedioCard
            key={remedio.id}
            remedio={remedio}
            onFlip={() => handleVoltearCarta(index)}
            isFlipped={cartaVolteada === index}
            imagenRemedio={imagenRemedio}
          />
        ))}
      </div>

      {!busquedaActiva && totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

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
