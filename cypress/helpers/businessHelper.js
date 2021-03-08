export const dataSets = require('../fixtures/example.json')
export const click = (selector) => cy.get(selector)
export const typeText = (selector, text) => cy.get(selector).type(text)
