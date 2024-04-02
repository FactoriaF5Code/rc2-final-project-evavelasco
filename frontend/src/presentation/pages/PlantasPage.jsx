import { useState, useEffect } from "react";
import axios from "axios";
import CardsPlantas from "../components/Cards/CardsPlantas";
import SearchPlantas from "../components/Search/SearchPlantas";

export const PlantasPage = () => {
  const [plantas, setPlantas] = useState([]);
  const [cartaVolteada, setCartaVolteada] = useState(null);
  const [plantasFiltradas, setPlantasFiltradas] = useState([]);
  useEffect(() => {
    axios
      .get("/api/plantas")
      .then((response) => {
        setPlantas(response.data);
        setPlantasFiltradas(response.data);
      })
      .catch((error) => {
        console.error("No existe planta", error);
      });
  }, []);

  const handleVoltearCarta = (index) => {
    setCartaVolteada(index === cartaVolteada ? null : index);
  };
  const searchPlantas = (query) => {
    const plantasFiltradas = plantas.filter((planta) =>
      planta.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setPlantasFiltradas(plantasFiltradas);
  };

  return (
    <main>
      <div className="SearchPlantas">
        <SearchPlantas onSearch={searchPlantas} />
      </div>
      <div className="cartaPlanta">
        {plantasFiltradas.map((planta, index) => (
          <CardsPlantas
            key={planta.id}
            planta={planta}
            onFlip={() => handleVoltearCarta(index)}
            isFlipped={cartaVolteada === index}
          />
        ))}
      </div>
    </main>
  );
};
