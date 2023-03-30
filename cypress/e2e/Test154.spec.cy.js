let language = Cypress.config().language

describe('test id 154 - Test Middle Panel Links', () => {
    it('Middle Pannel- Learn', () => {
        cy.visit('/')
        cy.get('#english-button').click()

        if (language == "French") {
            cy.get('[data-cy="toggle-language-link"]').click()
        }

        cy.contains(language ? 'Learn' : 'Learn(FR)').click()
        cy.contains(language ? 'Plan' : 'Plan(FR').click()
        cy.contains(language ? 'Apply' : 'Apply(FR)').click()
        cy.contains(language ? 'Manage' : 'Manage(FR)').click()
        cy.contains(language ? 'Community Resources' : 'Community Resources(FR)').click()
    })
})