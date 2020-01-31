describe('Demo test', () => {

  it('visit forms layout should pass', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.url().should('contain', 'layouts')

  })

  it('visit forms layout should fail', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    cy.url().should('contain', 'layouts1')

  })


})
