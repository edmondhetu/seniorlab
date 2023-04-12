import { utility } from "../support/Utility"

describe('test id 163 - verify Learn overview - Explore our Content - Manage Money in retirement', () => {
    beforeEach(() => {
        cy.visit('en/learn')
    })
    it('Learn overview - Explore our Content - Manage Money in retirement content', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.contains(language ? 'Explore our content' : '(FR) Explore our content')
        cy.contains(language ? 'Managing your money in retirement' : '(FR) Managing your money in retirement')
        cy.contains(language ? 'Prepare for a comfortable retirement by exploring our money management section, which includes guidance on personal savings, identifying potential income sources, tax implications, and more - all with CPP and OAS benefits in mind.' :
            '(FR) Prepare for a comfortable retirement by exploring our money management section, which includes guidance on personal savings, identifying potential income sources, tax implications, and more - all with CPP and OAS benefits in mind.')
    })

    it('Learn overview - card 1 content', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.get(':nth-child(2) > .grid > :nth-child(1) > .no-underline > .p-6 > .text-xs').should('have.text',language ? '5 MIN READ' : '(FR) 5 MIN READ')
        cy.get('#section-0-card-0').should('have.text',language ? 'Overview of retirement income sources' : '(FR) Overview of retirement income sources')
        cy.get(':nth-child(2) > .grid > :nth-child(1) > .no-underline > .p-6 > .text-base').should('have.text', language ? 'Learn about public & private pensions, personal savings and investments.' : '(FR) Learn about public & private pensions, personal savings and investments.')
    })

    it('Learn overview - card 2 content', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.get(':nth-child(2) > .grid > :nth-child(2) > .no-underline > .p-6 > .text-xs').should('have.text',language ? '5 MIN READ' : '(FR) 5 MIN READ')
        cy.get('#section-0-card-1').should('have.text',language ? 'Planning to save for retirement' : '(FR) Planning to save for retirement')
        cy.get(':nth-child(2) > .grid > :nth-child(2) > .no-underline > .p-6 > .text-base').should('have.text', language ? 'Learn how to maximize your savings and to better manage your money in retirement.' : '(FR) Learn how to maximize your savings and to better manage your money in retirement.')
    })

    it('Learn overview - card 1 link click url redirects to /en/fr/ when accessing /en/fr', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.wait(2000)
        cy.get('#section-0-card-0').click()
        cy.location('pathname').should('equal', language ? '/en/learn/retirement-income-sources' : '/fr/learn/retirement-income-sources')
        cy.get('h1').should('have.text', language ? 'Overview of retirement income sources' : '(FR) Overview of retirement income sources')
    })

    it('Learn overview - card 2 link click url redirects to /en/fr/ when accessing /en/fr', () => {
        //cy.get('#english-button').click()
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.wait(2000)
        cy.get('#section-0-card-1').click()
        cy.location('pathname').should('equal', language ? '/en/learn/planning-to-save-for-retirement' : '/fr/learn/planning-to-save-for-retirement')
        cy.get('h1').should('have.text', language ? 'Planning to save for retirement' : '(FR) Planning to save for retirement')
    })
})