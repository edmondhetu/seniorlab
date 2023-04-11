var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../support/Utility"

describe('test id 213 - Navigation with resolutions', () => {
    context(`${sizes[0]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[0])
        })

        it('Sources of retirement income', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Sources of retirement income' : 'Sources of retirement income (FR)').click({ force: true })
        })

        it('CPP Program Overview', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'CPP Program Overview' : 'CPP Program Overview (FR)').click({ force: true })
        })

        it('OAS Program Overview', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'OAS Program Overview' : 'OAS Program Overview (FR)').click({ force: true })
        })

        it('Saving for retirement', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Saving for retirement' : 'Saving for retirement (FR)').click({ force: true })
        })

    })
})