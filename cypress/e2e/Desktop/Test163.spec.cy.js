import { utility } from "../../support/Utility"

describe('test id 163 - verify Learn overview - Explore our Content - Manage Money in retirement', () => {
    beforeEach(() => {
        cy.visit('/en/learn')
    })
    it('Learn overview - Explore our Content - Manage Money in retirement content', () => {
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.contains(language ? 'Managing your money in retirement' : '(FR) Managing your money in retirement')
        cy.contains(language ? 'Prepare for old age by exploring retirement income sources and learn how to manage your money after you retire.' :
            '(FR) Prepare for old age by exploring retirement income sources and learn how to manage your money after you retire.')
    })

    it('Learn overview - card 1 content', () => {
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.get(':nth-child(1) > .grid > :nth-child(1) > .MuiButtonBase-root > .MuiCardContent-root > .text-sm')
            .should('have.text', language ? '9 min read' : '(FR) 9 min read')
        cy.get('#section-0-card-0')
            .should('have.text', language ? 'Main sources of retirement income' : '(FR) Main sources of retirement income')
        cy.get(':nth-child(2) > .grid > :nth-child(1) > .MuiButtonBase-root > .MuiCardContent-root > .m-0')
            .should('have.text', language ? 'You can choose when to start your old age benefits. Understand what to consider in making that decision.' :
                '(FR) You can choose when to start your old age benefits. Understand what to consider in making that decision.')
    })

    it('Learn overview - card 2 content', () => {
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.get(':nth-child(2) > .grid > :nth-child(2) > .MuiButtonBase-root > .MuiCardContent-root > .text-sm')
            .should('have.text', language ? '7 min read' : '(FR) 7 min read')
        cy.get('#section-1-card-1')
            .should('have.text', language ? 'From work to retirement' : '(FR) From work to retirement')
        cy.get(':nth-child(1) > .grid > :nth-child(2) > .MuiButtonBase-root > .MuiCardContent-root > .m-0')
            .should('have.text', language ? 'Explore how to maximize your savings and better manage your money in retirement.' :
                '(FR) Explore how to maximize your savings and better manage your money in retirement.')
    })

    it('Learn overview - card 1 link click url redirects to /en/fr/ when accessing /en/fr', () => {
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.wait(2000)
        cy.get('#section-0-card-0').click()
        cy.location('pathname').should('equal', language ? '/en/learn/retirement-income-sources' : '/fr/learn/retirement-income-sources')
        cy.get('h1').should('have.text', language ? 'Overview of retirement income sources' : '(FR) Overview of retirement income sources')
    })

    it('Learn overview - card 2 link click url redirects to /en/fr/ when accessing /en/fr', () => {
        let language = new utility().getLanguageTabletOrMonitorScreen()
        cy.wait(2000)
        cy.get('#section-0-card-1').click()
        cy.location('pathname').should('equal', language ? '/en/learn/planning-to-save-for-retirement' : '/fr/learn/planning-to-save-for-retirement')
        cy.get('h1').should('have.text', language ? 'Planning to save for retirement' : '(FR) Planning to save for retirement')
    })
})