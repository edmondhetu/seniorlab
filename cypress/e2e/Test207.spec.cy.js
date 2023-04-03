var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../support/Utility"

describe('test id 207 - Navigation with resolutions', () => {
    context(`${sizes[0]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[0])
        })

        it('Top learning title not visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .h3').should('not.visible', language ? 'Top Learning Links' : 'Top Learning Links (FR)')
        })

        it('Government Benefits link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > :nth-child(2)')
                .should('have.text', language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
        })

        it('Source of retirement income link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > :nth-child(2)')
                .should('have.text', language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
        })

        it('Financial Support link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > :nth-child(2)')
                .should('have.text', language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
        })
    })

    context(`${sizes[1]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[1])
        })

        it('Top learning title not visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .h3').should('not.visible', language ? 'Top Learning Links' : 'Top Learning Links (FR)')
        })

        it('Government Benefits link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > :nth-child(2)')
                .should('have.text', language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
        })

        it('Source of retirement income link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > :nth-child(2)')
                .should('have.text', language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
        })

        it('Financial Support link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > :nth-child(2)')
                .should('have.text', language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
        })
    })

    context(`${sizes[2]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[2])
        })

        it('Top learning title is visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .h3').should('is.visible', language ? 'Top Learning Links' : 'Top Learning Links (FR)')
        })

        it('Government Benefits link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > :nth-child(2)')
                .should('have.text', language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
        })

        it('Source of retirement income link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > :nth-child(2)')
                .should('have.text', language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
        })

        it('Financial Support link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > :nth-child(2)')
                .should('have.text', language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
        })
    })

    context(`${sizes[3]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[3])
        })

        it('Top learning title is visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .h3').should('be.visible', language ? 'Top Learning Links' : 'Top Learning Links (FR)')
        })

        it('Government Benefits link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > :nth-child(2)')
                .should('have.text', language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
        })

        it('Source of retirement income link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > :nth-child(2)')
                .should('have.text', language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
        })

        it('Financial Support link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > :nth-child(2)')
                .should('have.text', language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
        })
    })

    context(`${sizes[4]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[4])
        })

        it('Top learning title is visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .h3').should('be.visible', language ? 'Top Learning Links' : 'Top Learning Links (FR)')
        })

        it('Government Benefits link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > :nth-child(2)')
                .should('have.text', language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
        })

        it('Source of retirement income link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > :nth-child(2)')
                .should('have.text', language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
        })

        it('Financial Support link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > :nth-child(2)')
                .should('have.text', language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
        })
    })

    context(`${sizes[5]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[5])
        })

        it('Top learning title is visible', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .h3').should('be.visible', language ? 'Top Learning Links' : 'Top Learning Links (FR)')
        })

        it('Government Benefits link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > :nth-child(2)')
                .should('have.text', language ? 'Learn about CPP/QPP and OAS' : '(FR) Learn about CPP/QPP and OAS')
        })

        it('Source of retirement income link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > :nth-child(2)')
                .should('have.text', language ? 'Your income during retirement will typically come from three main sources' : '(FR) Your income during retirement will typically come from three main sources')
        })

        it('Financial Support link title and paragraph content', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')

            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > :nth-child(2)')
                .should('have.text', language ? 'Learn about your different financial support options.' : '(FR) Learn about your different financial support options.')
        })
    })
})