describe('Single Movie View', () => {

  const stubRequest = (url, code, fixture) => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies${url}`, {
      statusCode: code,
      fixture: fixture
    });
  }

  beforeEach(() => {
    stubRequest('', 200, "movies")
    stubRequest('/436270', 200, 'blackAdam')
    stubRequest('/724495', 200, 'womanKing')
    stubRequest('/1013860', 200, 'ripd')
    stubRequest('/436270/videos', 200, 'blackAdamVideos')
    stubRequest('/724495/videos', 200, 'womanKingVideos')
    stubRequest('/1013860/videos', 200, 'ripdVideos')
    cy.visit('http://localhost:3000')
  });

  it('Should display a single movie and its details', () => {
    cy.get('.card-poster-path').first().click()
      .get('.focus-container').contains('h1', 'Black Adam')
      .get('.focus-wrap').contains('p', '🍅40% • 125 minutes • 2022')
      .get('.focus-wrap').contains('p', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
      .get('.focus-wrap').contains('p', 'Action • Fantasy • Science Fiction')
      .get('.focus-container').contains('button', 'Back')
      .get('iframe').should('have.attr', 'src').and('include', 'https://www.youtube.com/embed/mkomfZHG5q4')
  });

  it('Should display a different movie and its details', () => {
    cy.get('.card-poster-path').last().click()
      .get('.focus-container').contains('h1', 'R.I.P.D. 2: Rise of the Damned')
      .get('.focus-wrap').contains('p', '🍅70% • 102 minutes • 2022')
      .get('.focus-wrap').contains('p', 'When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.')
      .get('.focus-wrap').contains('p', 'Fantasy • Action • Comedy • Crime')
      .get('.focus-container').contains('button', 'Back')
      .get('iframe').should('have.attr', 'src').and('include', 'https://www.youtube.com/embed/L_REOJnLLNI')
  });

  it('Should be able to navigate back to the home page', () => {
    cy.get('.card-poster-path').first().click()
      .get('.focus-container').contains('button', 'Back').click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should handle unknown routes with a custom 404 page', () => {
    cy.visit('http://localhost:3000/nonsense')
      .get('.page-not-found').contains('h1', 'Oh, SNAP!')
      .get('.page-not-found').contains('h2', '404: The page you are looking for was lost in the Blip!')
      .get('.page-not-found').contains('h2', 'Please head back to our main page')
  });

  it('Should allow the user to navigate back to the home page via the 404 page', () => {
    cy.visit('http://localhost:3000/nonsense')
      .get('.page-not-found').find('.home-link').click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('Should display an error message if network request fails', () => {
    stubRequest('/436270', 500, 'blackAdam')
    stubRequest('/436270/videos', 500, 'blackAdam')
    cy.get('.card-poster-path').first().click()
      .get('.focus-container').contains('h1', 'Unable to fetch data at this time. Please try again later.')
  });
});