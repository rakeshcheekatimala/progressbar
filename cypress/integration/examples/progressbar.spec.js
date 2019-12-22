/// <reference types="Cypress" />

describe('HomePage', () => {

	beforeEach(() => {
		cy.visit('/')
	});

	it('should contain h1 with value progress bar', () => {
		cy.get('.ProgressBar__title').should('contain', 'ProgressBar Demo');
	});

	it('should contain bar tiles', () => {
		cy.get('.Bar').should('be.visible');
	});

	it('should contain % in text vakue', () => {
		cy.get('.Bar__value').first().should('be.visible')
	});

	it('should load atleast one bar value', () => {
		cy.get('.ProgressBar__list>.Bar')
			.its('length')
			.should('be.gt', 1);
	});

	it('should contain % in text vakue', () => {
		cy.get('.Bar__value').first().should('be.visible')
	});

	it('should increase the bar value on button click', () => {
		let initialBarValue = cy.get('.Bar__value').first().value;
		cy.get('.NumberButton').first().click();
		let presentBarValue = cy.get('.Bar__value').first().value;
		expect(initialBarValue < presentBarValue);
	});

	it('should increase the bar value on button click', () => {
		let initialBarValue = cy.get('.Bar__value').first().value;
		cy.get('.NumberButton').first().click();
		let presentBarValue = cy.get('.Bar__value').first().value;
		expect(initialBarValue !== presentBarValue);
	});

	it('change bar1 value using the dropdown and button click', () => {
		cy.get('.ProgressBar select').select('Bar 1');
		let initialBarValue = cy.get('.Bar__value').first().value;
		cy.get('.NumberButton').first().click();
		let presentBarValue = cy.get('.Bar__value').first().value;
		expect(initialBarValue !== presentBarValue);
	});

});