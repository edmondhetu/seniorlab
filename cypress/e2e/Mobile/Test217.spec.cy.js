var sizes = ["iphone-3", "iphone-6", "ipad-mini", "macbook-13", "macbook-11", "macbook-16"]
import { utility } from "../../support/Utility"

describe('Test id 217 - Automate - Footer - Mobile App', () => {
    context(`${sizes[0]} screen`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(sizes[0])
        })

        it('Sources of retirement income', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Sources of retirement income' : 'Sources of retirement income (FR)').click({ force: true })
        })

        it('CPP Program Overview', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'CPP Program Overview' : 'CPP Program Overview (FR)').click({ force: true })
        })

        it('OAS Program Overview', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'OAS Program Overview' : 'OAS Program Overview (FR)').click({ force: true })
        })

        it('Saving for retirement', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Saving for retirement' : 'Saving for retirement (FR)').click({ force: true })
        })

        it('Do you qualify for CPP retirement pension', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Do you qualify for CPP retirement pension' : 'Do you qualify for CPP retirement pension (FR)').click({ force: true })
        })

        it('Contributions to the CPP', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Contributions to the CPP' : 'Contributions to the CPP (FR)').click({ force: true })
        })


        it('Situations that can affect your pension amount', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Situations that can affect your pension amount' : 'Situations that can affect your pension amount (FR)').click({ force: true })
        })

        it('When to start your retirement pension', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'When to start your retirement pension' : 'When to start your retirement pension (FR)').click({ force: true })
        })

        it('Do you qualify for the OAS pension', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Do you qualify for the OAS pension' : 'Do you qualify for the OAS pension (FR)').click({ force: true })
        })

        it('How much could you receive from OAS', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'How much could you receive from OAS' : 'How much could you receive from OAS (FR)').click({ force: true })
        })

        it('Learn', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Learn' : 'Learn (FR)').click({ force: true })            
        })

        it('Plan', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Plan' : 'Plan (FR)').click({ force: true })            
        })

        it('Apply', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Apply' : 'Apply (FR)').click({ force: true })            
        })

        it('Manage', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Manage' : 'Manage (FR)').click({ force: true })            
        })

        it('Community Resources', () => {
            cy.get('#english-button').click()
            let language = new utility().getLanguageMobileScreen()            
            cy.get('li').contains(language ? 'Community Resources' : 'Community Resources (FR)').click({ force: true })            
        })


    })
})

