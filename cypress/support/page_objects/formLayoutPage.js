import { createYield } from "typescript"

export class FormLayoutPage {

    submitInlineFormWithNameAndEmail(){
        cy.contains('nb-card', 'Inline form').find('')
    }
}


export const onFormLayoutsPage = new FormLayoutPage()