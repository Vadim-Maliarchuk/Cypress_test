/// <reference types="Cypress" />

// it('By id', () => {
//     cy.visit("http://facebook.com/")
//     cy.get('#email')

// })

// it('By class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/blur#Syntax")
//     cy.get('.DocSearch DocSearch-Button')

// })

// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/blur#Syntax")
//     cy.get('nav')

// })

// it('By Tag value', () => {
//     cy.visit('http://www.facebook.com/')
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')

// })

// it('By Diffent Tag', () => {
//     cy.visit('http://www.facebook.com/')
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')

// })

// it('By Diffent Types', () => {
//     cy.visit('http://docs.cypress.io/api/commands/and#Yields')
//     cy.get('button[class="DocSearch DocSearch-Button"][type="button"]')

// })

// it.only('By Contains name', () => {
//     cy.visit('http://docs.cypress.io/api/commands/and#Yields')
//     cy.get('*[class^="line"]')

// })

it('Using Get with Find Eq', () => {
        cy.visit('http://next.privat24.ua/deposit/open')
        cy.get('tbody').find('td').find('div').find('button').eq(0)
    
    })

    it.only('Using Get with Find Eq', () => {
        cy.viewport(1800, 700)
        cy.visit('http://docs.cypress.io/api/commands/and#Chainers')
        cy.get('main').find('div').find('nav').find('li').find('a').eq(0)
    
    })