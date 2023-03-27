describe('test id 155 - verify Learn link - Landing page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('learn text', () => {
      cy.get('#english-button').click()
      cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .px-10 > .h1')
        .should('have.text', 'Learn ')
    })
  
    it('learn content', () => {
      cy.get('#english-button').click()
      cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(1)')
        .should('have.text', 'Learn about the "three pillars" of Canada\'s retirement system.')
      cy.get(':nth-child(1) > .max-h-0 > :nth-child(1) > .flex-col > .px-10 > .justify-center > :nth-child(2)')
        .should('have.text', 'There are many factors to consider before retiring to help ensure that you can comfortably retire.')
    })
  })