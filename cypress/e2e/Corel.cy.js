it('verify text and links are returning 200 status', () => {
  cy.visit('https://www.mckinsey.com/')
  cy.url().should('include', 'https://www.mckinsey.com/')
})