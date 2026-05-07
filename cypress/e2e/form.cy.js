describe('test for form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });

  it('should be visible', () => {
    cy.get('[data-cy="name-input"]').should('be.visible')
    cy.get('[data-cy="surname-input"]').should('be.visible')
    cy.get('[data-cy="age-input"]').should('be.visible')
    cy.get('[data-cy="city-input"]').should('be.visible')
    cy.get('[data-cy="phone-input"]').should('be.visible')
    cy.get('[data-cy="email-input"]').should('be.visible')
    cy.get('[data-cy="privacy-policy-checkbox"]').should('be.visible')
    cy.get('[data-cy="email-updates-radio-sim"]').should('be.visible')
    cy.get('[data-cy="email-updates-radio-nao"]').should('be.visible')
    cy.get('[data-cy="submit-button"]').should('be.visible')
  })

  it('should be possible to fill the form', () => {
    cy.get('[data-cy="name-input"]').type('Marcos')
    cy.get('[data-cy="surname-input"]').type('Bernardino')
    cy.get('[data-cy="age-input"]').type('37')
    cy.get('[data-cy="city-input"]').type('Bauru')
    cy.get('[data-cy="phone-input"]').type('0830520852')
    cy.get('[data-cy="email-input"]').type('marcospivatobernardino@gmail.com')
    cy.get('[data-cy="privacy-policy-checkbox"]').check()
    cy.get('[data-cy="email-updates-radio-sim"]').check()
    cy.get('[data-cy="submit-button"]').click()
    cy.get('[data-cy="success-message"]').should('be.visible')
  })
})