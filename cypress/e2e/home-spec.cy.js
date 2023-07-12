describe('rancid tomatillos homepage user flows', () => {

  beforeEach(() => {
    // cy.intercept("GET", "http://localhost:3000", {
    //   statusCode: 200,
    // })
    cy.visit('http://localhost:3000');
  });

  it('should confirm that all navbar elements are displayed upon navigating to the app', () => {
    // cy.wait(500)
    // cy.get('wait.input1').contains('movie-card-image-container')
    cy.contains('h1', 'RANCID')
    cy.contains('h2', 'TOMATILLOS')
    cy.get('img[name=tomato-image]')
      .should('be.visible')
    cy.contains('div', 'Welcome, user!')
  });
  
  it('should display all movie posters', () => {
    cy.get('.all-movies-container').children()
      .should('have.length', 40)
  });
  
  it('should display filter ribbon', () => {
    cy.get('input[name=searchbar]')
    cy.get('img[name=cross-icon]')
      .should('be.visible')
  });
});