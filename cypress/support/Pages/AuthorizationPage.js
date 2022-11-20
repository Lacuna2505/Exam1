import basePage from "./BasePage";

class AuthorizationPage extends basePage{
    visit(){
        cy.log('**Open login page**');
        cy.visit('/#/login');
    }

    getEmailField(){
        return cy.get('#email');
    }

    getPasswordField(){
        return cy.get('#password');
    }

    getLoginButton(){
        return cy.get('#loginButton');
    }

    typeTextInEmailField(email){
        cy.log(`Type e-mail ${email} in login field`)
        this.getEmailField().type(email);
    }

    typeTextInPasswordField(password){
        cy.log(`Type password ${password} in password field`)
        this.getPasswordField().type(password);
    }

    submitLoginForm(email, password){
        cy.log(`Fill login form`);
        this.getEmailField().type(email);
        this.getPasswordField().type(password);

        cy.log(`Click login button`);
        this.getLoginButton().click();
    }

    authorizationCheck1(){
        cy.url().should('include', '/#/search');
     }

     authorizationCheck2(){
        cy.get('[aria-label="Show the shopping cart"]');
     }

     getAlertText(){
        return cy.get('.error.ng-star-inserted');
   }
     
}
export default new AuthorizationPage();