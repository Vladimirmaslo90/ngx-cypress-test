import {navigateTo} from "../support/page_objects/navigationPage"

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.visit('/');
    })

    it('verify navigation across the pages', () => {
        navigateTo.formLayoutsPage();
        navigateTo.datepickerPage();
    })

    it('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        
    })
})