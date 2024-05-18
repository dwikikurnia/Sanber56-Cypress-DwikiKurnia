describe("Registration Feature", () => {
  const baseUrl = "https://demowebshop.tricentis.com/register";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Register Positive Testing", () => {
    cy.get("#gender-male").check();
    cy.get("#FirstName").type("Dwiki");
    cy.get("#LastName").type("Kurnia");
    cy.get("#Email").type("dwiki.kurnia2@yahoo.com");
    cy.get("#Password").type("qualityassurance123");
    cy.get("#ConfirmPassword").type("qualityassurance123");
    cy.get("#register-button").click();

    // Verify successful registration
    cy.contains("Your registration completed").should("be.visible");
  });
});
