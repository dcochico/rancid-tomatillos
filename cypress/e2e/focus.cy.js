describe('Single Movie View', () => {

  const stubRequest = (id, code) => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movie/${id}`, {
      statusCode: code,
      fixture: 'stubAllMovies'
    });
  }

  beforeEach(() => {
    stubRequest(436270, 200)
    cy.visit('http://localhost:3000')
  });

  it.skip('Should display a single movie and its details', () => {});

  it.skip('Should display a different movie and its details', () => {});

  it.skip('Should be able to navigate back to the home page', () => {});

  it.skip('Should handle unknown routes with a custom 404 page', () => {});

  it.skip('Should display an error message if network request fails', () => {});

  // .get(".card-poster-path").click().url().should("include", "http://localhost:3000/436270")
  
  // .get(".card-poster-path").click()
  // .get(".nav-preview").contains("h1","Black Adam")

  // .get(".card-poster-path").click()
  // .get(".nav-preview").contains("h1","Black Adam")
  // .get(".more-info-button").click()
  // .get(".focus-container").contains("h1","Black Adam")
});