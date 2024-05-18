const user = require("../../fixtures/user.json");

describe("Edit Address", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Edit address", () => {
    cy.login(user.email, user.password);
    cy.visit("/customer/address/");
    cy.get('button[title="Save Address"]', { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.get("#telephone").type(user.address.phone);
    cy.get("#street_1").type(user.address.street);
    cy.get("#city").type(user.address.city);
    cy.get("#region_id").select(user.address.state);
    cy.get("#zip").type(user.address.zip);
    cy.get('button[title="Save Address"]').click();
    cy.get(".message-success").should("contain", "You saved the address.");
  });
});
