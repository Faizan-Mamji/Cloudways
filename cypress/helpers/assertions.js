export const assertText = (selector, input) => {
    cy.get(selector).should("contain", input)
}