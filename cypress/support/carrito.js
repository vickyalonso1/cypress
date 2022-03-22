Cypress.Commands.add('carrito',()=>{
    cy.fixture('carrito').then((carrito) =>{
        cy.get(carrito.dressesSection).click()
        cy.get(carrito.dressElement).click()
    })
})