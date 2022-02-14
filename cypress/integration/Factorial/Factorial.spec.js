/// <reference types="Cypress" />


describe('Позитивные тесты', function() {
    it('Factorial 0', ()=> {
        cy.visit('http://qainterview.pythonanywhere.com')
            .get('.form-control.input-lg')
            .type(0)
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', 'The factorial of 0 is: 1')
               
        }); 

        it('Factorial 5', ()=> {
        cy.get('.form-control.input-lg')
            .clear()
            .type(5)
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            
               .should('have.text', 'The factorial of 5 is: 120')
        });  

        it('Factorial link', ()=> {
        cy.get('a').should('have.attr', 'href', '/privacy')
        });
    
        it('Check URL', ()=> {
        cy.url()
             .should('eq', 'http://qainterview.pythonanywhere.com/')
        });
       
    });

    
    describe('Негативные тесты', function() {
        it('Factorial -1', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .type(-1)
            .get('.btn.btn-success.btn-lg')
            .click()
        });
        
        it('not filled', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .get('.btn.btn-success.btn-lg')
            .click()
        });
    
        it('Factorial 990 max', ()=> {
            cy.get('.form-control.input-lg')
            .type(990)
            .get('.btn.btn-success.btn-lg')
            .click()
        });

        it('Factorial 171', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .type(171)
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', 'The factorial of 171 is: Infinity')
        })  
    
    })



