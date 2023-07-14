const interceptMovie = (status, movieID) => {
  cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: status,
    fixture: '.././fixtures/all-movies-test'
  })
  
  cy.intercept("GET", `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`, {
    statusCode: status,
    fixture: `.././fixtures/movie${movieID}`
  })

  cy.visit(`localhost:3000/${movieID}`)
}

describe('should display the right elements in single movie view for Black Adam', () => {
  beforeEach(() => {
    interceptMovie(200, 436270)
  })

  it('should load correct background', () => {
    cy.get(".single-movie-background")
      .should('have.attr', 'style')
      .should('include', 'background')
      .should('include', 'url("https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg") center top no-repeat')
  })

  it('should display details', () => {
    cy.get(".back-icon-container")
    .get(".movie-details-poster-container")
    .find('img')
    .should('have.attr', 'src')
    .should('include',`https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg`)
    .get('.details')
    .find('.movie-details-title')
    .contains('Black Adam')
    .get('.release-date')
    .contains('Released on October 19, 2022')
    .get('.rating')
    .contains('Average Rating: 4.0 / 10')
    .get('.movie-description')
    .contains('Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
  })

  it('should be able to navigate between routes', () => {
    cy.url().should('eq', 'http://localhost:3000/436270')
      .get('.back-icon-container')
      .find('img').click()
      .url().should('eq', 'http://localhost:3000/')
      .go(-1).url().should('eq', 'http://localhost:3000/436270')
      .go(1).url().should('eq', 'http://localhost:3000/')
  })

  it('should be able to go to homepage by clicking on logo', () => {
    cy.url().should('eq', 'http://localhost:3000/436270')
      .get('.logo-header').click()
      .url().should('eq', 'http://localhost:3000/')
  
  })

  it('should handle 500 error', () => {
    interceptMovie(500, 436270)
    cy.get('h3')
      .contains('Sorry, movie details could not be loaded')
  })

  it('should handle 400 error', () => {
    interceptMovie(400, 436270)
    cy.get('h3')
      .contains('Sorry, movie details could not be loaded')
  })

  it('should handle 300 error', () => {
    interceptMovie(400, 436270)
    cy.get('h3')
      .contains('Sorry, movie details could not be loaded')
  })
})


describe('should display the right elements in single movie view for The Woman King', () => {
  beforeEach(() => {
    interceptMovie(200, 724495)
  })

  it('should load correct background', () => {
    cy.get(".single-movie-background")
      .should('have.attr', 'style')
      .should('include', 'background')
      .should('include', 'url("https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg") center top no-repeat')
  })

  it('should display details', () => {
    cy.get(".back-icon-container")
    .get(".movie-details-poster-container")
    .find('img')
    .should('have.attr', 'src')
    .should('include',`https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg`)
    .get('.details')
    .find('.movie-details-title')
    .contains('The Woman King')
    .get('.release-date')
    .contains('Released on September 15, 2022')
    .get('.rating')
    .contains('Average Rating: 4.0 / 10')
    .get('.movie-description')
    .contains("The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.")
  })

  it('should be able to navigate between routes', () => {
    cy.url().should('eq', 'http://localhost:3000/724495')
      .get('.back-icon-container')
      .find('img').click()
      .url().should('eq', 'http://localhost:3000/')
      .go(-1).url().should('eq', 'http://localhost:3000/724495')
      .go(1).url().should('eq', 'http://localhost:3000/')
  })

  it('should be able to go to homepage by clicking on logo', () => {
    cy.url().should('eq', 'http://localhost:3000/724495')
      .get('.logo-header').click()
      .url().should('eq', 'http://localhost:3000/')
  
  })

  it('should handle 500 error', () => {
    interceptMovie(500, 724495)
    cy.get('h3')
      .contains('Sorry, movie details could not be loaded')
  })

  it('should handle 400 error', () => {
    interceptMovie(400, 724495)
    cy.get('h3')
      .contains('Sorry, movie details could not be loaded')
  })

  it('should handle 300 error', () => {
    interceptMovie(400, 724495)
    cy.get('h3')
      .contains('Sorry, movie details could not be loaded')
  })
})