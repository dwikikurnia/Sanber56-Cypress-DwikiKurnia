const user = require("../../fixtures/user.json");

describe("Add Product & Checkout Feature", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Add product to the cart", () => {
    cy.login(user.email, user.password);
    cy.visit("/push-it-messenger-bag.html");
    cy.get('button[title="Add to Cart"]').click();
    cy.get(".message-success").should("contain", "You added");
    cy.visit("/checkout/cart/");
    cy.get("input.input-text.qty").clear().type("2");
    cy.get('button[title="Update Shopping Cart"]').click();
    // cy.get(".message-success").should("contain", "Shopping Cart updated.");
    // cy.visit("/checkout/cart/");
    // cy.get('button[title="Proceed to Checkout"]').click();
    // cy.url().should("include", "/checkout/");
  });
});
