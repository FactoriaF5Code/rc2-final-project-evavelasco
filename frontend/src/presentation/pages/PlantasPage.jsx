import { useState, useEffect } from "react";
import axios from "axios";

export const PlantasPage = () => {
  const [plantas, setPlantas] = useState([]);

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

  const [cartaVolteada, setCartaVolteada] = useState(null);

  const handleVoltearCarta = (index) => {
    setCartaVolteada(index === cartaVolteada ? null : index);
  };

  return (
    <main>
      <div className="plantas-grid">
        {plantas.map((planta, index) => (
          <div
            key={planta.id}
            className="planta-card"
            onClick={() => handleVoltearCarta(index)}
          >
            {cartaVolteada === index ? (
              <div>
                <p>{planta.propiedades}</p>
              </div>
            ) : (
              <div>
                <img src={planta.imagen} alt={planta.nombre} />
                <h2>{planta.nombre}</h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
