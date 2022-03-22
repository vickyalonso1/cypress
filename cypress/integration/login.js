describe("Login", () => {
  beforeEach(() => {
    cy.visit("/"); //toma como sitio padre lo que indique en baseUrl en el cypress.json
  });
  it("Login with incorrect email", () => {
    cy.login("algo", "algo");
    cy.fixture("login").then((login) => {
      /*    cy.get(login.loginLink).click()
            cy.get(login.email).type('algo')
            cy.get(login.password).type('algo')
            cy.get(login.loginButton).click()*/
      cy.get(login.incorrectLoginBanner).contains("Invalid email address");
    });
    /*    cy.get('.login').click()
        cy.get('#email').type('algo')
        cy.get('#passwd').type('algo')
        cy.get('#SubmitLogin > span').click()
        cy.get('ol > li').contains('Invalid email address')
    */
  });
});
