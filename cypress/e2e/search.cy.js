describe('rancid tomatillos searchbar user flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: '.././fixtures/all-movies-test.json'
    })
    .visit('http://localhost:3000');
  });

  it('should be able to search for movies using keywords in searchbar on homepage', () => {
    cy.get('input[name=searchbar]')
      .type('adam')
      .get('.all-movies-container')
      .contains('h3', 'Black Adam (2022)')
      .get('img[name=movie-poster]')
      .get('#436270')
  });

  it('should clear the searchbar when the x is clicked', () => {
    cy.get('input[name=searchbar]')
      .type('king')
    cy.get('img[name=cross-icon]').click()
  });

  it('should modify search when deleting letters/word from search', () => {
    cy.get('input[name=searchbar]')
      .type('damn')
      .type('{backspace}')
  });
});