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
  it('second test', () => {
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
  it('then and wrap methods', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
    // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

    //selenium
    // const firstForm = cy.contains('nb-card', 'Using the Grid');
    // const secondForm = cy.contains('nb-card', 'Basic form');

    // firstForm.find('[for="inputEmail1"]').should('contain', 'Email');
    // firstForm.find('[for="inputPassword2"]').should('contain', 'Password')

    // secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')
    // secondForm.find('[for="exampleInputPassword1"]').should('contain', 'Password')

    //cypress style
    cy.contains('nb-card', 'Using the Grid').then(firstForm => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();

      expect(emailLabelFirst).to.equal('Email');
      expect(passwordLabelFirst).to.equal('Password');
    })
  })
})
