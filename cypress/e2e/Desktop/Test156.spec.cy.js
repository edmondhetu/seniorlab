import { utility } from "../../support/Utility"

describe('test id 156 - verify Top Learning links - Landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Top learning title is visible', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.contains(language ? 'Top Learning Links' : 'Top Learning Links (FR)')
      .should('have.text', language ? 'Top Learning Links' : 'Top Learning Links (FR)')
      .should('is.visible')
  })

  it('Government Benefits link title and paragraph content is visible', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.contains(language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
      .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
      .and('be.visible')

    cy.contains(language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
      .should('have.text', language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
      .and('be.visible')
  })

  it('Source of retirement income link title and paragraph content is visible', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.contains(language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
      .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
      .and('be.visible')

    cy.contains(language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
      .should('have.text', language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
      .and('be.visible')
  })

  it('Financial Support link title and paragraph content is visible', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.contains(language ? 'Financial Support' : 'Financial Support (FR)')
      .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')
      .and('be.visible')

    cy.contains(language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
      .should('have.text', language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
      .and('be.visible')
  })

  it('Government Benefits link click url redirects to /en/fr/ when accessing /en/fr', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.wait(2000)
    cy.contains(language ? 'Government Benefits 101' :'Government Benefits 101 (FR)').click()
    cy.location('pathname').should('equal', language ? '/en/test' : '/fr/test-fr')
  })

  it('Source of retirement income link click url redirects to /en/fr/ when accessing /en/fr', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.wait(2000)
    cy.contains(language ? 'Sources of retirement income' : 'Sources of retirement income (FR)').click()
    cy.location('pathname').should('equal', language ? '/en/test2' : '/fr/test2-fr')
  })

  it('Financial Support link click url redirects to /en/fr/ when accessing /en/fr', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.wait(2000)
    cy.contains(language ? 'Financial Support' : 'Financial Support (FR)').click()
    cy.location('pathname').should('equal', language ? '/en/test3' : '/fr/test3-fr')
  })
})