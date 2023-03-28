let baseUrl = 'https://www.canada.ca/'


describe('Canada.ca', () => {
   it('should visit', () => {
    cy.visit(baseUrl)
    cy.get('.text-right > p > .btn').click()
   })

   it('All Contact', () => {
    cy.visit(baseUrl)    
    cy.get('.text-right > p > .btn').click()
    cy.get('li').contains('All contacts').click({force: true})
    cy.visit('https://www.canada.ca/en/contact.html')
   })

   it('Jobs', () => {
    cy.visit(baseUrl)    
    cy.get('.text-right > p > .btn').click()    
    cy.get('li').contains('Jobs').click({force: true})
    cy.visit('https://www.canada.ca/en/services/jobs.html')    
   })

   it('Immigration and citizenship', () => {
      cy.visit(baseUrl)      
      cy.get('.text-right > p > .btn').click()      
      cy.get('li').contains('Immigration and citizenship').click({force: true})
      cy.visit('https://www.canada.ca/en/services/immigration-citizenship.html')
    })

    it('Travel and tourism', () => {
      cy.visit('https://www.canada.ca/')      
      cy.get('.text-right > p > .btn').click()      
      cy.get('li').contains('Travel and tourism').click({force: true})
      cy.visit('https://travel.gc.ca/')   
    })

   })


     