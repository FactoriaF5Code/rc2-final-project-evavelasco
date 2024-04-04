import "./CardsRemedios.css";

const CardsRemedios = ({ remedio, onFlip, isFlipped }) => {
  return (
    <div className="cardRemedio" onClick={onFlip}>
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
