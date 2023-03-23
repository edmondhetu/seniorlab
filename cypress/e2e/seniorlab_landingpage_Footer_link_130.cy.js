let baseUrl = 'https://seniors-journey-dev.dev-dp.dts-stn.com/'


describe('Digital Gateway Landing Footer Automate Footer link Landing page section - Test case id: 130', () =>
{

    it('Testing all English footer link 1', () =>
    {
                
        cy.visit(baseUrl)

        cy.get('#english-button').click()

        
        cy.get('li').contains('Sources of retirement income').click()

        cy.get('li').contains('CPP Program Overview').click()

        cy.contains('OAS Program Overview').click()

        //cy.get('#__next > div > footer > div.wl-full.h-auto.text-white.bg-blue-dark > div > div > div.grow > ul > li:nth-child(3) > a').click()

        //cy.get('#__next > div > footer > div.wl-full.h-auto.text-white.bg-blue-dark > div > div > div.grow > ul > li:nth-child(4) > a').click()
        
        //cy.get('#__next > div > footer > div.wl-full.h-auto.text-white.bg-blue-dark > div > div > div.grow > ul > li:nth-child(5) > a').click()

    })
        
})



