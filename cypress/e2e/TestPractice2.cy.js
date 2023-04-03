 
  describe('Canada.ca', () => {
    
      })  
  it('click all links with loop', () => {
  
      const pages = ['Jobs', 'Business and industry', 'Taxes']
    
      cy.visit('https://www.canada.ca/')
      cy.get('.text-right > p > .btn').click({force: true})
    
      pages.forEach(page => {
    
        cy.contains(page).click({force: true})
        cy.location('pathname').should('equal', `/en/services/${page}`)
        cy.go('back')
    
      })
    
    })
