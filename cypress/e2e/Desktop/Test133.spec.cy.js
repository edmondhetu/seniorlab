import { utility } from "../../support/Utility"

describe('test id 133 - verify Button/Links - Landing page top section', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('language link', () => {
    cy.get('#english-button').click()
    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('.h4 > .font-body')
      .should('have.text', 'Seniors Digital Gateway')

    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('.h4 > .font-body')
      .should('have.text', 'Seniors Digital Gateway (FR)')
  })

  it('checklist button label', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.space-x-3 > :nth-child(1)')
      .should('have.text', language ? 'Checklist' : 'Checklist')
  })

  it('mynotes button label', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.space-x-3 > :nth-child(2)')
      .should('have.text', language ? 'My Notes' : 'My Notes')
  })
})