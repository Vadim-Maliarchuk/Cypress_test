/// <reference types="Cypress" />

it('Factorial link', ()=> {
    cy.visit('http://qainterview.pythonanywhere.com')
    cy.get('a').should('have.attr', 'href', '/privacy')
    

})