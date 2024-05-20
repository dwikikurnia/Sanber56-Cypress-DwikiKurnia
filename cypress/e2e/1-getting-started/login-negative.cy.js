const user = require("../../fixtures/user.json");

describe("Negative Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Fail login with Password Invalid", () => {
    cy.login(user.email, "Passworddummy");
    cy.get(".message-error").should(
      "contain",
      "The account sign-in was incorrect"
    );
  });
});
