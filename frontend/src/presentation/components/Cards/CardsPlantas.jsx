import { useState } from "react";
import "./CardsPlantas.css";

const CardsPlantas = ({ planta, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`cardPlanta ${isFlipped ? "flip" : ""}`}
      onClick={handleFlip}
    >
      {isFlipped ? (
        <div className="back">
          <p>{planta.propiedades}</p>
        </div>
      ) : (
        <div className="front">
          <img className="hierbas" src={planta.foto_url} alt={planta.nombre} />
          <h2>{planta.nombre}</h2>
        </div>
      )}
    </div>
  );
};

export default CardsPlantas;
