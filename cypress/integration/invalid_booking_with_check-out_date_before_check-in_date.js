describe('Attempt to make a booking with invalid dates', function() {
  it('Attempts to make a booking with a check-out date before the check-in date', function() {
    cy.visit('/');
    cy.get('#form #firstname')
    	.type('CHECKOUT_DATE'); //Adds a first name for the booking
    cy.get('#form #lastname')
    	.type('BEFORE_CHECKIN_DATE'); //Adds a last name for the booking
    cy.get('#form #totalprice')
    	.type('777'); //Adds a price for the booking
    cy.get('#form #depositpaid')
    	.select('false'); //Selects the option for no deposit
    cy.get('#form #checkin')
    	.click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
    cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default')
    	.click(); //Opens the check-in datepicker and picks a date
    cy.get('#form #checkout')
    	.click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
    cy.get(':nth-child(1) > :nth-child(1) > .ui-state-default')
    	.click(); //Opens the check-out datepicker and picks a date prior to the check-in date (invalid)
    cy.get('#form > .row input').last()
    	.click();
    cy.wait(4000)
    cy.contains('CHECKOUT_DATE').should('not.exist');;
    cy.contains('BEFORE_CHECKIN_DATE').should('not.exist');;
    cy.contains('777').should('not.exist');;
     })
})

// NOTE: At present this test fails. This is correct. This is a defect (Defect ID: #3 in the defect report).
// Once this defect has been fixed this test should then pass.