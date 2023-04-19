import { utility } from "../../support/Utility"

describe('test id 157 - verify Supporting Seniors - Landing page ', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('family and friends link and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()

    cy.contains(language ? 'Family and FriendsLearn how you can help your loved ones enter the retirement stage in their life.' :
      'FR Family and FriendsLearn how you can help your loved ones enter the retirement stage in their life.')
      .should('have.text', language ? 'Family and FriendsLearn how you can help your loved ones enter the retirement stage in their life.' :
        'FR Family and FriendsLearn how you can help your loved ones enter the retirement stage in their life.')
  })

  it('representatives and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.contains(language ? 'RepresentativesFind resources to understand and navigate Canada\'s pension system.' :
      'FR RepresentativesFind resources to understand and navigate Canada\'s pension system.')
      .should('have.text', language ? 'RepresentativesFind resources to understand and navigate Canada\'s pension system.' :
        'FR RepresentativesFind resources to understand and navigate Canada\'s pension system.')
  })

  it('organization and paragraph content', () => {
    cy.get('#english-button').click()
    let language = new utility().getLanguageTabletOrMonitorScreen()
    cy.contains(language ? 'OrganizationsLearn how best to help and navigate clients as they plan for retirement.' :
      'FR OrganizationsLearn how best to help and navigate clients as they plan for retirement.')
      .should('have.text', language ? 'OrganizationsLearn how best to help and navigate clients as they plan for retirement.' :
        'FR OrganizationsLearn how best to help and navigate clients as they plan for retirement.')
  })
})