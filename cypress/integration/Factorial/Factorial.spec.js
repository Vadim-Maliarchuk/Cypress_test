/// <reference types="Cypress" />

function factorial(FN){ 
    let result = 1; 
    while(FN){ 
        result *= FN--; 
    } 
    return result; 
}


describe('Позитивные тесты', function() {
    it('Factorial 0', ()=> {
        let FN = 0
        cy.visit('http://qainterview.pythonanywhere.com')
            .get('.form-control.input-lg')
            .type(`${FN}`)
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', `The factorial of ${FN} is: ${factorial(FN)}`)
               
    }); 

    it('Factorial 5', ()=> {
        let FN = 5
        cy.get('.form-control.input-lg')
            .clear()
            .type(`${FN}`)
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', `The factorial of ${FN} is: ${factorial(FN)}`)
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

    it('Entering a fractional number', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .type('0,5')
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', 'Please enter an integer')
    });
        
    it('Not filled', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .get('.btn.btn-success.btn-lg')
            .click()
    });
    
    it('Factorial 999999 max', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .type(999999)
            .get('.btn.btn-success.btn-lg')
            .click()
    });

    it('Factorial 171', ()=> {
            let FN = 171
            cy.get('.form-control.input-lg')
            .clear()
            .type(`${FN}`)
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', `The factorial of ${FN} is: Infinity`)
    });
});
    

describe('Fuzz-тестирование', function() {
    it('Factorial special characters', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .type('!@54')
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', 'Please enter an integer')
    }); 
        
    it('Entering Russian text', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .type('Русский текст')
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', 'Please enter an integer')
    }); 

    it('Entering English text', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .type('English text')
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', 'Please enter an integer')
    }); 

    it('Factorial special characters', ()=> {
            cy.get('.form-control.input-lg')
            .clear()
            .type('Русский текст')
            .get('.btn.btn-success.btn-lg')
            .click()
            .get('#resultDiv')
            .should('have.text', 'Please enter an integer')
    });
}); 


describe('Проверка ссылок на активность', function() {
    it('Check link', ()=> {
            cy.get('a').should('have.attr', 'href', '/privacy')
    });
        
    it('Check URL', ()=> {
            cy.url()
            .should('eq', 'http://qainterview.pythonanywhere.com/')
    });
});


