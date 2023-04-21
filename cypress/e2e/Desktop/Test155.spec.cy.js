import { utility } from "../../support/Utility"

//broken-link.cy.js
describe('test id 155 - verify Learn tab - Landing page', () => {
  beforeEach(() => {
    cy.viewport(1280, 1000)
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