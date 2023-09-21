describe("Testing a longer user interaction gameplay", () => {
  it("Testing the entire flow", () => {
    cy.visit("/");

    cy.get("[data-testid=home-title]").should("exist");
    cy.get("[data-testid=play-link]").click();
    cy.get("[data-testid=12-card-mode]").click();

    cy.url().should("include", "bomb?gm=12");

    cy.wait(300);

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

    cy.get("[data-testid=play-again]").click();

    cy.get("[data-testid=end-modal]").should("not.be.visible");

    cy.get("[data-testid=cards-container]>button").each((element) => {
      if (element.find("[data-testid='bomb']").length > 0) {
        cy.wrap(element).click();
        return false;
      }
    });

    cy.get("[data-testid=end-modal]").should("be.visible");
    cy.get("[data-testid=loser-title]").should("be.visible");

    cy.get("[data-testid=change-game-mode]").click();

    cy.url().should("include", "game-mode");

    cy.get("[data-testid=20-card-mode]").click();

    cy.url().should("include", "bomb?gm=20");

    cy.wait(300);

    let fiveMoves = 5;
    cy.get("[data-testid=cards-container]>button").each((element) => {
      if (fiveMoves === 0) {
        return false;
      }
      if (element.find("[data-testid='gold']").length > 0) {
        fiveMoves--;

        cy.wrap(element).click();
      }
    });

    cy.get("[data-testid=end-modal]").should("be.visible");
    cy.get("[data-testid=winner-title]").should("be.visible");

    cy.get("[data-testid=play-again]").click();

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
