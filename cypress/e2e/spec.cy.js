describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com/')
    cy.get('[class=ytSearchboxComponentInputContainer]').click().type("deneme")
    cy.get('.ytSearchboxComponentSearchButton > .ytIconWrapperHost > .yt-icon-shape > div').click()
  })
})