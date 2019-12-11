describe('Attempt to make a booking with invalid dates', function() {
  it('Attempts to make a booking with a check-out date before the check-in date', function() {
    cy.visit('/');
    cy.get('#form #firstname')
    	.type('INVALID12345');
    cy.get('#form #lastname')
    	.type('BOOKING12345');
    cy.get('#form #totalprice')
    	.type('999.99');
    cy.get('#form #depositpaid')
    	.select('false');
    cy.get('#form #checkin')
    	.click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
    cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default')
    	.click();
    cy.get('#form #checkout')
    	.click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
    cy.get(':nth-child(1) > :nth-child(1) > .ui-state-default')
    	.click();
    cy.get('#form > .row input').last()
    	.click();
    cy.contains('INVALID12345').should('not.exist');;
    cy.contains('BOOKING12345').should('not.exist');;
    cy.contains('999.99').should('not.exist');;
     })
})

// NOTE: At present this test fails. This is correct. This is a defect (Defect ID: #3 in the defect report).
// Once this defect has been fixed this test should then pass.