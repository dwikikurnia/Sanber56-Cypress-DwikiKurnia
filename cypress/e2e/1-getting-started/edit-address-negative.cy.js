const user = require("../../fixtures/user.json");

describe("Edit Address", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Show error for empty address input", () => {
    cy.login(user.email, user.password);
    cy.visit("/customer/address/new/");
    cy.get("#telephone").should("be.visible").type("123"); // Invalid phone number but still succeed
    cy.get('button[title="Save Address"]', { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.get("#street_1-error").should("contain", "This is a required field.");
    cy.get("#city-error").should("contain", "This is a required field.");
    cy.get("#zip-error").should("contain", "This is a required field.");
    cy.get("#region_id-error").should("contain", "Please select an option.");
  });
});
