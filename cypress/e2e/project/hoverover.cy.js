describe("move over",()=>{
    it("move over", ()=>{
        cy.visit("https://www.amazon.com")
        cy.get(".icp-nav-link-inner")
        .trigger("mouseover")

        cy.wait(1000)


        cy.get(".icp-mkt-change-lnk").contains("Change country/region.").click()

        cy.get('.a-dropdown-prompt').click()
        cy.get('#icp-dropdown_3').click()

        cy.get('.a-button-input').click()
    })
    



})