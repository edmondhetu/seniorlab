const cypressConfig = require("../../cypress.config")

describe('test id 133 - verify Button/Links - Landing page top section', () => {
  beforeEach(() => {
    let url = cypressConfig.baseUrl
    cy.visit(url)
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

  it('take the quiz link', () => {
    cy.get('#english-button').click()
    cy.contains('Take the quiz now!')
  })
})

describe('test id 157 - verify Supporting Seniors - Landing page ', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('family and friends link and paragraph content', () => {
    cy.get('#english-button').click()
    cy.get('.grid > :nth-child(1) > a').should('have.text', 'Family and Friends')
    cy.get(':nth-child(1) > p').should('have.text', 'Learn how you can help your loved ones enter the retirement stage in their life.')
  })

  it('representatives and paragraph content', () => {
    cy.get('#english-button').click()
    cy.get('.grid > :nth-child(2) > a').should('have.text', 'Representatives')
    cy.get(':nth-child(2) > p').should('have.text', "Find resources to understand and navigate Canada's pension system.")
  })

  it('organization and paragraph content', () => {
    cy.get('#english-button').click()
    cy.get('.grid > :nth-child(3) > a').should('have.text', 'Organizations')
    cy.get('.grid > :nth-child(3) > p').should('have.text', 'Learn how best to help and navigate clients as they plan for retirement.')
  })
})
