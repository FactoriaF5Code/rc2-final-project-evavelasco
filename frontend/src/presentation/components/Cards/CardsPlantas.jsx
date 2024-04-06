import { useEffect, useState } from "react";
import "./CardsPlantas.css";

const CardsPlantas = ({ planta, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const card = document.querySelector(".cardRemedio");

    const handleMouseOver = () => {
      card.style.transform = "scale(1)";
    };

    const handleMouseOut = () => {
      card.style.transform = "scale(1)";
    };

    card.addEventListener("mouseover", handleMouseOver);
    card.addEventListener("mouseout", handleMouseOut);

    return () => {
      card.removeEventListener("mouseover", handleMouseOver);
      card.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`cardPlanta ${isFlipped ? "flip" : ""}`}
      onClick={handleFlip}
    >
      {isFlipped ? (
        <div>
          <p>{planta.propiedades}</p>
        </div>
      ) : (
        <div>
          <img src={planta.foto} alt={planta.nombre} />
          <h2>{planta.nombre}</h2>
        </div>
      )}
    </div>
  );
};

export default CardsPlantas;
