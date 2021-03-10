import loginPOM from '../pageObjects/login'
import {dataSets} from '../helpers/businessHelper'
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
 Cypress.Commands.add("login", () => {
    loginPOM.visitPage(dataSets.url)
    loginPOM.txtUserName(dataSets.userName)
    loginPOM.txtPassword(dataSets.passWord)
    loginPOM.btnClickLogin()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
