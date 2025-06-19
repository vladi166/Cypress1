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
Cypress.Commands.add("login", (email, password) => {
    cy.visit("/");
    cy.contains("Log in").click();
    if (email) {
        cy.get("#mail").type(email);
    }
    if (password) {
        cy.get("#pass").type(password);
    }
    cy.contains("Submit").click();
});

Cypress.Commands.add("addBook", (book) => {
    cy.contains("Add new").click();
    cy.contains("Book description");
    cy.get("#title").type(book.title);
    cy.get("#description").type(book.description);
    cy.get("#authors").type(book.author);
    cy.contains("Submit").click();
});

Cypress.Commands.add("addFavoriteBook", (book) => {
    cy.contains("Add new").click();
    cy.contains("Book description");
    cy.get("#title").type(book.title);
    cy.get("#description").type(book.description);
    cy.get("#authors").type(book.author);
    cy.get("#favorite").click();
    cy.contains("Submit").click();
  });
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