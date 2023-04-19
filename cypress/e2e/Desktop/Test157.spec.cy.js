import { utility } from "../../support/Utility"

describe('test id 157 - verify Supporting Seniors - Landing page ', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('family and friends link and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.grid > :nth-child(1) > a')
      .should('have.text', language ? 'Family and Friends' : 'Family and Friends')
    cy.get('.grid > :nth-child(1) > p')
      .should('have.text', language ? 'Learn how you can help your loved ones enter the retirement stage in their life.' : 'FR Learn how you can help your loved ones enter the retirement stage in their life.')
  })

  it('representatives and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.grid > :nth-child(2) > a')
    .should('have.text', 'Representatives')
    cy.get('.grid > :nth-child(2) > p')
      .should('have.text', language ? 'Find resources to understand and navigate Canada\'s pension system.' : 'FR Find resources to understand and navigate Canada’s pension system.')
  })

  it('organization and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.grid > :nth-child(3) > a')
      .should('have.text', 'Organizations')
    cy.get('.grid > :nth-child(3) > p')
      .should('have.text', language ? 'Learn how best to help and navigate clients as they plan for retirement.' : 'FR Learn how best to help and navigate clients as they plan for retirement.')
  })
})