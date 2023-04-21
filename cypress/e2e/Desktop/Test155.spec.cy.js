import { utility } from "../../support/Utility"

describe('test id 155 - verify Learn tab - Landing page', () => {
  beforeEach(() => {
    cy.visit('/en/home')
  })
  it('learn tab - verify is visible, clickable and html attributes', () => {
    cy.get('button').eq(0).should('have.attr', 'type', 'button')
      .and('have.attr', 'tabindex', '0')
      .and('have.attr', 'role', 'tab')
      .and('have.attr', 'aria-selected', 'true')
      .and('be.visible')
    cy.get('button').eq(0).click()
  })

  it('learn text title is visible', () => {
    cy.get('.h5').should('be.visible')
  })

  it('explore retirement link - verify is visible, clickable and html attributes', () => {
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.text-right > .MuiButtonBase-root').should('have.attr', 'href', language ? '/en/learn' : '/fr/learn')
      .and('be.visible')
    cy.get('.text-right > .MuiButtonBase-root').click()
    cy.location('pathname').should('equal', language ? '/en/home' : '/fr/home')
  })
})