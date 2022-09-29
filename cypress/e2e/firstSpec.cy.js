describe('test for load app', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  it('check headLine ',()=>{
    cy.get('h1').contains("Books")
  })
})