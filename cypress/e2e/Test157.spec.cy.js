describe('test id 157 - verify Supporting Seniors - Landing page ', () => {
  beforeEach(() => {
    let url = Cypress.config().baseUrl
    cy.visit(url)
  })
  it('family and friends link and paragraph content', () => {
    cy.get('#english-button').click()
    cy.get('.grid > :nth-child(1) > a').should('have.text', 'Family and Friends')
    cy.get(':nth-child(1) > p').should('have.text', 'Learn how you can help your loved ones enter the retirement stage in their life.')
  })

  it('representatives and paragraph content', () => {
    cy.get('#english-button').click()
    cy.get('.grid > :nth-child(2) > a').should('have.text', 'Representatives')
    cy.get(':nth-child(2) > p').should('have.text', "Find resources to understand and navigate Canada's pension system.")
  })

  it('organization and paragraph content', () => {
    cy.get('#english-button').click()
    cy.get('.grid > :nth-child(3) > a').should('have.text', 'Organizations')
    cy.get('.grid > :nth-child(3) > p').should('have.text', 'Learn how best to help and navigate clients as they plan for retirement.')
  })
})
