import { useState, useEffect } from "react";
import axios from "axios";
import CardsRemedios from "../components/Cards/CardsRemedios";

export const RemediosPage = () => {
  const [remedios, setRemedios] = useState([]);

  useEffect(() => {
    axios
      .get("/api/remedios")
      .then((response) => {
        setRemedios(response.data);
      })
      .catch((error) => {
        console.error("Error fetching remedios:", error);
      });
  }, []);

  const [cartaVolteada, setCartaVolteada] = useState(null);

  const handleVoltearCarta = (index) => {
    setCartaVolteada(index === cartaVolteada ? null : index);
  };

  return (
    <main>
      <div className="remedios-grid">
        {remedios.map((remedio, index) => (
          <CardsRemedios
            key={remedio.id}
            remedio={remedio}
            onFlip={() => handleVoltearCarta(index)}
            isFlipped={cartaVolteada === index}
          />
        ))}
      </div>
    </main>
  );
};
