describe("Testing gameplay", () => {
  it("Player should win if he didn't find bombs", () => {
    cy.visit("/bomb?gm=12");

    cy.wait(500);

    cy.get("[data-testid=end-modal]").should("not.be.visible");

    let moves = 3;
    cy.get("[data-testid=cards-container]>button").each((element) => {
      if (moves === 0) {
        return false;
      }
      if (element.find("[data-testid='gold']").length > 0) {
        moves--;

        cy.wrap(element).click();
      }
    });

    cy.get("[data-testid=end-modal]").should("be.visible");
    cy.get("[data-testid=winner-title]").should("be.visible");
  });
  it("Player should lose if he found a bomb", () => {
    cy.visit("/bomb?gm=12");

    cy.wait(500);

    cy.get("[data-testid=end-modal]").should("not.be.visible");

    cy.get("[data-testid=cards-container]>button").each((element) => {
      if (element.find("[data-testid='bomb']").length > 0) {
        cy.wrap(element).click();
        return false;
      }
    });

    cy.get("[data-testid=end-modal]").should("be.visible");
    cy.get("[data-testid=loser-title]").should("be.visible");
  });
});
