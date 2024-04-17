import { expect, fireEvent, render, vitest } from "vitest";
import SearchDolencias from "../presentation/components/Search/SearchDolencias";
import SearchPlantas from "../presentation/components/Search/SearchPlantas";

vitest("SearchDolencias", () => {
  const onSearch = vitest.fn();

  const { getByPlaceholderText, getByText } = render(
    <SearchDolencias onSearch={onSearch} />
  );

  vitest("se renderiza el buscador", () => {
    const input = getByPlaceholderText("Introduce tu dolencia");
    const button = getByText("Buscar");

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  vitest("llama a la función onSearch", () => {
    const input = getByPlaceholderText("Introduce tu dolencia");
    const button = getByText("Buscar");

    fireEvent.change(input, { target: { value: "dolor de cabeza" } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith("dolor de cabeza");
  });
});

vitest("SearchPlantas", () => {
  const onSearch = vitest.fn();

  const { getByPlaceholderText, getByText } = render(
    <SearchPlantas onSearch={onSearch} />
  );

  vitest("se renderiza el buscador", () => {
    const input = getByPlaceholderText("Introduce tu planta");
    const button = getByText("Buscar");

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
