let baseUrl = 'https://seniors-journey-dev.dev-dp.dts-stn.com/'


describe('Digital Gateway Landing Footer Automate Footer link Landing page section - Test case id: 130', () =>
{

    it('Testing all English footer link 1', () =>
    {
                
        cy.visit(baseUrl)

        cy.get('#english-button').click()

        
        

        cy.get('li', { timeout: 10000 }).contains('Do you qualify for CPP retirement pension').click()

        
    })
        
})
