import { utility } from "../../support/Utility"

describe('test id 155 - verify Learn link - Landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('learn tab - verify is visible, clickable and html attributes', () => {
    cy.get('#english-button').click()
    cy.get('button').eq(0).should('have.attr', 'type', 'button')
    .and('have.attr', 'tabindex', '0')
    .and('have.attr', 'role', 'tab')
    .and('have.attr', 'aria-selected', 'true')
    .and('be.visible')
    cy.get('button').eq(0).click()
  })

  it('learn text is visible', () => {
    cy.get('#english-button').click()
    cy.get('.h5').should('be.visible')
    cy.get('.justify-center > :nth-child(1)').should('be.visible')
    cy.get('.justify-center > :nth-child(2)').should('be.visible')
  })

  it('learn link has href attribute /en/fr/ when accessing /en/fr', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.flex-row-reverse > .MuiTypography-root').should('have.attr', 'href', language ? '/en/home#' : '/en/home#')
  })
})