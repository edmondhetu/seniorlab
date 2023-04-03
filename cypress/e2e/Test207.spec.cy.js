var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../support/Utility"

describe('test id 207 - Navigation with resolutions', () => {
    context(`${sizes[0]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[0])
        })

        it('Government Benefits', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
        })

        it('Source of retirement income', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
        })

        it('Financial Support', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')
        })
    })

    context(`${sizes[1]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[1])
        })

        it('Government Benefits', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
        })

        it('Source of retirement income', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
        })

        it('Financial Support', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')
        })
    })

    context(`${sizes[2]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[2])
        })

        it('Government Benefits', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.log(language)
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
        })

        it('Source of retirement income', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
        })

        it('Financial Support', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')
        })
    })

    context(`${sizes[3]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[3])
        })

        it('Government Benefits', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.log(language)
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
        })

        it('Source of retirement income', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
        })

        it('Financial Support', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')
        })
    })

    context(`${sizes[4]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[4])
        })

        it('Government Benefits', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
        })

        it('Source of retirement income', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
        })

        it('Financial Support', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')
        })
    })

    context(`${sizes[5]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[5])
        })

        it('Government Benefits', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(1) > .py-3 > .h4')
                .should('have.text', language ? 'Government Benefits 101' : 'Government Benefits 101 (FR)')
        })

        it('Source of retirement income', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(2) > .py-3 > .h4')
                .should('have.text', language ? 'Sources of retirement income' : 'Sources of retirement income (FR)')
        })

        it('Financial Support', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageTabletOrMonitorScreen()
            cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .pt-5 > .py-2 > :nth-child(3) > .py-3 > .h4')
                .should('have.text', language ? 'Financial Support' : 'Financial Support (FR)')
        })
    })
})