import "./CardsRemedios.css";
import { useEffect, useState } from "react";

const CardsRemedios = ({ remedio, onFlip }) => {
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
      className={`cardRemedio ${isFlipped ? "flip" : ""}`}
      onClick={handleFlip}
    >
      {isFlipped ? (
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
  );
};

export default CardsRemedios;
