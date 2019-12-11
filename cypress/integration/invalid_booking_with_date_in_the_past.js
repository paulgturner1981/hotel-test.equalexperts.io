describe('Attempt to make a booking with invalid dates', function() {
  it('Attempts to make a booking with dates in the past', function() {
    cy.visit('/');
    cy.get('#form #firstname')
    	.type('DATE'); //Adds a first name for the booking
    cy.get('#form #lastname')
    	.type('IN_THE_PAST'); //Adds a last name for the booking
    cy.get('#form #totalprice')
    	.type('999.99'); //Adds a price for the booking
    cy.get('#form #depositpaid')
    	.select('false'); //Selects the option for no deposit
      cy.get('#form #checkin')
          .click();
      cy.get('.ui-datepicker-days-cell-over > .ui-state-default');
    cy.get('.ui-datepicker-prev > .ui-icon')
        .click();
    cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default')
        .click(); //Opens the check-in datepicker and picks the 10th of the previous month
    cy.get('#form #checkout')
        .click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default');
    cy.get(':nth-child(1) > :nth-child(1) > .ui-state-default')
        .click(); //Opens the check-out datepicker and picks the 10th of the previous month
    cy.get('#form > .row input').last()
        .click(); // Clicks the Save button
      cy.wait(4000)
      cy.contains('DATE').should('not.exist');
    cy.contains('IN_THE_PAST').should('not.exist');
    cy.contains('999.99').should('not.exist');
     })
});

// NOTE: At present this test fails. This is correct. This is a defect (Defect ID: #2 in the defect report).
// Once this defect has been fixed this test should then pass.