describe('Smoke Test', () => {
  it('successfully loads the homepage', () => {
    cy.visit('/');
    cy.contains('Welcome').should('exist'); // Adjust text as needed for your app
  });
}); 