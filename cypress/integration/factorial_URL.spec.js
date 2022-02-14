/// <reference types="Cypress" />

it('Check URL', ()=> {
    cy.visit('http://qainterview.pythonanywhere.com')
   cy.url()
         .should('eq', 'http://qainterview.pythonanywhere.com/')
   
   })
