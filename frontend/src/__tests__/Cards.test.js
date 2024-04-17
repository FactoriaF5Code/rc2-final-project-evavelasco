import { expect, fireEvent, render, vitest } from "vitest";

import RemedioCard from "../presentation/components/Cards/RemedioCard";

const remedio = {
  receta: "vasito por la mañana",
  dolencia: "calculos renales",
  plantas: [
    { id: 1, nombre: "brezo" },
    { id: 2, nombre: "malva" },
    { id: 3, nombre: "rompepiedras" },
  ],
};

vitest("RemedioCard", () => {
  const onFlip = vitest.fn();

  const { getByText, getByTestId } = render(
    <RemedioCard remedio={remedio} onFlip={onFlip} imagenRemedio="imagen.jpg" />
  );

  vitest("renderiza bien el anverso", () => {
    const front = getByTestId("remedio-front");
    const dolencia = getByText(remedio.dolencia);
    const plantas = getByTestId("remedio-plantas");

    expect(front).toBeTruthy();
    expect(dolencia).toBeTruthy();
    expect(plantas).toBeTruthy();
  });

  vitest("se ve el reverso cuando clicko", () => {
    const front = getByTestId("remedio-front");
    const back = getByTestId("remedio-back");

    fireEvent.click(front);

    expect(back).toBeTruthy();
  });

  vitest("se llama la funcion onFlip", () => {
    const front = getByTestId("remedio-front");

    fireEvent.click(front);

    expect(onFlip).toHaveBeenCalled();
  });
});
