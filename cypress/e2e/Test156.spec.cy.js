describe('test id 156 - verify Top Learning links - Landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Government Benefits', () => {
    cy.get('#english-button').click()
  })

  it('Source of retirement income', () => {
    cy.get('#english-button').click()
  })

  it('Financial Support', () => {
    cy.get('#english-button').click()
  })
})
