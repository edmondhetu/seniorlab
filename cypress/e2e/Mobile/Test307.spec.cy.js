var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../../support/Utility"
let language = Cypress.config().language

describe('test id 307 - Automate - Top Section - Mobile', () => {     
        context(`${sizes[0]} screen`, () => {
            beforeEach(() => {
            cy.visit('/en/learn')          
            cy.viewport(sizes[0])
            })

        it('Checklist', () => {   
            let language = new utility().getLanguageMobileScreen()    
            cy.get('.space-x-3 > :nth-child(1)').click()            
            .should('have.text', language ? 'Checklist' : 'Checklist')
            .and('be.visible')  
        })

        it('Not sure where to begin? Take the quiz! and Seniors Digital Gateway', () => {   
            let language = new utility().getLanguageMobileScreen()    
            cy.get('.mb-4').click({ force: true })            
            .should('have.text', language ? 'Not sure where to begin? Take the quiz!' : '(FR) Not sure where to begin? Take the quiz!')
            .and('be.visible') 

            cy.get('.h4 > .font-body').click({ force: true })            
            .should('have.text', language ? 'Seniors Digital Gateway' : 'Seniors Digital Gateway (FR)')
            .and('be.visible')
        })        
    })
})
    




    
    