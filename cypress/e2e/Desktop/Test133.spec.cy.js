import { utility } from "../../support/Utility"

describe('test id 133 - verify Button/Links - Landing page top section', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('language link - verify is visible, clickable, html attributes and url pathname.', () => {
    cy.get('#english-button').click()
    
    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('[data-cy="toggle-language-link"]').should('have.attr', 'lang', 'en')
      .and('have.attr', 'href', '/en/home')
    cy.get('.h4 > .font-body').should('be.visible')
    cy.location('pathname').should('equal', '/fr/home')

    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('[data-cy="toggle-language-link"]').should('have.attr', 'lang', 'fr')
      .and('have.attr', 'href', '/fr/home')
    cy.get('.h4 > .font-body').should('be.visible')
    cy.location('pathname').should('equal', '/en/home')
  })

  it('checklist button - verify is visible, clickable, html attributes and url pathname', () => {
    cy.get('#english-button').click()

    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.space-x-3 > .text-white').should('have.attr', 'href', language ? '/en/home#' : '/fr/home#').and('be.visible')
    cy.get('.space-x-3 > .text-white').click()
    cy.location('pathname').should('equal', language ? '/en/home' : '/fr/home')
  })
})




