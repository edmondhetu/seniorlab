import { utility } from "../../support/Utility"

describe('test id 157 - verify Supporting Seniors - Landing page ', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('family and friends link and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('[id=":Rllm:-title"]').should('have.text', language ? 'Family and Friends' : 'FR Family and Friends')
    cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiCardContent-root > .m-0').should('have.text', language ? 'Learn how you can help your loved ones enter the retirement stage in their life.' :
      'FR Learn how you can help your loved ones enter the retirement stage in their life.')
  })

  it('representatives and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('[id=":R15lm:-title"]').should('have.text', language ? 'Representatives' : 'FR Representatives')
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiCardContent-root > .m-0').should('have.text', language ? 'Find resources to understand and navigate Canada\'s pension system.' :
      'FR Find resources to understand and navigate Canada\'s pension system.')
  })

  it('organization and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.get('[id = ":R1llm:-title"]').should('have.text', language ? 'Organizations' : 'FR Organizations')
    cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiCardContent-root > .m-0').should('have.text', language ? 'Learn how best to help and navigate clients as they plan for retirement.' :
      'FR Learn how best to help and navigate clients as they plan for retirement.')
  })
})