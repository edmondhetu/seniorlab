import { utility } from "../../support/Utility"

describe('Test id 260 - Automate - Learn overview - Explore content - Making Retirement decision', () => {
    beforeEach(() => {
        cy.visit('/en/learn')
    })

    it('When to take government pensions', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()

        cy.contains(language ? 'Making retirement decisions' : '(FR) Making retirement decisions')
        cy.get(':nth-child(3) > .font-normal')
            .should('have.text', language ? 'Gain clarity and confidence when making retirement decisions with our comprehensive section on CPP and OAS pension timing and transitioning from work, designed to support and empower you on your retirement journey.' :
                '(FR) Gain clarity and confidence when making retirement decisions with our comprehensive section on CPP and OAS pension timing and transitioning from work, designed to support and empower you on your retirement journey.')
        //.should('have.text', language ? 'Feel more confident about your choices in retirement. Use these resources to better understand your options and their impact on your benefits': '')

        cy.get('#section-1-card-0').click({ force: true })
        cy.contains(language ? 'When to take government pensions' : '(FR) When to take government pensions')
        cy.get(':nth-child(3) > .grid > :nth-child(1) > .no-underline > .p-6 > .text-base').should('have.text', language ? 'Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.' :
            '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
    })

    it('Transitioning from work', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.wait(2000)
        cy.get('#section-1-card-1').click({ force: true })
        cy.contains(language ? 'Transitioning from work' : '(FR) Transitioning from work')
        cy.get(':nth-child(3) > .grid > :nth-child(2) > .no-underline > .p-6 > .text-base').should('have.text', language ? 'Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.' :
        '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
    })

    it('Rules of thumb for CPP and OAS', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.wait(2000)
        cy.get('#section-1-card-2').click({ force: true })
        cy.contains(language ? 'Rules of thumb for CPP and OAS' : '(FR) Rules of thumb for CPP and OAS')
        cy.get(':nth-child(3) > .grid > :nth-child(3) > .no-underline > .p-6 > .text-base').should('have.text', language ? 'Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.' :
        '(FR) Lorem ipsum dolor sit amet consectetur. Gravida eget tristique in ipsum eget ornare libero.')
    })
})