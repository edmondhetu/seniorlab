import { utility } from "../../support/Utility"

describe('test id 157 - verify Supporting Seniors - Landing page ', () => {
  beforeEach(() => {
    cy.visit('/en/home')
  })
  
  it('Supporting Seniors title is visible', () => {
    cy.get('h2').eq(2).should('be.visible')
  })

  it('Find all broken links - verify broken link on landing page', () => {
    cy.visit('/en/home')
    cy.get('a').each(link => {
      if (link.prop('href'))
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })

      cy.log(link.prop('href'))
    })
  })
})