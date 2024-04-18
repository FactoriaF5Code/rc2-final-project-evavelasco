import SearchDolencias from "../presentation/components/Search/SearchDolencias";
import { describe, it, vitest, expect } from "vitest";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("SearchDolencias", () => {
  const onSearch = vitest.fn();
  it("se renderiza el buscador", () => {
    render(<SearchDolencias onSearch={onSearch} />);
    const input = screen.getByPlaceholderText("Introduce tu dolencia");
    const button = screen.getByText("Buscar");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
