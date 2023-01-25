describe("navigations",()=>{
    it.skip("Back, forward and refresh",()=>{
        cy.visit("https://www.crystalkeyhotels.com/")
        
        cy.wait(3000)

        cy.contains("Log in").click()

        cy.go("back")
        cy.wait(3000)

        cy.go("forward")
        cy.wait(3000)


        cy.go(-1)

        cy.reload()



    })

    it("chaining the navigations",()=>{

        cy.visit("https://www.crystalkeyhotels.com/")

        cy.contains("Log in").click().go("back").go("forward").go("back")


        cy.reload(true)









    })
})