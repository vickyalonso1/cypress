describe("Search elements", () => {
  beforeEach(() => {
    cy.visit("/"); //toma como sitio padre lo que indique en baseUrl en el cypress.json
  });
  it("Search for elements with multiple results", () => {
    cy.search("dress");
    /* Vamos a sustituir esto en commands.js  
        cy.fixture('index').then((index)=>{  //buscarme un archivo dentro la carpeta fixtures y me traera todos los elementos
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click(); 
        }) */
    cy.fixture("searchResults").then((searchResults) => {
      cy.get(searchResults.title).should("contain", "dress");
      //cy.get(searchResults.title).contains('"dress"') mismo que lo anterior
    });
  });
  it("Search for elements with no results", () => {
    cy.search("nada");
    /*
        cy.fixture('index').then((index)=>{  //buscarme un archivo dentro la carpeta fixtures y me traera todos los elementos
            cy.get(index.searchBox).type('nada');
            cy.get(index.searchButton).click();
        })*/
    cy.fixture("searchNoResults").then((searchNoResults) => {
      //buscarme un archivo dentro la carpeta fixtures y me traera todos los elementos
      cy.get(searchNoResults.alert).contains(
        "No results were found for your search"
      );
    });
  });
});
