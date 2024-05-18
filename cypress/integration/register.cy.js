describe("Registration Feature", () => {
  const baseUrl = "https://demowebshop.tricentis.com/register";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("data dummy testing", () => {
    cy.get("#gender-male").check();
    cy.get("#FirstName").type("Dwiki");
    cy.get("#LastName").type("Kurnia");
    cy.get("#Email").type("dwiki.kurnia@yahoo.com");
    cy.get("#Password").type("qualityassurance123");
    cy.get("#ConfirmPassword").type("qualityassurance123");
    cy.get("#register-button").click();

    // Verify successful registration
    cy.contains("Your registration successful").should("be.visible");
  });

  it("missing required fields", () => {
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
