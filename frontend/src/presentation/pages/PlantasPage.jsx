import axios from "axios";
import { useEffect, useState } from "react";
import CardsPlantas from "../components/Cards/CardsPlantas";
import SearchPlantas from "../components/Search/SearchPlantas";

export const PlantasPage = () => {
  const [plantas, setPlantas] = useState([]);
  const [cartaVolteada, setCartaVolteada] = useState(null);
  const [plantasFiltradas, setPlantasFiltradas] = useState([]);
  const PlantasPorPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
 
  const [busquedaActiva, setBusquedaActiva] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/plantas")
      .then((response) => {
        setPlantas(response.data);
        setTotalPages(Math.ceil(response.data.length / PlantasPorPage));
        console.log(response);
        setPlantasFiltradas(response.data);
      })
      .catch((error) => {
        console.error("No existe planta", error);
      });
  }, []);

  const handleVoltearCarta = (index) => {
    setCartaVolteada(index === cartaVolteada ? null : index);
  };
  const handleSearch = (query) => {
    const plantasFiltradas = plantas.filter((planta) =>
      planta.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setPlantasFiltradas(plantasFiltradas);
    setCurrentPage(1);
    setBusquedaActiva(true);
    setNombrePlanta("");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * PlantasPorPage;
    const endIndex = startIndex + PlantasPorPage;
    return plantasFiltradas.slice(startIndex, endIndex);
  };

  return (
    <main>
      <div className="SearchPlantas">
        <SearchPlantas onSearch={handleSearch} />
      </div>
      <div className="cartaPlanta">
        {getPaginatedData().map((planta, index) => (
          <CardsPlantas
            key={planta.id}
            planta={planta}
            onFlip={() => handleVoltearCarta(index)}
            isFlipped={cartaVolteada === index}
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
