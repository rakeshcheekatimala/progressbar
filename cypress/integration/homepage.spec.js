/// <reference types="Cypress" />

describe('Actions', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should contain h1 with value progress bar', () => {
		cy.get('.ProgressBar__title').should('contain', 'ProgressBar Demo');
	})

});