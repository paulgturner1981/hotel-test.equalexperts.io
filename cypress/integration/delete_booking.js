describe('Delete a booking', function() {
  it('Deletes a hotel booking', function() {
    cy.visit('/');
    //#form > .row > :nth-child(7) > input
    cy.get('#3268 > :nth-child(7) > input')
    	.click();
	cy.contains('TEST000001').should('not.exist');;
    cy.contains('BOOKING00001').should('not.exist');;
    cy.contains('99.99').should('not.exist');;        
         })
})