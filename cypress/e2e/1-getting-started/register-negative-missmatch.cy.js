const user = require("../../fixtures/user.json");

describe("Negative Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Show error for mismatched password confirmation", () => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type(user.firstName);
    cy.get("#lastname").type(user.lastName);
    cy.get("#email_address").type(user.email);
    cy.get("#password").type(user.password);
    cy.get("#password-confirmation").type("Passworddummy");
    cy.get('button[title="Create an Account"]').click();
    cy.get("#password-confirmation-error").should(
      "contain",
      "Please enter the same value again."
    );
  });
});
