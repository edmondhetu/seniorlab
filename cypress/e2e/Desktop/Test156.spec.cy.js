import { utility } from "../../support/Utility"

describe('test id 156 - verify Top Learning links - Landing page', () => {
  beforeEach(() => {
    cy.visit('/en/home')
  })
  
  it('Top learning title is visible', () => {
    cy.get('h3').eq(2).should('be.visible')
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