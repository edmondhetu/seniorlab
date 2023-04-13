describe('test id 268 - verify Learn Overview - Breadcrumb', () => {
  it.only('canada link - verify link text and click url redirects', () => {
    cy.visit('/')
    cy.get('#english-button').click()
    cy.get('.inline-block > .font-body').should('have.text', 'Canada.ca')
    cy.wait(2000)
    cy.get('.inline-block > .font-body').click()
    cy.origin('https://www.canada.ca', () => {
      cy.url().should('include', '/en.html')
    })
  })
})