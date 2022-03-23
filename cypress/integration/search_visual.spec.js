describe("Search for dress - eyes", () => {
  beforeEach(() => {
    cy.visit("/"); //toma como sitio padre lo que indique en baseUrl en el cypress.json
  });

  afterEach(() => {
  });

  it("eyes shoulds return dresses", () => {
    cy.get("#search_query_top").type("dress");
    cy.get("#searchbox > .btn").click();
    cy.get(".lighter").contains('"dress"');
  });
});
