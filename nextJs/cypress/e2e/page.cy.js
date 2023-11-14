// FILEPATH: /Users/nike/Documents/SOFTWARE/aero-grow/cypress/integration/home.spec.js

describe('Home component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // adjust this if your Home component is not on the root URL
  });

  // test to check if Link component renders correctly
  it('Link references correct target - can navigate to dashboard from HomePage', () => {
    cy.get('a').should('have.attr', 'href', '/');
  });

  // test to check if image renders correctly
  it('HomePage renders correct image and has correct alt text', () => {
    cy.get('img').invoke('attr', 'src').should('include', 'Flower.jpg');
    cy.get('img').should('have.attr', 'alt', 'AeroGrow starter plant');
  });
});