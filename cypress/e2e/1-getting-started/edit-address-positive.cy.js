const user = require("../../fixtures/user.json");

describe("Edit Address", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Edit Address", () => {
    cy.login(user.email, user.password);
    cy.visit("/customer/address/new/");
    cy.get("#telephone").should("be.visible").type(user.address.phone);
    cy.get("#street_1").should("be.visible").type(user.address.street);
    cy.get("#city").should("be.visible").type(user.address.city);
    cy.get("#region_id").should("be.visible").select(user.address.state);
    cy.get("#zip").should("be.visible").type(user.address.zip);
    cy.get('button[title="Save Address"]', { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.get(".message-success").should("contain", "You saved the address.");
  });
});
