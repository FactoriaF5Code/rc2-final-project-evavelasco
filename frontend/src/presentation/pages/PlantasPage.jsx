import { useState, useEffect } from "react";
import axios from "axios";
import CardsPlantas from "../components/Cards/CardsPlantas";

export const PlantasPage = () => {
  const [plantas, setPlantas] = useState([]);
  const [cartaVolteada, setCartaVolteada] = useState(null);

  useEffect(() => {
    axios
      .get("/api/plantas")
      .then((response) => {
        setPlantas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching plantas:", error);
      });
  }, []);

  const handleVoltearCarta = (index) => {
    setCartaVolteada(index === cartaVolteada ? null : index);
  };

  return (
    <main>
      <div className="plantas-grid">
        {plantas.map((planta, index) => (
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
