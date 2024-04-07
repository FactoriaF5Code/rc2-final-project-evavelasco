import "./CardsRemedios.css";
import { useState } from "react";

const CardsRemedios = ({ remedio, onFlip, imagenUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`cardRemedio ${isFlipped ? "flip" : ""}`}
      onClick={handleFlip}
      style={{
        backgroundImage: `url(${imagenUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 1,
      }}
    >
      {isFlipped ? (
        <div className="back">
          <p>Receta: {remedio.receta}</p>
        </div>
      ) : (
        <div className="front">
          <h2>{remedio.dolencia}</h2>
          <p>Plantas utilizadas: {remedio.plantasUtilizadas}</p>
        </div>
      )}
    </div>
  );
};

export default CardsRemedios;
