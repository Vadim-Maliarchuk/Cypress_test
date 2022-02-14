/// <reference types="Cypress" />

it('Factorial 990 max', ()=> {
    cy.visit('http://qainterview.pythonanywhere.com')
        .get('.form-control.input-lg')
        .type(990)
        .get('.btn.btn-success.btn-lg')
        .click()
        
           
   })  
