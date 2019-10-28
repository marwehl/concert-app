/// <reference types="Cypress" />

context("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home");
  });

  it("has the right App title", () => {
    cy.title().should("contain", "Concert Planner");
  });

  it("has a navigation", () => {
    cy.get("nav").should("have.length", 1);
  });

  it("has filters", () => {
  cy.get("button").contains('All')
  });
});
