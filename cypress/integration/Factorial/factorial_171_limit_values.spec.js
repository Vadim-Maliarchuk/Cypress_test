/// <reference types="Cypress" />

it('Factorial 171', ()=> {
    cy.visit('http://qainterview.pythonanywhere.com')
        .get('.form-control.input-lg')
        .type(171)
        .get('.btn.btn-success.btn-lg')
        .click()
        .get('#resultDiv')
        .should('have.text', 'The factorial of 171 is: Infinity')
           
   })  