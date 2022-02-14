/// <reference types="Cypress" />

it('Factorial 0', ()=> {
    cy.visit('http://qainterview.pythonanywhere.com')
        .get('.form-control.input-lg')
        .type(0)
        .get('.btn.btn-success.btn-lg')
        .click()
        .get('#resultDiv')
        .should('have.text', 'The factorial of 0 is: 1')
           
   })  