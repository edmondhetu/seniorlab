import testdata from "../../fixtures/testdata.json";

testdata.forEach((test) => {
    describe('test quiz ages flow', () => {
        it(`test quiz age ${test.testcase}`, () => {
            cy.visit('/en/learn')
            cy.get('#quiz-dialog-trigger').click()
            cy.get('h2')
                .should('be.visible')
            cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
            cy.get(test.age).click()
        })
    })
})