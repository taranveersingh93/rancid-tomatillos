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

  it('should be able to search for movies using both uppercase and lowercase', () => {
    cy.get('input[name=searchbar]')
      .type('kInG')
      .get('.all-movies-container')
      .contains('h3', 'The Woman King (2022)')
      .get('img[name=movie-poster]')
      .get('#724495')
  });

  it('should clear the searchbar when the x is clicked', () => {
    cy.get('input[name=searchbar]')
      .type('king')
    cy.get('img[name=cross-icon]').click()
    cy.get('input[name=searchbar]')
      .should('have.value', '');
    cy.get('.all-movies-container').children()
      .should('have.length', 5)
      .first()
      .contains('h3', 'Black Adam (2022)')
  });

  it('should modify search when deleting letters/word from search', () => {
    cy.get('input[name=searchbar]')
      .type('damn')
      .get('.all-movies-container').children()
      .should('have.length', 1)
      .contains('h3', 'R.I.P.D. 2: Rise of the Damned (2022)')
      .get('input[name=searchbar]')
      .type('{backspace}')
      .get('.all-movies-container').children()
      .should('have.length', 3)
      .contains('h3', 'Amsterdam (2022)')
  });

  it('should display an error message when no results are avaiable from search', () => {
    cy.get('input[name=searchbar]')
      .type('kdnfkdfn')
    cy.get('.all-movies-view')
      .contains('h3', 'Sorry, No movies to display')
  });
});