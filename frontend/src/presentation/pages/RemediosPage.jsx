import { useState, useEffect } from "react";
import axios from "axios";

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
          <div
            key={remedio.id}
            className="remedio-card"
            onClick={() => handleVoltearCarta(index)}
          >
            {cartaVolteada === index ? (
              <div>
                <p>Receta: {remedio.receta}</p>
              </div>
            ) : (
              <div>
                <h2>{remedio.dolencia}</h2>
                <p>Plantas utilizadas: {remedio.plantasUtilizadas}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
