describe('test quiz age pre-60', () => {
    const age = ["'[value=\"pre-60\"]'"]
    age.forEach(age => {
        it('test', () => {
            cy.visit('/en/learn')
            cy.get('#quiz-dialog-trigger').click()
            cy.get('h2')
                .should('be.visible')
            cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
            cy.get(age).click()
        })
    })
})