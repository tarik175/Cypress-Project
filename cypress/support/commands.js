import "cypress-file-upload"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



//This methods parameter is product name
//Then search for that product
//Then click on search button
Cypress.Commands.add("amazonSearch",(productname)=>{
    cy.visit("https://amazon.com")
    cy.get('#twotabsearchtextbox').type(productname)
    cy.get('#nav-search-submit-button').click()
    cy.screenshot()


})