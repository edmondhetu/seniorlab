import { utility } from "../support/Utility"

describe('test id 155 - verify Learn link - Landing page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('learn text', () => {
      cy.get('#english-button').click()
      let language = new utility().getLanguageTabletOrMonitorScreen()
      cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .rounded > .no-underline > .h1')
        .should('have.text', language ? 'Learn ' : 'Learn (FR) ')
    })
  
    it('learn content', () => {
      cy.get('#english-button').click()
      let language = new utility().getLanguageTabletOrMonitorScreen()
      cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(1)')
        .should('have.text', language ? 'Learn about the "three pillars" of Canada\'s retirement system.' : '(FR) Learn about the "three pillars" of Canada\'s retirement system.')
      cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(2)')
        .should('have.text', language ? 'There are many factors to consider before retiring to help ensure that you can comfortably retire.' : '(FR) There are many factors to consider before retiring to help ensure that you can comfortably retire.')
    })
  })