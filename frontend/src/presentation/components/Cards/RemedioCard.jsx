import "./RemedioCard.css";
import {useState} from "react";

const RemedioCard = ({ remedio, onFlip, imagenRemedio}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const {receta, dolencia, plantas } = remedio;

    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
        console.log(remedio);
    };

    return (
        <article
            style={{
                backgroundImage: `url(${imagenRemedio})`,
            }}
            className={`remedio ${isFlipped ? "flip" : ""}`}
            onClick={handleFlip}
        >

            {isFlipped ? (
                <div className="back">
                    <p> {receta}</p>
                </div>
            ) : (
                <div className="front">
                    <p>{dolencia}</p>
                    {plantas.map((planta) => (
                        <p key={planta.id}> {planta.nombre}</p>
                    ))}
                </div>
            )}

        </article>
    );
};

export default RemedioCard;
