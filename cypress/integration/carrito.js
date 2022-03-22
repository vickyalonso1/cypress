describe("Carrito", () => {
  beforeEach(() => {
    cy.visit("/"); //toma como sitio padre lo que indique en baseUrl en el cypress.json
  });
  it("Añadir al carrito", () => {
    /*    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_product > h2').contains('Product successfully added to your shopping cart') */
    cy.carrito();
    cy.fixture("carrito").then((carrito) => {
      cy.get(carrito.addCart).contains(
        "Product successfully added to your shopping cart"
      );
    });
  });
});
