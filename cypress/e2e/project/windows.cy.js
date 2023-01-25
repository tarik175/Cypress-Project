describe("multiple windows",()=>{
    it("handling multiple windows",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke("removeAttr","target")
        cy.get(".example > a").click()


    })


})