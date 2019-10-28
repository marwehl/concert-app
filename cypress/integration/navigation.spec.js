context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home')
  })

  it('has 5 navigation points', () => {
    cy.get('nav a').should('have.length', 5)
  })
})