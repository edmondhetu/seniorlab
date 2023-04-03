
describe('Broken Link', () => {

    beforeEach(() => {
  
      cy.viewport(1280, 1000)
  
    })
  
    it('Find all broken links', () => {
  
      cy.visit('https://seniors-journey-test.dev-dp.dts-stn.com/')
  
      //cy.get('footer a').each(link => {
      cy.get('a').each(link => {
  
        if (link.prop('href'))
  
          cy.request({
  
            url: link.prop('href'),
  
            failOnStatusCode: false
  
          })
  
        cy.log( link.prop('href'))
  
      })
  
    })

    //it('should redirect to the expectations page if terms have not been accepted yet', () => {
    //cy.visit('https://seniors-journey-test.dev-dp.dts-stn.com/')
    //cy.location('pathname').should('eq', '/en/cpp-program-overview')
    //})
  
  })
  