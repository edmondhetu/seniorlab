import { utility } from "../../support/Utility"

describe('test id 268 - verify Learn Overview - Breadcrumb', () => {
  it.only('canada link - verify link text and click url redirects to /en/fr/ when accessing /en/fr', () => {
    cy.visit('/')
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.inline-block > .font-body').should('have.text', language ? 'Canada.ca' : 'Canada.ca')
    cy.wait(2000)
    cy.get('.inline-block > .font-body').click()
    cy.origin('https://www.canada.ca', () => {
      let language = Cypress.config().language
      if (language == "French") {
        cy.url().should('include', '/fr.html')
      }
      else {
        cy.url().should('include', '/en.html')
      }

      cy.get('.well > .mrgn-tp-md').should('have.text', language ? 'The official website of the Government of Canada' : 'Le site officiel du gouvernement du Canada')
    })
  })
})