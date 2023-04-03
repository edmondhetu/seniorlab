let language = Cypress.config().language
54
describe('testcase id 160 - Contact Us Link', () => {
    it('Lower Section - Contact Us', () => {
        if (language == "English") { 
           
            cy.visit('/')
            cy.get('#english-button').click()
            cy.get(':nth-child(4) > a.text-lg').click()
        }

        if (language == "French") {
            
            cy.visit('/')
            cy.get('#french-button').click()
            //Presently the HTML tag for the 'Find a Service Canada Centre' link is same for English and French for 'Contact Us'. This tag needs to be changed when French link is implemented
            cy.get(':nth-child(4) > a.text-lg').click()
        }       
               
    })
})