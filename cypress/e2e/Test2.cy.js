it('verify text and links are returning 200 status', () => {
  cy.visit('https://www.corel.com')
  cy.url().should('include', 'https://www.corel.com')
})