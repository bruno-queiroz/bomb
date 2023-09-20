describe("Testing if game modes are properly added", () => {
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
  it("12 cards game mode should finish with 3 moves", () => {
    cy.visit("/bomb?gm=12");

    cy.wait(500);

    cy.get("[data-testid=end-modal").should("not.be.visible");

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

    cy.get("[data-testid=end-modal").should("be.visible");
  });
  it("20 cards game mode should finish with 5 moves", () => {
    cy.visit("/bomb?gm=20");

    cy.wait(500);

    cy.get("[data-testid=end-modal").should("not.be.visible");

    let moves = 5;
    cy.get("[data-testid=cards-container]>button").each((element) => {
      if (moves === 0) {
        return false;
      }
      if (element.find("[data-testid='gold']").length > 0) {
        moves--;

        cy.wrap(element).click();
      }
    });

    cy.get("[data-testid=end-modal").should("be.visible");
  });
  it("12 cards game mode should not finish if 3 moves aren't made yet", () => {
    cy.visit("/bomb?gm=12");

    cy.wait(500);

    cy.get("[data-testid=end-modal").should("not.be.visible");

    let moves = 2;
    cy.get("[data-testid=cards-container]>button").each((element) => {
      if (moves === 0) {
        return false;
      }
      if (element.find("[data-testid='gold']").length > 0) {
        moves--;

        cy.wrap(element).click();
      }
    });

    cy.get("[data-testid=end-modal").should("not.be.visible");
  });
  it("20 cards game mode should not finish if 5 moves aren't made yet", () => {
    cy.visit("/bomb?gm=12");

    cy.wait(500);

    cy.get("[data-testid=end-modal").should("not.be.visible");

    let moves = 4;
    cy.get("[data-testid=cards-container]>button").each((element) => {
      if (moves === 0) {
        return false;
      }
      if (element.find("[data-testid='gold']").length > 0) {
        moves--;

        cy.wrap(element).click();
      }
    });

    cy.get("[data-testid=end-modal").should("not.be.visible");
  });
});
