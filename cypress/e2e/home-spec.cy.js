describe('rancid tomatillos homepage user flows', () => {

  beforeEach(() => {
    // cy.intercept("GET", "http://localhost:3000", {
    //   statusCode: 200,
    // })
    cy.visit('http://localhost:3000');
  });

  it('should confirm that the right elements are displayed upon navigating to the app', () => {
    // cy.wait(500)
    // cy.get('wait.input1').contains('movie-card-image-container')
    cy.contains('h1', 'RANCID')
    cy.contains('h2', 'TOMATILLOS')

  })
})