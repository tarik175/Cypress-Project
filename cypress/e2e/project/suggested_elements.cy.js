describe("suggested elements",()=>{
    it("suggested elements", ()=>{
        cy.visit("https://www.google.com")
        cy.get("input[name='q']").type("usa")
        cy.get("li span b").contains("hisse").click()




    })


    it("automationpractice.com",()=>{

        
    })



})