const user = require("../../fixtures/user.json");

describe("Register Feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Create an account", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type(user.firstName);
    cy.get("#lastname").type(user.lastName);
    cy.get("#email_address").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("#password-confirmation").type(user.password);
    cy.get('button[title="Create an Account"]').click();
    cy.url().should("include", "/customer/account/");
  });
});
