/// <reference types="Cypress" />

it('Factorial 5', ()=> {
    cy.visit('http://qainterview.pythonanywhere.com')
        .get('.form-control.input-lg')
        .type(5)
        .get('.btn.btn-success.btn-lg')
        .click()
        .get('#resultDiv')
        
           .should('have.text', 'The factorial of 5 is: 120')
   })  

