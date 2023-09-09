import { render, screen } from "@testing-library/react";
import CardFlip from "../../src/components/CardFlip";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing CardFlip component", () => {
  it("Card should have a bomb if isBomb is true", async () => {
    render(
      <MemoryRouter>
        <CardFlip {...{ cardIndex: 0, isBomb: true, isCardRotated: false }} />
      </MemoryRouter>
    );

    const card = screen.getByTestId("bomb");

    expect(card).toBeInTheDocument();
  });
  it("Card should have a gold if isBomb is false", () => {
    render(
      <MemoryRouter>
        <CardFlip {...{ cardIndex: 0, isBomb: false, isCardRotated: false }} />
      </MemoryRouter>
    );

    const card = screen.getByTestId("gold");

    expect(card).toBeInTheDocument();
  });
  it("Card should not be rotated if isCardRotated is false", () => {
    render(
      <MemoryRouter>
        <CardFlip {...{ cardIndex: 0, isBomb: false, isCardRotated: false }} />
      </MemoryRouter>
    );

    const card = screen.getByTestId("card-wrapper");

    expect(card).not.toHaveClass("rotate-y");
  });
  it("Card should be rotated if isCardRotated is true", () => {
    render(
      <MemoryRouter>
        <CardFlip {...{ cardIndex: 0, isBomb: false, isCardRotated: true }} />
      </MemoryRouter>
    );

    const card = screen.getByTestId("card-wrapper");

    expect(card).toHaveClass("rotate-y");
  });
});
