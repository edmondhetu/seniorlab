import { utility } from "../../support/Utility"

describe('test id 156 - verify Top Learning links - Landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Top learning title is visible', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .h3')
      .should('be.visible', language ? 'Top Learning Links' : 'Top Learning Links (FR)')
  })

  it('Government Benefits link title and paragraph content is visible', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
      .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
      .and('be.visible')

    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > :nth-child(2)')
      .should('have.text', language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
      .and('be.visible')
  })

  it('Source of retirement income link title and paragraph content is visible', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
      .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
      .and('be.visible')

    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > :nth-child(2)')
      .should('have.text', language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
      .and('be.visible')
  })

  it('Financial Support link title and paragraph content is visible', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
      .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')
      .and('be.visible')

    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > :nth-child(2)')
      .should('have.text', language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
      .and('be.visible')
  })

  it('Government Benefits link click url redirects to /en/fr/ when accessing /en/fr', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.wait(2000)
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4').click()
    cy.location('pathname').should('equal', language ? '/en/test' : '/fr/test-fr')
  })

  it('Source of retirement income link click url redirects to /en/fr/ when accessing /en/fr', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.wait(2000)
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4').click()
    cy.location('pathname').should('equal', language ? '/en/test2' : '/fr/test2-fr')
  })

  it('Financial Support link click url redirects to /en/fr/ when accessing /en/fr', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.wait(2000)
    cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4').click()
    cy.location('pathname').should('equal', language ? '/en/test3' : '/fr/test3-fr')
  })
})