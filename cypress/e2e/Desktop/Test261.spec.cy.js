import { utility } from "../../support/Utility"

describe('Test id 261 - Automate - Learn overview - Explore content - Real-life retirement stories', () => {      
        beforeEach(() => {
        cy.visit('/en/learn')
            
        })

        it('Real-life retirement stories', () => {
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(3) > .h2')
            .should('have.text', language ? 'Real-life retirement stories' : '(FR) Federal benefit scenarios: from retirees to new pensioners')
            })

        it('Not sure when to retire? Read the stories that people shared with us. Learn about the different choices and compare them to your personal situation.', () => {
                let language = new utility().getLanguageTabletOrMonitorScreen()
                cy.get('#mainContent > :nth-child(3) > :nth-child(3) > :nth-child(2)')
                .should('have.text', language ? 'Not sure when to retire? Read the stories that people shared with us. Learn about the different choices and compare them to your personal situation.' :
                 '(FR) Lorem ipsum dolor sit amet consectetur. Pulvinar accumsan volutpat vel odio magna rhoncus. Nisl eleifend auctor purus semper magnis aliquet sed. Vitae penatibus duis quis pulvinar ac dui elit. Mi sem dictumst ac cursus cursus adipiscing purus felis tortor. Eu lacus ac nulla.')
        })
        
        it('Case 1', () => {
            //cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            //cy.get('#mainContent > :nth-child(3) > :nth-child(3) > :nth-child(2)')
            //.should('have.text', language ? 'Not sure when to retire? Read the stories that people shared with us. Learn about the different choices and compare them to your personal situation.' : '(FR) Federal benefit scenarios: from retirees to new pensioners')          
            cy.get('#section-2-card-0').click({ force: true })
            cy.contains(language ? 'Frank - Working past 70' : '(FR) Case 1')
            cy.get(':nth-child(3) > .grid > :nth-child(1) > .MuiButtonBase-root > .MuiCardContent-root > .m-0')
            .should('have.text', language ? 'Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.' : '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
            
        })

        it('Case 2', () => {
            //cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
                        
            //cy.contains(language ? 'Federal benefit scenarios: from retirees to new pensioners' : '(FR) Federal benefit scenarios: from retirees to new pensioners')          
            cy.get('#section-2-card-1').click({ force: true })
            cy.contains(language ? 'Frank - Working past 70' : '(FR) Case 2')
            cy.get(':nth-child(3) > .grid > :nth-child(2) > .MuiButtonBase-root > .MuiCardContent-root > .m-0')
            .should('have.text', language ? 'Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.' : '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
        })

        it('Case 3', () => {
            //cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
                        
            //cy.contains(language ? 'Federal benefit scenarios: from retirees to new pensioners' : '(FR) Federal benefit scenarios: from retirees to new pensioners')          
            cy.get('#section-2-card-2').click({ force: true })
            cy.contains(language ? 'Frank - Working past 70' : '(FR) Case 3')
            cy.get(':nth-child(3) > .grid > :nth-child(3) > .MuiButtonBase-root > .MuiCardContent-root > .m-0')
            .should('have.text', language ? 'Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.' : '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
        })

    
})

