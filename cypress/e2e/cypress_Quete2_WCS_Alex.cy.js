describe("test creation de compte", () => {
  it("passes", () => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get(".mb-6 > .body-2-bold").click();
    cy.get("#firstName").type("Test-san");
    cy.get("#lastName").type("Test-sama");
    cy.get("#signup-email").type("test@gmail.com");
    cy.get("#signup-password").type("P@ssW0rd");
    cy.get('[qa-data="signup-submit-button"]').click();
  });
});
describe("test creation de compte echoué", () => {
  it("passes", () => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get(".mb-6 > .body-2-bold").click();
    cy.get("#firstName").type("test");
    cy.get("#lastName").type("testtest");
    cy.get("#signup-email").type("test@gmail.com");
    cy.get("#signup-password").type("P@ssW0rd");
    cy.get('[data-qa="signup-submit-button"]').click();
  });
});
describe("test connexion au compte", () => {
  it("passes", () => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get(".mb-6 > .body-2-bold").click();
    cy.get("#signin-email").type("skaree@gmail.com");
    cy.get("#signin-password").type("P@ssW0rd");
    cy.get('[data-qa="signin-submit-button"]').click();
  });
});
