var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../../support/Utility"

describe('test id 214 - Supporting Seniors - Mobile', () => {
    context(`${sizes[0]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[0])
        })

        it('Supporting Seniors content and is visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(3) > .h2')
                .should('have.text', language ? 'Supporting Seniors' : 'Supporting Seniors (FR)')
                .and('be.visible')
        })

        it('Friends and Family link title and paragraph content are visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get('.grid > :nth-child(1) > a')
                .should('have.text', language ? 'Family and Friends' : 'Family and Friends (FR)')
                .and('be.visible')
            cy.get(':nth-child(1) > p')
                .should('have.text', language ? 'Learn how you can help your loved ones enter the retirement stage in their life.' : '(FR) Learn how you can help your loved ones enter the retirement stage in their life.')
                .and('be.visible')
        })
    })
})