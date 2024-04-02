import { useState, useEffect } from "react";
import axios from "axios";
import CardsRemedios from "../components/Cards/CardsRemedios";
import SearchDolencias from "../components/Search/SearchDolencias";

export const RemediosPage = () => {
  const [remedios, setRemedios] = useState([]);
  const [filtradoRemedios, setFiltradoRemedios] = [];
  const [cartaVolteada, setCartaVolteada] = null;

  useEffect(() => {
    axios
      .get("/api/remedios")
      .then((response) => {
        setRemedios(response.data);
        setFiltradoRemedios(response.data);
      })
      .catch((error) => {
        console.error("No existe", error);
      });
  }, []);

  const handleVoltearCarta = (index) => {
    setCartaVolteada(index === cartaVolteada ? null : index);
  };
  const SearchDolencias = (query) => {
    const filtrado = remedios.filter((remedio) =>
      remedio.dolencias.toLowerCase().includes(query.toLowerCase())
    );
    setFiltradoRemedios(filtrado);
  };

  return (
    <main>
      <div className="SearchDolencias">
        <SearchDolencias onSearch={searchDolencias} />
      </div>
      <div className="cartaRemedios">
        {filtradoRemedios.map((remedio, index) => (
          <CardsRemedios
            key={remedio.id}
            remedio={remedio}
            onFlip={() => handleVoltearCarta(index)}
            isFlipped={cartaVolteada === index}
          />
        ))}
      </div>
    </main>
  );
};
