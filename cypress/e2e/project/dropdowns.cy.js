describe("Dropdowns", ()=>{
    it("dropdown test", ()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown")

        cy.get("#dropdown").select("Option 1").should("have.value","1")
    })


})