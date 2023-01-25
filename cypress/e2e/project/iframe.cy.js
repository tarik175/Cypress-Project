import "cypress-iframe"

describe("iframes",()=>{
    it("handling iframes",()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get("h3").should("contain.text","Editor")

        cy.frameLoaded("#mce_0_ifr")
        cy.iframe().find("p").clear()    
        cy.iframe().find("p").type("Inside the frame")   
    })
})