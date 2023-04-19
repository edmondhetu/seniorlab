let language = Cypress.config().language

describe('testcase id 160 - Contact Us Link', () => {
    it('Lower Section - Contact Us', () => {
        cy.visit('/')
        cy.get('#english-button').click()

        if (language == "French") {
            cy.get('[data-cy="toggle-language-link"]').click()
        }
        cy.wait(3000)
        cy.get(':nth-child(8) > .MuiTypography-root').click()
    })
})