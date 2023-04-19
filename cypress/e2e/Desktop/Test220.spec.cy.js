import { utility } from "../../support/Utility"

describe('test id 220 - verify Plan link - Landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('plan text content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.z-20 > :nth-child(2)')
      .should('have.text', language ? 'Plan' : 'Plan (FR)')
  })

  it('plan content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.z-20 > :nth-child(2)').click()
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(1)')
      .should('have.text', language ? 'Learn about the "three pillars" of Canada\'s retirement system.' : '(FR) Learn about the "three pillars" of Canada\'s retirement system.')
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(2)')
      .should('have.text', language ? 'There are many factors to consider before retiring to help ensure that you can comfortably retire.' : '(FR) There are many factors to consider before retiring to help ensure that you can comfortably retire.')
  })

  it.only('plan link click url redirects to /en/fr/ when accessing /en/fr', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.wait(2000)
    cy.get('.z-20 > :nth-child(2)').click()
    cy.get('.max-h-full > :nth-child(1) > .flex > .rounded > .h1 > .MuiTypography-root > span').click()
    cy.location('pathname').should('equal', language ? '/en/plan' : '/fr/plan')
  })
})