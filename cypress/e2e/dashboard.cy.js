describe('dashboard view', () => {

  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture:"stubAllMovies"
    })
     .visit('http://localhost:3000')
  });

  it('Should display the title of the application on load', () => {
    
    cy.get('header').contains('h1','Rancid Tomatillos')
  });

  it('Should display a collection on movies when the application is loaded', () => {
    cy.get(".movies-container").should("have.length", 1)
  });

})