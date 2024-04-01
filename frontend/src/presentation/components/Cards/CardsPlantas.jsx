const CardsPlantas = ({ planta, onFlip, isFlipped }) => {
  return (
    <div className="cardPlanta" onClick={onFlip}>
      {isFlipped ? (
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
  );
};

export default CardsPlantas;
