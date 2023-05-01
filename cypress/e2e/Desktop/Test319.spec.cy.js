import { utility } from "../../support/Utility"

describe('test id 319 - Main Sources of retirement income - Learning page', () => {
  beforeEach(() => {
    cy.visit('/en/learn/retirement-income-sources#overview', {
      onBeforeLoad: spyOnAddEventListener
    }).then({ timeout: 10000 }, waitForAppStart)
  })

  it('left menu items are hidden \'Overview of retirement income sources\'', () => {
    for (var i = 0; i < 6; i++) {
      cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(i)
        .should('not.be.visible')
    }
  })

  it('left menu item 1 \'Overview\'', () => {
    let language = new utility().getLanguage()
    cy.wait(2000)
    cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(0).click({ force: true })
    cy.location('pathname').should('equal', language ? '/en/learn/retirement-income-sources' : '/fr/learn/retirement-income-sources')
  })

  it('left menu item 2 \'Canada\'s retirement income system\'', () => {
    let language = new utility().getLanguage()
    cy.wait(2000)
    cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(1).click({ force: true })
    cy.location('pathname').should('equal', language ? '/en/learn/retirement-income-sources' : '/fr/learn/retirement-income-sources')
  })

  it('left menu item 3 \'Old Age Security (OAS) program\'', () => {
    let language = new utility().getLanguage()
    cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(2).click({ force: true })
    cy.location('pathname').should('equal', language ? '/en/learn/retirement-income-sources' : '/fr/learn/retirement-income-sources')
  })

  it('left menu item 4 \'Canada Pension Plan (CPP) program\'', () => {
    let language = new utility().getLanguage()
    cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(3).click({ force: true })
    cy.location('pathname').should('equal', language ? '/en/learn/retirement-income-sources' : '/fr/learn/retirement-income-sources')
  })

  it('left menu item 5 \'Ongoing earnings from your job\'', () => {
    let language = new utility().getLanguage()
    cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(4).click({ force: true })
    cy.location('pathname').should('equal', language ? '/en/learn/retirement-income-sources' : '/fr/learn/retirement-income-sources')
  })

  it('left menu item 6 \'Personal retirement savings\'', () => {
    let language = new utility().getLanguage()
    cy.get('li.MuiListItem-root.MuiListItem-gutters.mui-style-pjl2lh').eq(5).click({ force: true })
    cy.location('pathname').should('equal', language ? '/en/learn/retirement-income-sources' : '/fr/learn/retirement-income-sources')
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