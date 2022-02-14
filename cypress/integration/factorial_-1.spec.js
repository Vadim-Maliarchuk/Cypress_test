/// <reference types="Cypress" />

it('Factorial -1', ()=> {
    cy.visit('http://qainterview.pythonanywhere.com')
        .get('.form-control.input-lg')
        .type(-1)
        .get('.btn.btn-success.btn-lg')
        .click()
        
           
   })  