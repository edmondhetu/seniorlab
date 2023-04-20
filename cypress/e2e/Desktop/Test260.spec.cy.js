import { utility } from "../../support/Utility"

describe('Test id 260 - Automate - Learn overview - Explore content - Making Retirement decision', () => {
    beforeEach(() => {
        cy.visit('/en/learn')
    })

    it('When to take government pensions', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()

        cy.contains(language ? 'Making retirement decisions' : '(FR) Making retirement decisions')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)')
            .should('have.text', language ? 'Feel more confident about your choices in retirement. Use these resources to better understand your options and their impact on your benefits.' :
                '(FR) Gain clarity and confidence when making retirement decisions with our comprehensive section on CPP and OAS pension timing and transitioning from work, designed to support and empower you on your retirement journey.')
       
        cy.get('#section-1-card-0').click({ force: true })
        cy.contains(language ? 'When to take government pensions' : '(FR) When to take government pensions')
        cy.get(':nth-child(2) > .grid > :nth-child(1) > .MuiButtonBase-root > .MuiCardContent-root > .m-0').should('have.text', language ? 'You can choose when to start your old age benefits. Understand what to consider in making that decision.' :
            '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
    })

    it('From work to retirement', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.wait(2000)
        cy.get('#section-1-card-1').click({ force: true })
        cy.contains(language ? 'From work to retirement' : '(FR) Transitioning from work')
        cy.get(':nth-child(2) > .grid > :nth-child(2) > .MuiButtonBase-root > .MuiCardContent-root > .m-0').should('have.text', language ? 'Many Canadians continue to work in retirement. Learn how the money you earn has an impact on your benefits.' :
        '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
    })

    it('Rules of thumb for federal old age benefits', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.wait(2000)
        cy.get('#section-1-card-2').click({ force: true })
        cy.contains(language ? 'Rules of thumb for federal old age benefits' : '(FR) Rules of thumb for CPP and OAS')
        cy.get(':nth-child(2) > .grid > :nth-child(3) > .MuiButtonBase-root > .MuiCardContent-root > .m-0').should('have.text', language ? 'Pension tips based on your personal situation.' :
        '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
    })
})