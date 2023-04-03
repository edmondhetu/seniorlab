it('use requests to navigation bar links', () => {

    const pages = ['Jobs', 'Business and industry', 'Taxes']
  
  
    cy.visit('https://www.canada.ca/')

    cy.get('.text-right > p > .btn').click({force: true})

    pages.forEach(page => {
  
      cy
        .contains(page).click({force: true})
        .then((link) => {
          cy.request(link.prop('href'))
        })
  
    })
  
  });