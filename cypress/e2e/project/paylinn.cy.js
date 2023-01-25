

describe("paylinn",()=>{

    before(function(){
        cy.fixture("paylinnCreds").then(
            function(data){
                this.data=data
            }
        )
        
    })
    
    it("paylinn login",function(){
        cy.visit("https://paylinn.com/")
        cy.get('[href="/login"] > .header__option > .header__lineTwo')
        .click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.username)
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.password)

        cy.get('.MuiButton-label').click()

        
    })
})