describe('rancid tomatillos homepage user flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  
  it('should display all navbar elements upon navigating to the app', () => {
    cy.contains('h1', 'RANCID')
    cy.contains('h2', 'TOMATILLOS')
    cy.get('img[name=tomato-image]')
    .should('be.visible')
    cy.contains('div', 'Welcome, user!')
  });
  
  it('should display filter ribbon', () => {
    cy.get('input[name=searchbar]')
    cy.get('img[name=cross-icon]')
    .should('be.visible')
  });
  
  it('should display all movie posters', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: '.././fixtures/all-movies-test.json'
    })
    cy.get('.all-movies-container').children()
      .should('have.length', 4)
    cy.get('img[name=movie-poster]')
      .get('#436270')
    cy.contains('h3', 'Black Adam (2022)')
  });

  it('should display error message through unsuccessful response'), () => {
    cy.intercept('GET', 'ttps://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      fixture: ''
    })
  }
});