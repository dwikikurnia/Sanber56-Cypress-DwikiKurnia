describe("Registration Feature", () => {
  const baseUrl = "https://demowebshop.tricentis.com/register";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Register Negative Testing", () => {
    cy.get("#register-button").click();

    // Verify error messages
    cy.get(".field-validation-error").should("be.visible");
    cy.get(".field-validation-error").should(
      "contain",
      "First name is required."
    );
    cy.get(".field-validation-error").should(
      "contain",
      "Last name is required."
    );
    cy.get(".field-validation-error").should("contain", "Email is required.");
    cy.get(".field-validation-error").should(
      "contain",
      "Password is required."
    );
    cy.get(".field-validation-error").should(
      "contain",
      "Password is required."
    );
  });
});
