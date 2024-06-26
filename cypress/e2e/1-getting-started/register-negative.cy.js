const user = require("../../fixtures/user.json");

describe("Negative Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Fail to create an account with existing email", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type(user.firstName);
    cy.get("#lastname").type(user.lastName);
    cy.get("#email_address").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("#password-confirmation").type(user.password);
    cy.get('button[title="Create an Account"]').click();
    cy.get(".message-error").should(
      "contain",
      "There is already an account with this email address."
    );
  });
});
