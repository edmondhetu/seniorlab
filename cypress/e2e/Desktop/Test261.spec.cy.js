import { utility } from "../../support/Utility"

describe('Test id 261 - Automate - Learn overview - Explore content - Federal benefit scenarios from retirees to new pensioners', () => {
    
        beforeEach(() => {
            cy.visit('/')
            
        })

        it('Case 1', () => {
            //cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
                        
            cy.contains(language ? 'Federal benefit scenarios: from retirees to new pensioners' : '(FR) Federal benefit scenarios: from retirees to new pensioners')          
            cy.get('#section-2-card-0').click({ force: true })
            cy.contains(language ? 'Case 1' : '(FR) Case 1')
            
        })

        it('Case 2', () => {
            //cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
                        
            cy.contains(language ? 'Federal benefit scenarios: from retirees to new pensioners' : '(FR) Federal benefit scenarios: from retirees to new pensioners')          
            cy.get('#section-2-card-1').click({ force: true })
            cy.contains(language ? 'Case 2' : '(FR) Case 2')
            
        })

        it('Case 3', () => {
            //cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
                        
            cy.contains(language ? 'Federal benefit scenarios: from retirees to new pensioners' : '(FR) Federal benefit scenarios: from retirees to new pensioners')          
            cy.get('#section-2-card-2').click({ force: true })
            cy.contains(language ? 'Case 3' : '(FR) Case 3')
            
        })



    
})