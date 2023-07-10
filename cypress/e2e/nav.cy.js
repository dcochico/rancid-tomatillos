describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display the title of the application on load', () => {
    
    cy.get('header').contains('h1','Rancid Tomatillos')
  })
})