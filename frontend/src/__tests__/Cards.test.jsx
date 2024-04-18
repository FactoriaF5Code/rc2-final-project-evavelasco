import { render, screen } from "@testing-library/react"; // testing de UI
import { describe, it, vitest, expect } from "vitest"; // motor de pruebas
import "@testing-library/jest-dom/vitest";

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

describe("RemedioCard", () => {
  const onFlip = vitest.fn();

  it("Muestra la dolencia", () => {
    render(
      <RemedioCard
        remedio={remedio}
        onFlip={onFlip}
        imagenRemedio="imagen.jpg"
      />
    );

    expect(screen.getByText(/calculos renales/)).toBeInTheDocument();
  });

  it("Muestra las hierbas", () => {
    render(
      <RemedioCard
        remedio={remedio}
        onFlip={onFlip}
        imagenRemedio="imagen.jpg"
      />
    );

    expect(screen.getByText(/brezo/)).toBeInTheDocument();
    expect(screen.getByText(/malva/)).toBeInTheDocument();
    expect(screen.getByText(/rompepiedras/)).toBeInTheDocument();
  });
});
