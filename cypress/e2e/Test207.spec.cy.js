import example from "/repos/seniorlab/cypress/fixtures/example.json"
import { utility } from "../support/Utility"

describe('test id 207 - Navigation with resolutions', () => {
    context(`${example.sizes[0]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(example.sizes[0])
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

    context(`${example.sizes[1]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(example.sizes[1])
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

    context(`${example.sizes[2]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(example.sizes[2])
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

    context(`${example.sizes[3]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(example.sizes[3])
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

    context(`${example.sizes[4]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(example.sizes[4])
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

    context(`${example.sizes[5]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(example.sizes[5])
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