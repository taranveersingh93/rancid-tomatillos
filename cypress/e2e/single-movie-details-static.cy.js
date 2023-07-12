describe('should display the right elements in single movie view', () => {

  const interceptMovie = (status, movieID) => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: status,
      fixture: '.././fixtures/all-movies-test'
    })
    if (movieID) {
      cy.intercept("GET", `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`, {
        statusCode: status,
        fixture: `.././fixtures/movie${movieID}`
        })
      }
    cy.visit(`localhost:3000/${movieID}`)
}
  

  beforeEach(() => {
    interceptMovie(200, 436270)
    })
  
    it('should be able to ', () => {
    })
  
})