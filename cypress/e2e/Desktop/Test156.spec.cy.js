

describe('test id 156 - verify Top Learning links - Landing page', () => {
  const langs = ['en', 'fr']
  const sizes = ['macbook-13', 'macbook-11', 'macbook-16']

  langs.forEach(lang => {
    const expectedLinks = [`/${lang}/test`, `/${lang}/test2`, `/${lang}/test3`]

    it(`[${lang}]Top learning title is visible`, () => {
      cy.visit(`/${lang}/home`, {
        onBeforeLoad: spyOnAddEventListener
      }).then({ timeout: 10000 }, waitForAppStart)
      
      cy.get('h3').eq(2).should('be.visible')
    })

    sizes.forEach(size => {
      it(`[${lang}] - ${size} - Main sources of retirement income link click url redirects to /en/fr/ when accessing /en/fr`, () => {
        const actualLinks = []

        cy.visit(`/${lang}/home`)
          .viewport(size)
          .get('#mainContent li a')
          .each($a => actualLinks.push($a.attr('href')))
          .then(() => {
            expectedLinks.forEach(expectedLink => {
              assert.isTrue(actualLinks.includes(expectedLink), `Expected link ${expectedLink} was not found on page`)
            })
          })
      })
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
