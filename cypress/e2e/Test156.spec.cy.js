describe('test id 156 - verify Top Learning links - Landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Government Benefits', () => {
    cy.get('#english-button').click()
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
      .should('have.text', 'Government Benefits 101')
  })

  it('Source of retirement income', () => {
    cy.get('#english-button').click()
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
      .should('have.text', 'Sources of retirement income')
  })

  it('Financial Support', () => {
    cy.get('#english-button').click()
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
    .should('have.text', 'Financial Support')
  })
})