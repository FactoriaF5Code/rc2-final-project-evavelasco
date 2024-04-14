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
      // style={{
      //   position: "relative",
      //   backgroundImage: `url(${imagenRemedio})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   opacity: 0.8,
      // }}
    >
      {isFlipped ? (
        <div className="back">
          <p>Receta: {remedio.receta}</p>
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
  );
};

export default CardsRemedios;
