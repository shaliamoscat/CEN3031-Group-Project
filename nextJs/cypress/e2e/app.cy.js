// FILEPATH: /Users/nike/Documents/SOFTWARE/aero-grow/cypress/integration/navbar.spec.js

describe('Navbar component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // adjust this if your Navbar component is not on the root URL
  });

  // test to check if Streaks link renders correctly
  it('Streaks link references correct target', () => {
    cy.get('nav a').contains('Streaks').should('have.attr', 'href', '/Streaks');
  });

  // test to check if Sign in button renders correctly
  it('Sign in button renders correctly', () => {
    cy.get('nav').contains('Sign in').should('exist');
  });

  // test to check if Get Started button renders correctly
  it('Get Started button renders correctly', () => {
    cy.get('nav').contains('Get Started').should('exist');
  });
});