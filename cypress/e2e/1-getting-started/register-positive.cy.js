describe("Registration Feature", () => {
  const baseUrl = "https://demowebshop.tricentis.com/register";

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Register Positive Testing", () => {
    const randomNum = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
    const email = `dwiki.kurnia${randomNum}@yahoo.com`;

    cy.get("#gender-male").check();
    cy.get("#FirstName").type("Dwiki");
    cy.get("#LastName").type("Kurnia");
    cy.get("#Email").type(email);
    cy.get("#Password").type("qualityassurance123");
    cy.get("#ConfirmPassword").type("qualityassurance123");
    cy.get("#register-button").click();

    // Verify successful registration
    cy.contains("Your registration completed").should("be.visible");
  });
});
