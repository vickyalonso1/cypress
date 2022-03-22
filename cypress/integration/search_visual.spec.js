describe("Search for dress - eyes", () => {
  beforeEach(() => {
    cy.visit("/"); //toma como sitio padre lo que indique en baseUrl en el cypress.json
    cy.eyesOpen({ //this method initializes a test session.
      appName: "Cypress app",
      testName: "Search for dress",
    });
  });

  afterEach(() => {
    cy.eyesClose(); //this method ends the test session and lets the server know it should display the results.
  });

  it("eyes shoulds return dresses", () => {
    cy.get("#search_query_top").type("dress");
    cy.get("#searchbox > .btn").click();
    cy.get(".lighter").contains('"dress"');
    cy.eyesCheckWindow(); //check the entire browser window
  });
});
