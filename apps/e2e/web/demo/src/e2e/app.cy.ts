describe('finance', () => {
    beforeEach(() =>
        cy.visit('/', {
            headers: {
                Connection: 'Keep-Alive',
            },
        })
    );
    it('should display welcome message', () => {
        cy.get('h1[data-testid="heading"]').should('contain', 'Welcome to Solito.');
    });
});
