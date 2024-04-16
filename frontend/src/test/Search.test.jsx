import SearchPlantas from "../presentation/components/Search/SearchPlantas";
import SearchDolencias from "../presentation/components/Search/SearchDolencias";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { describe, test, expect } from "jest";

describe("SearchPlantas", () => {
  test("se renderiza bien el buscador", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchPlantas onSearch={mockOnSearch} />
    );
    const inputElement = getByPlaceholderText("Introduce tu planta");
    const buttonElement = getByText("Buscar");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
describe("SearchDolencias", () => {
  test("funcion OnSearch se llama correctamente", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchDolencias onSearch={mockOnSearch} />
    );
    const inputElement = getByPlaceholderText("Introduce tu dolencia");
    const buttonElement = getByText("Buscar");
    fireEvent.change(inputElement, { target: { value: "gota" } });
    fireEvent.click(buttonElement);
    expect(mockOnSearch).toHaveBeenCalledWith("gota");
  });
});
