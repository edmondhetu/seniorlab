import { utility } from "../../support/Utility"

describe('test id 133 - verify Button/Links - Landing page top section', () => {
  beforeEach(() => {
    cy.visit('/en/home', {
      onBeforeLoad: spyOnAddEventListener
    }).then({ timeout: 10000 }, waitForAppStart)
  })

  it('language link - verify is visible, clickable, html attributes and url pathname.', () => {
    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('[data-cy="toggle-language-link"]').should('have.attr', 'lang', 'fr')
      .and('have.attr', 'href', '/fr/home')
      .and('be.visible')
    cy.location('pathname').should('equal', '/fr/home')
    cy.contains('Retirement Hub (FR)')

    cy.get('[data-cy="toggle-language-link"]').click()
    cy.get('[data-cy="toggle-language-link"]').should('have.attr', 'lang', 'en')
      .and('have.attr', 'href', '/en/home')
      .and('be.visible')
    cy.location('pathname').should('equal', '/en/home')
    cy.contains('Retirement Hub')
  })

  it('checklist button - verify is visible, clickable, html attributes and url pathname', () => {
    let language = new utility().getLanguageTabletOrMonitorScreen()

    cy.get('.flex > .MuiButtonBase-root').should('have.attr', 'href', language ? '/en/learn' : '/fr/learn')
      .and('be.visible')
    cy.location('pathname').should('equal', language ? '/en/home' : '/fr/home')
    cy.get('.flex > .MuiButtonBase-root').click()
    cy.location('pathname').should('equal', language ? '/en/learn' : '/fr/learn')
  })

  it('find all broken links - verify broken link on landing page', () => {
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

beforeEach(() => {
  cy.request({ url: '/404', failOnStatusCode: false })
    .its('status')
    .should('equal', 403)
  cy.visit('/404', { failOnStatusCode: false })
})

describe('not found page loads', () => {
  it('status 404 - verify displays the not found page with 404 in pathname', () => {
    cy.location('pathname').should('equal', '/404')
  })

  it('status 404 - should have correct title', () => {
    cy.title().should('eq', 'Not Found | Pas trouvé - Canada.ca')
  })
})

function waitForAppStart() {
  // keeps rechecking "appHasStarted" variable
  return new Cypress.Promise((resolve, reject) => {
    const isReady = () => {
      if (appHasStarted) {
        return resolve()
      }
      setTimeout(isReady, 0)
    }
    isReady()
  })
}

let appHasStarted
function spyOnAddEventListener(win) {
  // win = window object in our application
  const addListener = win.EventTarget.prototype.addEventListener
  win.EventTarget.prototype.addEventListener = function (name) {
    if (name === 'change') {
      // web app added an event listener to the input box -
      // that means the web application has started
      appHasStarted = true
      // restore the original event listener
      win.EventTarget.prototype.addEventListener = addListener
    }
    return addListener.apply(this, arguments)
  }
}



