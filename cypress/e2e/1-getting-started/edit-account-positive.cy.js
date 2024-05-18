const user = require("../../fixtures/user.json");

describe("Edit Account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Edit account information", () => {
    cy.login(user.email, user.password);
    cy.visit("/customer/account/edit/");
    cy.get("#firstname").clear().type("Dwiki");
    cy.get("#lastname").clear().type("Kurnia Update");
    cy.get('button[title="Save"]').click();
    cy.get(".message-success").should(
      "contain",
      "You saved the account information."
    );
  });
});
