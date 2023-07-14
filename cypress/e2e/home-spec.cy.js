describe('rancid tomatillos homepage user flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: '.././fixtures/all-movies-test.json'
    })
    .visit('http://localhost:3000');
  });
  
  it('should display all navbar elements upon navigating to the app', () => {
    cy.contains('h1', 'RANCID')
    cy.contains('h2', 'TOMATILLOS')
    cy.get('img[name=tomato-image]')
    cy.contains('div', 'Welcome, user!')
    cy.location('pathname').should('eq', '/');
  });
  
  it('should display filter ribbon', () => {
    cy.get('input[name=searchbar]')
    cy.get('img[name=cross-icon]')
  });
  
  it('should display all movie posters', () => {
    cy.get('.all-movies-container').children()
      .should('have.length', 5)
    cy.get('img[name=movie-poster]')
      .get('#436270')
    cy.contains('h3', 'Black Adam (2022)')
  });
  
  it('should direct a click to the clicked movie\'s details', () => {
    cy.get('img[name=movie-poster]')
      .get('#436270').click()
      .url().should('eq', 'http://localhost:3000/436270')
  })

  it('should display an error message for 400 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 400,
    })
    cy.contains('h3', 'Sorry, No movies to display')
  });

  it('should display an error message for 500 error', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
    })
    cy.contains('h3', 'Sorry, No movies to display')
  });

  it('should display an error message for 300 response', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 300,
    })
    cy.contains('h3', 'Sorry, No movies to display')
  });

});