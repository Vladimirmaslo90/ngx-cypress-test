/// <reference types="cypress" />

describe('Our first suite', () => {
  it('first test', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
    //by Tag name
    cy.get('input')

    //by Id
    cy.get('#inputEmail')

    //by Class name
    cy.get('.input-full-width')

    //by attribute name
    cy.get('[placeholder]');

    //by attribute name and value
    cy.get('[placeholder="Email"]');

    //by class Value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by tag name and attribute and value
    cy.get('input[placeholder="Email"]')

    //by 2 different attributes
    cy.get('[placeholder="Email"][type="Email"]')

    // by tag name, attribute with valu, id and class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    //the most recommended way 
    cy.get('[data-cy="imputEmail1"]');
  })
  it.only('second test', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.get('[data-cy="signInButton"]');
    cy.contains('Sign in');
    cy.contains('[status="warning"]', 'Sign in');

    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()

    cy.contains('nb-card', 'Horizontal form').find('[type="Email"]')


  })
})
