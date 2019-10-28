/// <reference types="Cypress" />

context('CreatePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create')
  })

  it('has four input elements and one button', () => {
    cy.get('input').should('have.length', 4)
    cy.get('button').should('have.length', 1).contains('create')
  })

})