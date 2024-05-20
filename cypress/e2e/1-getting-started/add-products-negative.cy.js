const user = require("../../fixtures/user.json");

describe("Add Product & Checkout Feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Show error when updating cart with empty quantity", () => {
    cy.visit("/push-it-messenger-bag.html");
    cy.get('button[title="Add to Cart"]').click();
    cy.get(".message-success").should("contain", "You added");
    cy.visit("/checkout/cart/");
    cy.get("input.input-text.qty").clear().type("invalid"); // Invalid quantity
    cy.get('button[title="Update Shopping Cart"]').click();
    cy.get(".mage-error").should("contain", "This is a required field.");
  });
});
