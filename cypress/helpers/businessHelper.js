export const dataSets = require('../fixtures/example.json')
export const clickElement = (selector) => cy.get(selector).click({ force: true })
export const elementHover = (selector) => cy.get(selector).trigger('mouseover')
export const typeText = (selector, text) => cy.get(selector).type(text)
