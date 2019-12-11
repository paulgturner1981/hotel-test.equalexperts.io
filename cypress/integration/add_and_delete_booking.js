describe('Add a booking', function() {
  it('Makes a hotel booking', function() {
    cy.visit('/');
    cy.get('#form #firstname')
    	.type('TEST000001'); //Adds a first name for the booking
    cy.get('#form #lastname')
    	.type('BOOKING00001'); //Adds a last name for the booking
    cy.get('#form #totalprice')
    	.type('99.99'); //Adds a price for the booking
    cy.get('#form #depositpaid')
    	.select('false'); //Selects the option for no deposit
    cy.get('#form #checkin')
    	.click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
    	.click(); //Opens the check-in datepicker and picks a date
    cy.get('#form #checkout')
    	.click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
    	.click(); //Opens the check-out datepicker and picks a date
    cy.get('#form > .row input').last()
    	.click(); // Clicks the Save button
    cy.contains('TEST000001');
    cy.contains('BOOKING00001');
    cy.contains('99.99');
     })
})

describe('Deletes the booking', function() {
  it('Deletes a hotel booking', function() {
    cy.get('#bookings > .row input[value*="Delete"]').last()
    	.click();
	cy.contains('TEST000001').should('not.exist');
    cy.contains('BOOKING00001').should('not.exist');
    cy.contains('99.99').should('not.exist');;        
         })
})