import CardsPlantas from "../presentation/components/Cards/CardsPlantas.jsx";
import RemedioCard from "../presentation/components/Cards/RemedioCard.jsx";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { expect, it, describe } from "vitest";

describe("RemedioCard", () => {
  const remedio = {
    dolencia: "gota",
    receta: "infusión",
    id_Plantas: "ortiga,cola de caballo,diente de león, stevia",
  };
  const onFlip = jest.fn();
  const { getByText, getByRole } = render(
    <RemedioCard remedio={remedio} onFlip={onFlip} />
  );
  it("trae la informacion del reverso cuando clicko", () => {
    const button = getByRole("button");
    fireEvent.click(button);
    expect(getByText(remedio.receta)).toBeInTheDocument();
  });
});

describe("CardsPlantas", () => {
  const planta = {
    planta: "tomillo",
    propiedades: "antibacteriana",
  };

  const onFlip = jest.fn();
  const { getByText, getByRole } = render(
    <CardsPlantas planta={planta} onFlip={onFlip} />
  );
  it("renderiza el anverso con la planta correcta", () => {
    expect(getByText(planta.nombre)).toBeInTheDocument();
  });
});
