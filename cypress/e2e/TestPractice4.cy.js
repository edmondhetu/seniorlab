describe('test id 154 - Test Middle Panel Links', () => {

    it('Middle Pannel- Learn', () => {
    cy.visit('/')

    cy.get('#english-button').click()

    cy.get('.hidden > .text-white').click()

    cy.contains('Plan').click()

    cy.contains('Apply').click()

    cy.contains('Government Benefits 101').click({force: true} )

    cy.visit('/')

    cy.get('#english-button').click()

    cy.contains('Manage').click()

    cy.contains('Community Resources').click()
    
    })
})

