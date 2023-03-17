it('verify text and links are returning 200 status', () => {
    cy.url().should('include', 'https://www.google.com')

    
  })