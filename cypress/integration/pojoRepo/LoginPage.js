class LoginPage{
    getUserNameBox(){
        return cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        
    }
    getPasswordBox(){
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        
    }
    getLoginButton(){
        cy.get('.MuiButton-label')
    }
}
export default LoginPage