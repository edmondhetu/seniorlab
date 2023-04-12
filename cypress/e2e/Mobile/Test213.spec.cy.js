var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../../support/Utility"

describe('test id 213 - Navigation with resolutions', () => {
    context(`${sizes[0]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[0])
        })

        it('Learn', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .my-3 > .h4').click({ force: true })
            cy.contains(language ? 'Learn' : 'Learn (FR)')

            cy.get('.max-h-full > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(1)')
                .should('have.text', language ? 'Learn about the "three pillars" of Canada\'s retirement system.' : '(FR) Learn about the "three pillars" of Canada\'s retirement system.')
            cy.get('.max-h-full > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(2)')
                .should('have.text', language ? 'There are many factors to consider before retiring to help ensure that you can comfortably retire.' : '(FR) There are many factors to consider before retiring to help ensure that you can comfortably retire.')

        })

        it('Plan', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(2) > .my-3 > .h4').click({ force: true })
            cy.contains(language ? 'Plan' : 'Plan (FR)')

            cy.get('.max-h-full > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(1)')
                .should('have.text', language ? 'Learn about the "three pillars" of Canada\'s retirement system.' : '(FR) Learn about the "three pillars" of Canada\'s retirement system.')
            cy.get('.max-h-full > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(2)')
                .should('have.text', language ? 'There are many factors to consider before retiring to help ensure that you can comfortably retire.' : '(FR) There are many factors to consider before retiring to help ensure that you can comfortably retire.')
        })

        it('Apply', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(3) > .my-3 > .h4').click({ force: true })
            cy.contains(language ? 'Apply' : 'Apply (FR)')

            cy.get('.max-h-full > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(1)')
                .should('have.text', language ? 'Learn about the "three pillars" of Canada\'s retirement system.' : '(FR) Learn about the "three pillars" of Canada\'s retirement system.')
            cy.get('.max-h-full > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(2)')
                .should('have.text', language ? 'There are many factors to consider before retiring to help ensure that you can comfortably retire.' : '(FR) There are many factors to consider before retiring to help ensure that you can comfortably retire.')
        })

        it('Manage', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(4) > .my-3 > .h4').click({ force: true })
            cy.contains(language ? 'Manage' : 'Manage (FR)')

            cy.get('.max-h-full > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(1)')
                .should('have.text', language ? 'Learn about the "three pillars" of Canada\'s retirement system.' : '(FR) Learn about the "three pillars" of Canada\'s retirement system.')
            cy.get('.max-h-full > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(2)')
                .should('have.text', language ? 'There are many factors to consider before retiring to help ensure that you can comfortably retire.' : '(FR) There are many factors to consider before retiring to help ensure that you can comfortably retire.')

        })

    })
})