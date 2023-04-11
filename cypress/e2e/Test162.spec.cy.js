import { utility } from "../support/Utility"

describe.only('test id 162 - verify Learn overview - Top section - Learn page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Learn overview - Top section - Learn page content', () => {
    //cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('.h3')
      .should('have.text', language ? 'Not sure where to begin? Take the quiz!' : '(FR) Not sure where to begin? Take the quiz!')
    cy.get('.w-full > .pb-4')
      .should('have.text', language ? 'Take our quiz and receive a personalized checklist to help guide you through retirement.' : '(FR) Take our quiz and receive a personalized checklist to help guide you through retirement.')
    cy.get('.w-full > .rounded')
      .should('have.text', language ? 'Take the quiz now!' : '(FR) Take the quiz now!')
  })
})