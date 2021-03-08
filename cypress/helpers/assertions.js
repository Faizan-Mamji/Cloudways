export const assertText = (selector, input) => {
    cy.get(selector, {timeout : 6000}).should("contain", input)
}