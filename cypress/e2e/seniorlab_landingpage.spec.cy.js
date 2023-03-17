let baseUrl = 'https://seniors-journey-test.dev-dp.dts-stn.com/'

describe('landing page test', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
  })
  it('verify text and links are returning 200 status', () => {
    cy.url().should('include', 'https://seniors-journey-test.dev')

    cy.contains('Government of Canada')

    cy.get('#english-button').contains('English')
    cy.get('#french-button').contains('Français')
    cy.contains('Terms & conditions')
    cy.contains('Avis')

    cy.request({ url: 'https://seniors-journey-test.dev-dp.dts-stn.com/en' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
    cy.request({ url: 'https://seniors-journey-test.dev-dp.dts-stn.com/fr' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
    cy.request({ url: 'https://www.canada.ca/en/transparency/terms.html' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
    cy.request({ url: 'https://www.canada.ca/fr/transparence/avis.html' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('verify clicking english brings user to selected language on home page', () => {
    cy.get('#english-button').click()
    cy.url().should('include', 'en/home')
    cy.get('h1').should('have.text', 'Home')
  })

  it('verify clicking french brings user to selected language on home page', () => {
    cy.get('#french-button').click()
    cy.url().should('include', 'fr/home')
    cy.get('h1').should('have.text', 'Acceuil')
  })
})

describe('home page test', () => {
  it('verify text and links are links are returning 200 status', () => {
    cy.visit(baseUrl)
    cy.get('#english-button').click()
    cy.url().should('include', '/home')
    cy.get('h1').should('have.text', 'Home')

    cy.contains('Social media').should('have.attr', 'data-cy', 'social-media-link')
    cy.contains('Mobile applications').should('have.text', 'Mobile applications')
    cy.contains('About Canada.ca').should('have.text', 'About Canada.ca')
    cy.contains('Terms and conditions').should('have.text', 'Terms and conditions')
    cy.contains('Privacy').should('have.text', 'Privacy')

    cy.request({ url: 'https://www.canada.ca/en/social.html' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
    cy.request({ url: 'https://www.canada.ca/en/mobile.html' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
    cy.request({ url: 'https://www.canada.ca/en/government/about.html' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
    cy.request({ url: 'https://www.canada.ca/en/transparency/terms.html' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
    cy.request({ url: 'https://www.canada.ca/en/transparency/privacy.html' })
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
})
