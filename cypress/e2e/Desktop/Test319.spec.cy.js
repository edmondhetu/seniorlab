import { utility } from "../../support/Utility"

describe('test id 319 - verify Top Learning links - Landing page', () => {
  beforeEach(() => {
    cy.visit('/en/home', {
      onBeforeLoad: spyOnAddEventListener
    }).then({ timeout: 10000 }, waitForAppStart)
  })

  it('Top learning title is visible', () => {
    cy.get('h3').eq(2).should('be.visible')
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