describe('test case id - 130 Digital Gateway Landing Footer Automate Footer link Landing page section ', () => {
    it('Testing all English footer link 1.) Sources of retirement income ', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Sources of retirement income').click({ force: true })
    })

    it('Testing all English footer link  2.) CPP Program Overview', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('CPP Program Overview').click({ force: true })
    })

    it('Testing all English footer link 3.) OAS Program Overview', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('OAS Program Overview').click({ force: true })
    })

    it('Testing all English footer link 4.) Saving for retirement', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li', { timeout: 10000 }).contains('Saving for retirement').click({ force: true })
    })

    it('Testing all English footer link 5.) Do you qualify for CPP retirement pension', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Do you qualify for CPP retirement pension').click({ force: true })
    })

    it('Testing all English footer link 6.) Contributions to the CPP', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Contributions to the CPP').click({ force: true })
    })

    it('Testing all English footer link 7.) Situations that can affect your pension amount', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Situations that can affect your pension amount').click({ force: true })
    })

    it('Testing all English footer link 7.) When to start your retirement pension', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('When to start your retirement pension').click({ force: true })
    })

    it('Testing all English footer link 8.) When to start your retirement pension', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('When to start your retirement pension').click({ force: true })
    })

    it('Testing all English footer link 9.) Do you qualify for the OAS pension', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Do you qualify for the OAS pension').click({ force: true })
    })

    it('Testing all English footer link 10.) How much could you receive from OAS', () => {
        cy.visit('/')
        cy.get('#english-button').click()

        cy.get('li').contains('How much could you receive from OAS').click({ force: true })
    })

    it('Testing all English footer link 1.) Learn', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Learn').click({ force: true })
    })

    it('Testing all English footer link 2.) Plan', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Plan').click({ force: true })
    })

    it('Testing all English footer link 3.) Apply', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Apply').click({ force: true })
    })

    it('Testing all English footer link 4.) Manage', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Manage').click({ force: true })
    })

    it('Testing all English footer link 4.) Community Resources', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Community Resources').click({ force: true })
    })

    it('Testing all English footer link 5.) Terms and onditions', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Terms and conditions').click({ force: true })
    })

    it('Testing all English footer link 6.) Privacy', () => {
        cy.visit('/')
        cy.get('#english-button').click()
        cy.get('li').contains('Privacy').click({ force: true })
    })
})
