const user = require("../../fixtures/user.json");

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Login with valid credentials", () => {
    cy.login(user.email, user.password);
    cy.url().should("include", "/customer/account/");
  });
});
