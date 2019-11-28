describe('Add a booking', function() {
  it('Makes a hotel booking', function() {
    cy.visit('/');
    cy.get('#form #firstname')
    	.type('TEST000001');
    cy.get('#form #lastname')
    	.type('BOOKING00001');
    cy.get('#form #totalprice')
    	.type('99.99');
    cy.get('#form #depositpaid')
    	.select('false');
    cy.get('#form #checkin')
    	.click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
    	.click();
    cy.get('#form #checkout')
    	.click();
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
    	.click();
    cy.get('#form > .row > :nth-child(7) > input')
    	.click();
    cy.contains('TEST000001');
    cy.contains('BOOKING00001');
    cy.contains('99.99');
     })
})