describe('single movie view', () => {

  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture:"stubAllMovies"
    })
     .visit('http://localhost:3000')
  });

  it("Should display movie details when user hovers over movie", () => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture:"stubMovieData"
    })
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos", {
      statusCode: 200,
      fixture:"stubVideoData"
    })
      .get(".card-poster-path").click()
      .get(".nav-preview").contains("h1","Black Adam")
  });

  it("Should display movie details when user clicks on movie", () => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      statusCode: 200,
      fixture:"stubMovieData"
    })
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos", {
      statusCode: 200,
      fixture:"stubVideoData"
    })
      .get(".card-poster-path").click()
      .get(".nav-preview").contains("h1","Black Adam")
    cy.get(".card-poster-path").click()
      .get(".focus-container").contains("h1","Black Adam")
  });

})