import "./CardsRemedios.css";
import { useState } from "react";

const CardsRemedios = ({ remedio, onFlip, imagenRemedio }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    console.log(remedio);
  };

  return (
    <div
      className={`cardRemedio ${isFlipped ? "flip" : ""}`}
      onClick={handleFlip}
    >
      <div
        className="cardRemedioImage"
        style={{
          backgroundImage: `url(${imagenRemedio})`,
        }}
      >
        {isFlipped ? (
          <div className="back">
            <p> {remedio.receta}</p>
          </div>
        ) : (
          <div className="front">
            <h2>{remedio.dolencia}</h2>
            {remedio.plantas.map((planta) => (
              <p key={planta.id}> {planta.nombre}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsRemedios;
