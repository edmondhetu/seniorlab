import { utility } from "../../support/Utility"

describe('Test id 260 - Automate - Learn overview - Explore content - Making Retirement decision', () => {
    beforeEach(() => {
        cy.visit('/en/learn')
    })

    it('Learn overview - Title', () => {
        cy.get('.h2')
            .should('be.visible')
    })

    it('Find all broken links - verify broken link on landing page', () => {
        cy.get('a').each(link => {
            if (link.prop('href'))
                cy.request({
                    url: link.prop('href'),
                    failOnStatusCode: false
                })

            cy.log(link.prop('href'))
        })
    })
})