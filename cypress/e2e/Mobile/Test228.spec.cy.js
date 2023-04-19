var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../../support/Utility"

describe('Test id 228 - Top Section - Mobile', () => {
    context(`${sizes[1]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[1])
        })

        it('Friends and Family link title and paragraph content are visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get('.w-full > .mb-4')
                .should('have.text', language ? 'Learn and plan for your retirement' : '(FR) Learn and plan for your retirement')
                .and('be.visible')
            cy.get('.w-full > .m-0')
                .should('have.text', language ? 'It\'s never too early or too late to learn about your retirement options and plan for your future. Find out about public pensions, ways to save your money and tips to consider for your retirement income.' :
                    '(FR) It’s never too early or too late to learn about your retirement options and plan for your future. Find out about public pensions, ways to save your money and tips to consider for your retirement income.')
                .and('be.visible')
        })
    })
})

