import { utility } from "../../support/Utility"

describe('test id 133 - verify Button/Links - Landing page top section', () => {
  beforeEach(() => {
    cy.visit('/en/home')
  })
  it('language link - verify is visible, clickable, html attributes and url pathname.', () => {
    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('[data-cy="toggle-language-link"]').should('have.attr', 'lang', 'fr')
      .and('have.attr', 'href', '/fr/home')
      .and('be.visible')
    cy.location('pathname').should('equal', '/fr/home')
    cy.contains('Retirement Hub (FR)')

    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('[data-cy="toggle-language-link"]').should('have.attr', 'lang', 'en')
      .and('have.attr', 'href', '/en/home')
      .and('be.visible')
    cy.location('pathname').should('equal', '/en/home')
    cy.contains('Retirement Hub')
  })

  it('checklist button - verify is visible, clickable, html attributes and url pathname', () => {
    let language = new utility().getLanguageTabletOrMonitorScreen()

    cy.get('.p-4 > .mb-6 > .MuiButtonBase-root').should('have.attr', 'href', language ? '/en/home#' : '/fr/home#')
      .and('be.visible')
    cy.location('pathname').should('equal', language ? '/en/home' : '/fr/home')
    cy.get('.p-4 > .mb-6 > .MuiButtonBase-root').click()
  })
})




