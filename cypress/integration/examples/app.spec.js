/// <reference types="Cypress" />

describe('Integration test with visual testing', () => {
	beforeEach(() => {
		cy.visit('/')
	});


	it('Loads the homepage', () => {
		// Load the page or perform any other interactions with the app.
		cy.get('.Bar__value').first().should('be.visible')
		cy.percySnapshot()
	});
});