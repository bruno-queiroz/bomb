describe("My First Test", () => {
  it("Should show the 12 card game mode", () => {
    cy.visit("/");

    cy.get("[data-testid=home-title]").should("exist");
    cy.get("[data-testid=play-link]").click();
    cy.get("[data-testid=12-card-mode]").click();

    cy.url().should("include", "bomb?gm=12");
  });
  it("Should show the 20 card game mode", () => {
    cy.visit("/");

    cy.get("[data-testid=home-title]").should("exist");
    cy.get("[data-testid=play-link]").click();
    cy.get("[data-testid=20-card-mode]").click();

    cy.url().should("include", "bomb?gm=20");
  });
});
