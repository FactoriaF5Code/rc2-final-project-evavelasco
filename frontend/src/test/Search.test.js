import SearchPlantas from "../presentation/components/Search/SearchPlantas";
import SearchDolencias from "../presentation/components/Search/SearchDolencias";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect;

describe("SearchPlantas", () => {
  test("se renderiza bien el buscador", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchPlantas onSearch={mockOnSearch} />
    );
    const inputElement = getByPlaceholderText("Introduce tu planta");
    const buttomElement = getByText("Buscar");
    expect(inputElement).toBeInTheDocument();
    expect(buttomElement).toBeInTheDocument();
  });
});
describe("SearchDolencias", () => {
  test("funcion OnSearch se llama correctamente"),
    () => {
      const mockOnSearch = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <SearchDolencias onSearch={mockOnSearch} />
      );
      const inputElement = getByPlaceholderText("Introduce tu dolencia");
      const buttomElement = getByText("Buscar");
      fireEvent.change(inputElement, { target: { value: "gota" } });
      fireEvent.click(buttomElement);
      expect(mockOnSearch).toHaveBeenCalledWith("gota");
    });
  });

