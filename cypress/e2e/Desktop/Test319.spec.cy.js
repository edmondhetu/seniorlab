import { utility } from "../../support/Utility"
var sizes = ["macbook-13", "macbook-11", "macbook-16"]

describe('test id 319 - Main Sources of retirement income - Learning page', () => {
  beforeEach(() => {
    cy.visit('/en/learn/retirement-income-sources#overview', {
      onBeforeLoad: spyOnAddEventListener
    }).then({ timeout: 10000 }, waitForAppStart)
  })

  it(`${sizes[0]} screen left menu items are visible \'Overview of retirement income sources\'`, () => {
    cy.viewport(sizes[0])
    for (var i = 0; i < 7; i++) {
      cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(i)
        .should('be.visible')
    }
  })

  it(`${sizes[1]} screenleft menu items are visible \'Overview of retirement income sources\'`, () => {
    cy.viewport(sizes[1])
    for (var i = 0; i < 7; i++) {
      cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(i)
        .should('be.visible')
    }
  })

  it(`${sizes[2]} screenleft menu items are visible \'Overview of retirement income sources\'`, () => {
    cy.viewport(sizes[2])
    for (var i = 0; i < 7; i++) {
      cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(i)
        .should('be.visible')
    }
  })

  it('left menu item 1 \'Overview\'', () => {
    cy.get('nav > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click({ force: true })
  })

  it('left menu item 2 \'Canada\'s retirement income system\'', () => {
    cy.get('nav > .MuiList-root > :nth-child(2) > .MuiButtonBase-root').click({ force: true })
  })

  it('left menu item 3 \'Old Age Security (OAS) program\'', () => {
    cy.get('nav > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click({ force: true })
  })

  it('left menu item 4 \'Canada Pension Plan (CPP) program\'', () => {
    cy.get('nav > .MuiList-root > :nth-child(4) > .MuiButtonBase-root').click({ force: true })
  })

  it('left menu item 5 \'Ongoing earnings from your job\'', () => {
    cy.get('nav > .MuiList-root > :nth-child(5) > .MuiButtonBase-root').click({ force: true })
  })

  it('left menu item 6 \'Workplace pension plans\'', () => {
    cy.get('nav > .MuiList-root > :nth-child(6) > .MuiButtonBase-root').click({ force: true })
  })

  it('left menu item 7 \'Personal retirement savings\'', () => {
    cy.get('nav > .MuiList-root > :nth-child(5) > .MuiButtonBase-root').click({ force: true })
  })

  it('Find all broken links - verify broken link on landing page', () => {
    cy.get('a').each(link => {
      if (link.prop('href'))
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })

      cy.log(link.prop('href'))
    })
  })

  describe('verify \'this OAS Pension page\' link', () => {
    it('\'this OAS Pension page\' link - click url redirects to /en when accessing /en', () => {
      cy.visit('/en/learn/retirement-income-sources#overview', {
        onBeforeLoad: spyOnAddEventListener
      }).then({ timeout: 10000 }, waitForAppStart)
      cy.get('a').eq(16).click({ force: true })
      cy.origin('https://www.canada.ca/en/', () => {
        cy.wait(3000)
        cy.location('pathname').should('equal', '/en/services/benefits/publicpensions/cpp/old-age-security/eligibility.html')
        cy.get('#wb-cont').should('be.visible')
      })
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
})