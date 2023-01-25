describe("Go to application",()=>{

    it("Test Case1",()=>{
        cy.visit("https://www.crystalkeyhotels.com/")

        cy.contains("Log in").click()
        

        cy.url().should("include","Account/Logon")
        cy.get('.row > .mb-4').should("be.visible")


        cy.get("li a").should("have.length",29)


        cy.get("a[href='/Rooms/6']").should("have.length",1)


        cy.get("li").find("a[href='/Rooms/6']").should("have.length",1)

        cy.get("div.categories").within(()=>{
            cy.get("a[href='/Rooms/6']").click()
        })

    })



}
)