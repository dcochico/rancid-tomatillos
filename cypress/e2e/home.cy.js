describe('Home View', () => {

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
    cy.visit('http://localhost:3000')
  });

  it('Should display the title on application load', () => {
    cy.get('div').contains('h1','Rancid Tomatillos')
  });

  it('Should display a collection of movies on application load', () => {
    cy.get(".movies-container").children().should("have.length", 3)
  });

  it('Should display an average user rating beneath each movie card', () => {
    cy.get('.card-container').first().contains('h2', '🍅 40%');
  });

  it("Should display a different movie's average rating beneath its movie card", () => {
    cy.get('.card-container').last().contains('h2', '🍅 70%')
  });

  it("Should display a movie's information in nav-bar when hovering over its movie card", () => {
    cy.get('.card-poster-path').first().trigger('mouseover')
      .wait(500)
      .get('.nav-preview').find('.nav-preview-info')
      .get('.nav-preview-info').contains('h1', 'Black Adam')
      .get('.nav-preview-info').contains('p', '🍅 40% • 2022')
      .get('.nav-preview-info').contains('h2', 'The world needed a hero. It got Black Adam.')
      .get('.nav-preview-info').contains('p', 'Action • Fantasy • Science Fiction')
      .get('.nav-preview-info').contains('button', 'More Info')
  });

  it("Should display a different movie's information in nav-bar when hovering over its movie card", () => {
    cy.get('.card-poster-path').last().trigger('mouseover')
      .wait(500)
      .get('.nav-preview').find('.nav-preview-info')
      .get('.nav-preview-info').contains('h1', 'R.I.P.D. 2: Rise of the Damned')
      .get('.nav-preview-info').contains('p', '🍅 70% • 2022')
      .get('.nav-preview-info').contains('h2', 'Meet the new law of the Afterlife.')
      .get('.nav-preview-info').contains('p', 'Fantasy • Action • Comedy • Crime')
      .get('.nav-preview-info').contains('button', 'More Info')
  });

  it("Should click on a movie card and be routed to its movie's page", () => {
    cy.get('.card-poster-path').first().click()
      .url().should('eq', 'http://localhost:3000/movies/436270')
  });

  it("Should click on a different movie card and be routed to its movie's page", () => {
    cy.get('.card-poster-path').last().click()
      .url().should('eq', 'http://localhost:3000/movies/1013860')
  });

  it("Should click on 'More Info' button in nav-bar to view the movie's specific page", () => {
    cy.get('.card-poster-path').first().trigger('mouseover')
      .wait(500)
      .get('.nav-preview-info').contains('button', 'More Info').click()
      .url().should('eq', 'http://localhost:3000/movies/436270')
  });

  it("Should click on a different movie's 'More Info' button in nav-bar to view the movie's specific page", () => {
    cy.get('.card-poster-path').last().trigger('mouseover')
      .wait(500)
      .get('.nav-preview-info').contains('button', 'More Info').click()
      .url().should('eq', 'http://localhost:3000/movies/1013860')
  });

  it('Should display a search bar', () => {
    cy.get('.search-box').find('.search')
  });

  it('Should filter movie results per keystroke', () => {
    cy.get('.movies-container').children().should('have.length', 3)
      .get('.search').type('am')
      .get('.movies-container').children().should('have.length', 2)
  });

  it('Should interpret upper- and lowercase letters as being the same', () => {
    cy.get('.search').type('bLaCk AdAm')
      .get('.movies-container').children().should('have.length', 1)
  })

  it('Should display an error message when no results match search criteria', () => {
    cy.get('.search').type('asdfghjkl')
      .get('div').contains('p', 'Sorry, No Results')
  })

  it('Should display an error message if the all-movies network request fails', () => {
    stubRequest('', 500, "movies")
    cy.get('.error-message')
  });

  it('Should display an error message if the single-movie network request fails', () => {
    stubRequest('/436270', 500, 'blackAdam')
    cy.get('.card-poster-path').first().trigger('mouseover')
      .wait(500)
      .get('.error-message')
  });
})