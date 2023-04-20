var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../../support/Utility"

describe('test id 215 - Automate - Contact Us - Mobile', () => {
    context(`${sizes[0]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[0])
        })

        it('Contact Us', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()

            cy.scrollTo('center')

            cy.get('#mainContent > :nth-child(5)')
                .should('have.text', language ? 'Contact Us' : '(FR)Contact Us')
                .and('be.visible')

            cy.wait(2000)
            cy.get('#mainContent > :nth-child(6)')
                .should('have.text', language ? 'Our call centres and Service Canada Centres operate Monday to Friday, from 8:30 a.m. to 4:00 p.m., your local time. They are closed on statuary holidays.'
                    : '(FR)Our call centres and Service Canada Centres operate Monday to Friday, from 8:30 a.m. to 4:00 p.m., your local time. They are closed on statuary holidays.')
                .and('be.visible')

            cy.wait(2000)
            cy.get('.mb-6 > .mb-2')
                .should('have.text', language ? 'Call us' : '(FR)Call us')
                .and('be.visible')

            cy.wait(2000)
            cy.get('.mb-6 > .mt-3')
                .should('have.text', language ? 'You can reach us at either of the numbers below.' : '(FR)You can reach us at either of the numbers below.')
                .and('be.visible')

            cy.wait(2000)
            cy.get('.mb-6 > :nth-child(4)')
                .should('have.text', language ? 'Toll free: 1-800-000-000' : '(FR)Toll free: 1-800-000-000')
                .and('be.visible')

            cy.contains(language ? 'Direct Number: 1-800-000-000' : '(FR)Direct Number: 1-800-000-000')

            cy.wait(2000)
            cy.get(':nth-child(8) > .mb-2')
                .should('have.text', language ? 'Find an office' : '(FR)Find an office')
                .and('be.visible')

            cy.wait(2000)
            cy.get(':nth-child(8) > .mt-3')
                .should('have.text', language ? 'Find a Service Canada Centre near you using the link below.' : '(FR)Find a Service Canada Centre near you using the link below.')
                .and('be.visible')

            cy.wait(2000)
            cy.get(':nth-child(8) > .MuiTypography-root').click({ force: true })
                .should('have.text', language ? 'Find a Service Canada Centre' : '(FR)Find a Service Canada Centre')
                .and('be.visible')
        })
    })
})


