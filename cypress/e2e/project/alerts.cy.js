describe("alerts",()=>{
    it.skip("alerts",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(1) > button').click()

        cy.get('#result').should("have.text","You successfully clicked an alert")

    
    })
    it.skip("dismiss alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get(':nth-child(2) > button').click()

        cy.on("window:confirm",(str)=>{
            return false
        })
        
        cy.get("#result").should("have.text","You clicked: Cancel")
        
    })
    it("entering text on the alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        
        cy.window().then(($windowElement)=>{
            cy.stub($windowElement,"prompt").returns("Hi")
            cy.wait(3000)
            cy.get(':nth-child(3) > button').click()
        })
        



        cy.get("#result").should("have.text","You entered: Hi")


    })
})