let baseUrl = 'https://seniors-journey-dev.dev-dp.dts-stn.com/'

describe('test id 133 - verify Button/Links - Landing page top section', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
  })
  it('language link', () => {
    cy.get('#english-button').click()
    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('h1').should('have.text', 'Home')

    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('h1').should('have.text', 'Acceuil')
  })

  it('checklist button', () => {
    cy.get('#english-button').click()
    cy.get('.space-x-3 > :nth-child(1)').should('have.text', 'Checklist')
  })

  it('mynotes button', () => {
    cy.get('#english-button').click()
    cy.get('.space-x-3 > :nth-child(2)').should('have.text', 'My Notes')
  })

  it('language link', () => {
    cy.get('#english-button').click()
    cy.contains('Take the quiz now!')
  })
})
