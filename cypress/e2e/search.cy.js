describe('rancid tomatillos searchbar user flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: '.././fixtures/all-movies-test.json'
    })
    .visit('http://localhost:3000');
  });

});