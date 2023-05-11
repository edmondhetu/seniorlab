describe('test quiz age pre-60', () => {
    it('test', () => {
        cy.visit('/en/learn')
        cy.get('#quiz-dialog-trigger').click()
        cy.get('h2')
            .should('be.visible')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
    })
})

