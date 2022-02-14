/// <reference types="Cypress" />

it('not filled', ()=> {
    cy.visit('http://qainterview.pythonanywhere.com')
         .get('.form-control.input-lg')
         .clear()
         .and
            cy.get('.btn.btn-success.btn-lg')
             .click()
            
   
   })
